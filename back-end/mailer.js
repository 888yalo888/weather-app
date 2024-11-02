const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
    },
});

//console.log(transporter);

module.exports = async function sendEmail(to, subject, text) {
    const info = await transporter.sendMail({
        from: '"Olga Geyfman-Orlova" <contactolgago+weather@gmail.com>',
        to: to,
        subject: subject,
        text: text,
    });
};

console.log(process.env.SMTP_HOST, process.env.SMTP_USERNAME);

//sendEmail().catch(console.error);
