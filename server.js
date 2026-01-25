const express = require('express');
const app = express();
const port = 4000;
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});



app.post('/contact', (req, res) => {
    const {name, email, message} = req.body;

    const adminEmail = `
    <div>
        <h1>New Contact Form Message</h1>
        <p><strong>Name: </strong>${name}</p>
        <p><strong>Email: </strong>${email}</p>
        <p><strong>Message: </strong>${message}</p>
    </div>
    `;

    let adminMailOptions = {
    from: `${email}`,
    to: process.env.EMAIL_USER,
    subject: 'New message from contact form',
    html: adminEmail
    };

    transporter.sendMail(adminMailOptions, (error, info) => {
    if (error) {
        console.error(`Error sending email`, error);
        return res.status(500).json({ error: `Failed to send email.`});
    } 

    console.log(`Email Sent!`, info.response);
    res.status(200).json({ success: true, message: `Email sent!`});

    });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});