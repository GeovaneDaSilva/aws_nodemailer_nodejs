"use strict";
const nodemailer = require("nodemailer");


function email(req, res){

    async function main() {
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        let testAccount = await nodemailer.createTestAccount();
      
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
          host: process.env.HOST,
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: process.env.user, // generated ethereal user
            pass: process.env.pass, // generated ethereal password
          },
        });
      
        // send mail with defined transport object
        let info = await transporter.sendMail({
          from: 'process.environments@gmail.com', // sender address
          to: "geovaneartedesign@gmail.com", // list of receivers
          subject: "Enviando email", // Subject line
          text: "Todo funciono correctamente", // plain text body
          html: "<b>Gracias por mirar ese video, please compartelo!</b>", // html body
        });
      
        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      }
      
      main().catch(console.error);


    res.status(200).json({
        ok: true,
        message:'Se envio correctamente'
    })

}







module.exports = {

email

};
