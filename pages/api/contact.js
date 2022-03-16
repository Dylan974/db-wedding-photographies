import "dotenv/config";
import nodemailer from "nodemailer";
import * as aws from "@aws-sdk/client-ses";
import { defaultProvider } from "@aws-sdk/credential-provider-node";

export default async function handler(req, res) {
  try {
    const ses = new aws.SES({
      apiVersion: "2010-12-01",
      region: "us-east-1",
      defaultProvider,
      credentials: {
        accessKeyId: process.env.accessKeyId,
        secretAccessKey:  process.env.secretAccessKey,
      },
    });

    // create Nodemailer SES transporter
    const sesTransporter = nodemailer.createTransport({
      SES: { ses, aws },
    });

    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: "dylanboyermail@gmail.com",
        pass: process.env.password,
      },
      secure: true,
    });

    sesTransporter.sendMail(
      {
        from: "dylan.boyer.photographe@gmail.com",
        to: req.body.email,
        subject: "Message",
        text: req.body.message,
        ses: {
          // optional extra arguments for SendRawEmail
          Tags: [
            {
              Name: "tag_name",
              Value: "tag_value",
            },
          ],
        },
      },
      (err, info) => {
        console.log("error", err);
        if(err) {
          return res.status(400).end();
        } else {
          return res.status(200).end();
        }
        // console.log('envelope', info.envelope);
        // console.log('messageId', info.messageId);
      }
    );

    /* const mailData = {
      from: req.body.email,
      to: "dylan.boyer.photographe@gmail.com",
      subject: `Message From ${req.body.firstname} ${req.body.lastname}`,
      text: req.body.message,
      html: `<h1>${req.body.firstname} ${req.body.lastname}</h1>
      <h2> ${req.body.email}</h2>
      <p>${req.body.message}</p>`,
    };
    const result = await transporter.sendMail(mailData);
    return res.status(200).end(); */
  } catch (error) {
    console.log("ERROR", error);
    return res.status(400).end();
  }
}
