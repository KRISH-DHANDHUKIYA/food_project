const nodemailer = require('nodemailer');
const { SENDER_EMAIL, PASSWORD } = require('./config');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: SENDER_EMAIL,
        pass: PASSWORD
    }
});

const Sendmail = async (to, subject, text, html) => {
    const mail = {
        from: SENDER_EMAIL,
        to: to,
        subject: subject,
        text: text,
        html: html
    };

    try {
        const info = await transporter.sendMail(mail);
        console.log('✅ Email sent successfully:', info.messageId);
    } catch (error) {
        console.error('❌ Error sending email:', error.message);
    }
};

module.exports = { Sendmail };
