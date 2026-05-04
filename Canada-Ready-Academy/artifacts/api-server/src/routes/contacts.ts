import { Router, type IRouter } from "express";
import { db, contactsTable } from "@workspace/db";
import { CreateContactBody, ListContactsResponse, ListContactsResponseItem } from "@workspace/api-zod";
import { sendNotificationEmail } from "../lib/email";

const router: IRouter = Router();

router.get("/contacts", async (req, res): Promise<void> => {
  const rows = await db.select().from(contactsTable).orderBy(contactsTable.createdAt);
  const mapped = rows.map((r) => ({
    id: r.id,
    name: r.name,
    email: r.email,
    whatsapp: r.whatsapp ?? null,
    message: r.message,
    createdAt: r.createdAt.toISOString(),
  }));
  res.json(ListContactsResponse.parse(mapped));
});

router.post("/contacts", async (req, res): Promise<void> => {
  const parsed = CreateContactBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const { name, email, whatsapp, message } = parsed.data;

  const [row] = await db
    .insert(contactsTable)
    .values({ name, email, whatsapp: whatsapp ?? null, message })
    .returning();

  const result = {
    id: row.id,
    name: row.name,
    email: row.email,
    whatsapp: row.whatsapp ?? null,
    message: row.message,
    createdAt: row.createdAt.toISOString(),
  };

  await sendNotificationEmail({
    subject: `New Contact Message — ${name}`,
    body: [
      `Canada Ready Academy — New Contact Submission`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      `WhatsApp: ${whatsapp ?? "Not provided"}`,
      `Message: ${message}`,
      ``,
      `Submitted at: ${row.createdAt.toISOString()}`,
    ].join("\n"),
  });

  res.status(201).json(ListContactsResponseItem.parse(result));
});

export default router;
