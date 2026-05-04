import { logger } from "./logger";

interface EmailOptions {
  subject: string;
  body: string;
}

export async function sendNotificationEmail(options: EmailOptions): Promise<void> {
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const notifyEmail = process.env.NOTIFY_EMAIL;

  if (!smtpUser || !smtpPass || !notifyEmail) {
    logger.info({ subject: options.subject }, "Email notification skipped (SMTP credentials not configured)");
    return;
  }

  try {
    const nodemailer = await import("nodemailer");
    const transporter = nodemailer.default.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: smtpUser,
      to: notifyEmail,
      subject: options.subject,
      text: options.body,
    });

    logger.info({ to: notifyEmail, subject: options.subject }, "Notification email sent");
  } catch (err) {
    logger.error({ err }, "Failed to send notification email");
  }
}
