const nodemailer = require('nodemailer');

const mail = async (firstname, lastname, phone, userEmail, opportunity) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    tls: {
      cipher: 'SSLv3',
      requireTLS: true,
    },
    secure: false,
    auth: {
      user: process.env.EMAIL_LOGIN,
      pass: process.env.EMAIL_PW,
    },
  });

  const toClient = await transporter.sendMail({
    from: '"Volunteer Inquiries" <volunteer@rlacf.org>',
    to: userEmail,
    subject: 'RLACF Form Successfully Submitted',
    text: 'Thank you for your interest in volunteering in the community, I really appreciate it! Volunteers make a huge difference and many important impacts. You are currently being connected to the volunteer coordinator in your interest area. You can expect to receive more information within 24 hours. If you would like more information before then, please reply to this email.\n\nMake It A Great Day!', // plain text body
    html: 'Thank you for your interest in volunteering in the community, I really appreciate it! Volunteers make a huge difference and many important impacts. You are currently being connected to the volunteer coordinator in your interest area. You can expect to receive more information within 24 hours. If you would like more information before then, please reply to this email. <br><br>Make It A Great Day!', // html body
  });

  const toHost = await transporter.sendMail({
    from: '"Volunteer Inquiries" <volunteer@rlacf.org>',
    to: process.env.HOST_EMAIL,
    subject: 'New Volunteer Form Submission',
    text: `New Volunteer Form Submited\n\n First Name: ${firstname}\n\nLast Name: ${lastname}\n\nPhone: ${phone}\n\nEmail: ${userEmail}\n\nOpportunity: ${opportunity}`, // plain text body
    html: `New Volunteer Form Submited<br><br> <b>First Name:</b> ${firstname}<br><br><b>Last Name:</b> ${lastname}<br><br><b>Phone:</b> ${phone}<br><br><b>Email:</b> ${userEmail}<br><br><b>Opportunity:</b> ${opportunity}`,
  });
};

module.exports = mail;
