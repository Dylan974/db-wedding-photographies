import 'dotenv/config';
import nodemailer from 'nodemailer';

export default async function handler (req, res) {
  try {
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: 'dylanboyermail@gmail.com',
        pass: process.env.password,
      },
      secure: true,
    });
    const mailData = {
      from: req.body.email,
      to: 'dylan.boyer.photographe@gmail.com',
      subject: `Message From ${req.body.firstname} ${req.body.lastname}`,
      text: req.body.message,
      html: `<h1>${req.body.firstname} ${req.body.lastname}</h1>
      <h2> ${req.body.email}</h2>
      <p>${req.body.message}</p>`
    }
    const result = await transporter.sendMail(mailData);
    return res.status(200).end();
  } catch (error) {
    return res.status(400).end();
  }
}