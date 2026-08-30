import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    const { data, error } = await resend.emails.send({
      from: "Devfolio <onboarding@resend.dev>",
      to: process.env.EMAIL_USER,
      reply_to: email,
      subject: `New message from ${name} via devfolio`,
      html: `
                <div>
                    <h1>New Contact Form Message</h1>
                    <p><strong>Name: </strong>${name}</p>
                    <p><strong>Email: </strong>${email}</p>
                    <p><strong>Message: </strong>${message}</p>
                </div>
            `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return res.status(400).json({ error });
    }
    return res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res
      .status(500)
      .json({ error: "Failed to send email. Please try again later." });
  }
}
