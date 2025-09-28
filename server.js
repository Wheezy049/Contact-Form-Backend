require("dotenv").config();
const express = require("express");
const validator = require("validator");
const nodemailer = require("nodemailer");

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.static("public"));
app.use(express.json());

// teansporter (email configuration)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    //   type: "OAuth2",
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    //   refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
  },
});

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !name.trim()) {
    return res.status(400).json({
      error: "Name is required",
    });
  }

  if (!email || !email.trim()) {
    return res.status(400).json({
      error: "Email is required",
    });
  }

  const allowedDomains = ["gmail.com", "yahoo.com", "outlook.com"];
  const emailDomain = email.split("@")[1];

  if (!validator.isEmail(email) || !allowedDomains.includes(emailDomain)) {
    return res.status(400).json({ error: "Please enter a valid email" });
  }

  if (!message || !message.trim()) {
    return res.status(400).json({
      error: "Message is required",
    });
  }

  //  email content
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "New Contact Form Submission",
    html: `
      <h3>Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Failed to send email. Please try again later." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
