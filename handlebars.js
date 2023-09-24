const path = require('path')
var nodemailer = require('nodemailer');
var hbs = require('nodemailer-express-handlebars');
require('dotenv').config()

// Create the transporter with the required configuration for Outlook
// change the user and pass !
var transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: "587",
  secureConnection: false,
  tls: { ciphers: "SSLv3" },
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

// setup e-mail data, even with unicode symbols
const handlebarOptions = {
  viewEngine: {
    extName: ".handlebars",
    partialsDir: path.resolve('./views'),
    defaultLayout: false,
  },
  viewPath: path.resolve('./views'),
  extName: ".handlebars",
}

transporter.use('compile', hbs(handlebarOptions));

// send mail with defined transport object
var mailOptions = {
  from: 'contact@atechor.com',
  to: "benali.akr@gmail.com",
  subject: 'Sending Email using Node.js',
  template: 'user',
  context: {
    title: 'Title Here',
    text: "Lorem ipsum dolor sit amet, consectetur..."
  }

};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }

});