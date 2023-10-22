const path = require("path");
var nodemailer = require("nodemailer");
var hbs = require("nodemailer-express-handlebars");
require("dotenv").config();

// Create the transporter with the required configuration for Outlook
// change the user and pass !
const sendNotifEmailClient = (userEmail, lastName, firstName , url) => {
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
      partialsDir: path.resolve("./views"),
      defaultLayout: false,
    },
    viewPath: path.resolve("./views"),
    extName: ".handlebars",
  };

  transporter.use("compile", hbs(handlebarOptions));

  // send mail with defined transport object
  var mailOptions = {
    from: "contact@atechor.com",
    to: userEmail,
    subject: "Atechor résultat de votre recherche",
    template: "user",
    context: {
      name: firstName + " " + lastName,
      link: url
    },
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

const sendNotifEmailAtechor = (lastName, firstName, companyName, url) => {
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
      partialsDir: path.resolve("./views"),
      defaultLayout: false,
    },
    viewPath: path.resolve("./views"),
    extName: ".handlebars",
  };

  transporter.use("compile", hbs(handlebarOptions));

  // send mail with defined transport object
  var mailOptions = {
    from: "contact@atechor.com",
    to: "contact@atechor.com",
    subject: "Atechor : Nouveau projet !",
    template: "atechor",
    context: {
      name: firstName + " " + lastName,
      company: companyName,
      solution: "ERP",
      link: url
    },
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = {
  sendNotifEmailClient,
  sendNotifEmailAtechor
};
