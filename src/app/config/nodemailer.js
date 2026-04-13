
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.mailgun.org", // Mailgun SMTP host
  port: Number(process.env.SMTP_PORT || 465), // SSL/TLS port
  secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : true, // Use TLS
  auth: {
    user: process.env.SMTP_USER, // Mailgun SMTP username
    pass: process.env.SMTP_PASS, // Mailgun SMTP password
  },
});

// config/mailgun.js
import Mailgun from "mailgun.js";
import formData from "form-data";

const mg = new Mailgun(formData);

export const mailgunClient = mg.client({
  username: process.env.MAILGUN_USERNAME || "api",
  key: process.env.MAILGUN_API_KEY,
  url: process.env.MAILGUN_API_URL || "https://api.mailgun.net",
});

export const MAILGUN_DOMAIN = "gmgmarkets.co.uk";

export const MAILGUN_FROM =
  "GMG Group <info@gmgmarkets.co.uk>" || `GMG Group <postmaster@${MAILGUN_DOMAIN}>`;  
