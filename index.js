const express = require("express");
const nodeMailer = require("nodemailer");


const transporter = nodeMailer.createTransport({
  host: "127.0.0.1",
  port: "1025",
  secure: false,
});

const app = express();

app.get("/mail",(req,res)=>{
    const mailOptions = {
        from: "prakhar@gmail.com",
        to: "do-not-reply@testmail.com",
        subject: "test mail",
        text: "Hello from Node.js!",
    }


    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.log(err);
          res.status(500).json({ success: false, message: "Error sending mail" });
        } else {
          console.log(info);
          res.json({ success: true, message: "Mail sent successfully" });
        }
      });
    });

app.listen("3000",()=>{
    console.log("Server is running on port 3000");
})