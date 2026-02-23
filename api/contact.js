import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

export default async function handler (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

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
};
