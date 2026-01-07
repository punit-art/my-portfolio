import dotenv from "dotenv";
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.post("/submit", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER, 
      replyTo: email,
      subject: `📩 ${subject}`,
      html: `
        <h2>Some One Message Sent You</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b><br/>${message}</p>
        <hr/>
        <small>Sent from React Contact Form</small>
      `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Email send failed" });
  }
});

app.listen(5001, () =>
  console.log("✅ Server running on http://localhost:5001")
);
