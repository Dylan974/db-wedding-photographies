import 'dotenv/config';

export const sendEmail = ({ email, message, lastname, firstname }) => {

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
    from: email,
    to: 'dylan.boyer.photographe@gmail.com',
    subject: `Message From ${firstname} ${lastname}`,
    text: message,
    html: <div>{message}</div>
  }

  return transporter.sendMail(mailData);
}