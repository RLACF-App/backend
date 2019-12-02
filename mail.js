const nodemailer = require('nodemailer');

// async..await is not allowed in global scope, must use a wrapper
const mail = async (firstname, lastname, phone, userEmail, opportunity) => {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    tls: {
      cipher: 'SSLv3',
      requireTLS: true,
    },
    secure: false, // true for 465, false for other ports possibly TODO
    auth: {
      user: process.env.EMAIL_LOGIN,
      pass: process.env.EMAIL_PW,
    },
  });

  // send mail with defined transport object
  const toClient = await transporter.sendMail({
    from: '"Red Lodge Area Community Foundation" <info@rlacf.org>', // sender address
    to: userEmail, // list of receivers
    subject: 'RLACF Form Successfully Submitted', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>' // html body
  });

  const toHost = await transporter.sendMail({
    from: '"RLACF Volunteer Form" <info@rlacf.org>', // sender address
    to: 'info@rlacf.org', // list of receivers
    subject: 'New Volunteer Form Submission', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>' // html body
  });

  console.log('Message sent: %s', toClient.messageId);
  console.log('Message sent: %s', toHost.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
};

module.exports = mail;
