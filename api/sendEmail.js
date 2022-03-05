require('dotenv').config();

const sendEmail = ({ email, message, lastname, firstname }) => {

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'demo@demo.gmail',
      pass: process.env.password,
    },
    secure: true,
  });
  const mailData = {
    from: email,
    to: 'your email',
    subject: `Message From ${firstname} ${lastname}`,
    text: message,
    html: <div>{message}</div>
  }

  transporter.sendMail(mailData, (err, info) => {
    if (err)
      console.log(err)
    else
      console.log(info)
  })
}