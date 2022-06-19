const nodemailer = require("nodemailer")
const hbs = require("nodemailer-express-handlebars")
const handlebar = require("handlebars")
const fs = require("fs")
const { promisify } = require("util")

module.exports = async (targetEmail,payload)=>{

    let transporter = nodemailer.createTransport({
        host:"smtp-mail.outlook.com",
        port:587,
        auth: {
          user:"bexsd@hotmail.com", // generated ethereal user
          pass:"koy123456aA", // generated ethereal password
        },
      });
      const readHtml = fs.readFileSync(__dirname+"/email.handlebars","utf8")
      
      const template = handlebar.compile(readHtml)


      const htmlContent = template({firstname:payload.firstname,surname:payload.surname,generatedLink:payload.generatedLink})
    
      // send mail with defined transport object
      const emailRepsonse = await transporter.sendMail({
        from: "bexsd@hotmail.com", // sender address
        to: targetEmail, // list of receivers
        subject: "Hello ✔", // Subject line // plain text body
        html:htmlContent // html body
      });

      if(!emailRepsonse.rejected.length)
      return false;

      return true;  
}