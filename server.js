const nodemailer = require("nodemailer");
const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 80;

// middelware
app.use(express.static("./"));
app.use(express.json());

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/Portfolio/html/aboutMe.html')
})


app.post('/', (req, res)=>{
    console.log(req.body)

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            type: "login",
            user: process.env.MAIL_LOGIN,
            pass: process.env.PASSWORD_MAIL
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: 'baetenjens07@gmail.com',
        subject: `Message from ${req.body.email}: ${req.body.subject}`,
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        if (error) {
            console.log(error);
            res.send('error');
        } else {
            console.log(`Email sent: ${info.response}`);
            res.send('success');
        }
    })

})

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})
