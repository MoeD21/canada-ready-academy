import { Router, type IRouter } from "express";
import { db, assessmentsTable } from "@workspace/db";
import { CreateAssessmentBody, ListAssessmentsResponse, ListAssessmentsResponseItem } from "@workspace/api-zod";
import { sendNotificationEmail } from "../lib/email";

const router: IRouter = Router();

router.get("/assessments", async (req, res): Promise<void> => {
  const rows = await db.select().from(assessmentsTable).orderBy(assessmentsTable.createdAt);
  const mapped = rows.map((r) => ({
    id: r.id,
    name: r.name,
    whatsapp: r.whatsapp,
    englishLevel: r.englishLevel,
    country: r.country,
    careerGoals: r.careerGoals,
    timeInCanada: r.timeInCanada,
    biggestChallenge: r.biggestChallenge,
    createdAt: r.createdAt.toISOString(),
  }));
  res.json(ListAssessmentsResponse.parse(mapped));
});

router.post("/assessments", async (req, res): Promise<void> => {
  const parsed = CreateAssessmentBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const { name, whatsapp, englishLevel, country, careerGoals, timeInCanada, biggestChallenge } = parsed.data;

  const [row] = await db
    .insert(assessmentsTable)
    .values({ name, whatsapp, englishLevel, country, careerGoals, timeInCanada, biggestChallenge })
    .returning();

  const result = {
    id: row.id,
    name: row.name,
    whatsapp: row.whatsapp,
    englishLevel: row.englishLevel,
    country: row.country,
    careerGoals: row.careerGoals,
    timeInCanada: row.timeInCanada,
    biggestChallenge: row.biggestChallenge,
    createdAt: row.createdAt.toISOString(),
  };

  await sendNotificationEmail({
    subject: `New Assessment Booking — ${name}`,
    body: [
      `Canada Ready Academy — New Assessment Submission`,
      ``,
      `Name: ${name}`,
      `WhatsApp: ${whatsapp}`,
      `English Level: ${englishLevel}`,
      `Country: ${country}`,
      `Career Goals: ${careerGoals}`,
      `Time in Canada: ${timeInCanada}`,
      `Biggest Challenge: ${biggestChallenge}`,
      ``,
      `Submitted at: ${row.createdAt.toISOString()}`,
    ].join("\n"),
  });

  res.status(201).json(ListAssessmentsResponseItem.parse(result));
});

export default router;
