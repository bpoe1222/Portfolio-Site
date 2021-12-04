const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
        auth: {
            api_key: '02374ed34fb62daea72aa626803f3f22-7b8c9ba8-f391cbdb',
            domain: 'sandboxfcb986636a5349749cfe92a8a339cabc.mailgun.org'
        }
    };

    const transporter = nodemailer.createTransport(mailGun(auth));

    const sendMail = (email, text, cb) => {
        const mailOptions = {
            from: email,
            to: 'baileypoe1222@gmail.com',
            text: text
        };
    
        transporter.sendMail(mailOptions, function(err, data) {
            if (err) {
                cb(err, null);
            } else {
                cb(null, data);
            }
        });
    
    // Exporting the sendmail
    module.exports = sendMail;
    }