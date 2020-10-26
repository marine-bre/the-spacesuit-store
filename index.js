const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

// serve up production assets
app.use(express.static('client/build'));
// let the react app to handle any unknown routes 
// serve up the index.html if express does'nt recognize the route
const path = require('path');
app.get('*', (req, res) => {
res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

//parsing content from form
app.use(express.json())
app.use(express.urlencoded())

//post request for contact form

app.post('/send', (req, res) => {

    const output = `
    <h2>Message received: </h2>
    <p>${req.body.message}</p>
    <h2>From: </h2>
    <p> Contact name: ${req.body.name} </p>
    <p> Email: ${req.body.email}</p>
    <p> Phone number: ${req.body.phone}</p>   
    `;

    //sending email to myself as a notification
    const sending = async () => {

        let transporter = nodemailer.createTransport({
            host: "smtp.mail.yahoo.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_ONE,
                pass: process.env.PASSWORD,
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        let info = await transporter.sendMail({
            from: '"The Spacesuit Store" <spacesuitstore@yahoo.com>', // sender address
            to: process.env.MY_EMAIL, // list of receivers
            subject: "New contact message received from the Spacesuit Store!", // Subject line
            text: "Message received", // plain text body
            html: output, // html body
        });

        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }

    //sending email to the client telling them we received his message

    const output2 = `
    <h2>Hi ${req.body.name} We got your message: </h2>
    <p>"${req.body.message}"</p>
    <p> We will reply to your message as soon as possible!</p>
    <p> Have a good day! </p>
    `;

    const sendingToContact = async () => {

        let transporter2 = nodemailer.createTransport({
            host: "smtp.mail.yahoo.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_ONE,
                pass: process.env.PASSWORD,
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        let info2 = await transporter2.sendMail({
            from: '"The Spacesuit Store" <spacesuitstore@yahoo.com>', // sender address
            to: `${req.body.email}`, // list of receivers
            subject: "Hello from the Spacesuit Store!", // Subject line
            text: "We got it!", // plain text body
            html: output2, // html body
        });

        console.log("Message sent: %s", info2.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info2));
    }

    //calling both functions
    sending().catch(console.error);
    sendingToContact().catch(console.error)

}
)


//

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server connected on port ${PORT}`)
})