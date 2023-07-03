/*
    Video: https://www.youtube.com/watch?v=38aE1lSAJZ8
    Don't forget to disable less secure app from Gmail: https://myaccount.google.com/lesssecureapps TODO:
*/

require('dotenv').config();

const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const log = console.log;

// Step 1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL, // TODO: your gmail account 
        pass: process.env.PASSWORD  // TODO: your gmail password
    }
});

// Step 2
transporter.use('compile', hbs({
    viewEngine: 'express-handlebars',
    viewPath: './template'
}));


// Step 3
let mailOptions = {
    from: 'akram1304@gmail.com', // TODO: email sender
    to: 'benali.akr@gmail.com', // TODO: email receiver
    subject: 'Nodemailer - Test',
    text: 'Wooohooo it works!!',
    template: 'index',
    context: {
        name: 'Accime Esterling'
    } // send extra values to template
};

// Step 4
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log('Error occurs');
    }
    return log('Email sent!!!');
});