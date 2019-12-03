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
    from: '"Volunteer Inquiries" <volunteer@rlacf.org>', // sender address
    to: userEmail, // list of receivers
    subject: 'RLACF Form Successfully Submitted', // Subject line
    text: 'Thank you for your interest in volunteering in the community, I really appreciate it! Volunteers make a huge difference and many important impacts. You are currently being connected to the volunteer coordinator in your interest area. You can expect to receive more information within 24 hours. If you would like more information before then, please reply to this email.\n\nMake It A Great Day!', // plain text body
    html: 'Thank you for your interest in volunteering in the community, I really appreciate it! Volunteers make a huge difference and many important impacts. You are currently being connected to the volunteer coordinator in your interest area. You can expect to receive more information within 24 hours. If you would like more information before then, please reply to this email. <br><br>Make It A Great Day!', // html body
  });

  const toHost = await transporter.sendMail({
    from: '"Volunteer Inquiries" <volunteer@rlacf.org>', // sender address
    to: process.env.HOST_EMAIL, // list of receivers
    subject: 'New Volunteer Form Submission', // Subject line
    text: `New Volunteer Form Submited\n\n First Name: ${firstname}\n\nLast Name: ${lastname}\n\nPhone: ${phone}\n\nEmail: ${userEmail}\n\nOpportunity: ${opportunity}`, // plain text body
    html: `New Volunteer Form Submited<br><br> <b>First Name:</b> ${firstname}<br><br><b>Last Name:</b> ${lastname}<br><br><b>Phone:</b> ${phone}<br><br><b>Email:</b> ${userEmail}<br><br><b>Opportunity:</b> ${opportunity}`, // html body
  });

  console.log('Message sent: %s', toClient.messageId);
  console.log('Message sent: %s', toHost.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
};

module.exports = mail;
