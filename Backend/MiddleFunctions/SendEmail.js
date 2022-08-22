const nodemailer = require("nodemailer")
const hbs = require("nodemailer-express-handlebars")
const handlebar = require("handlebars")
const fs = require("fs")


module.exports = async (targetEmail,payload,forPassword)=>{

    let transporter = nodemailer.createTransport({
        host:"smtp.office365.com",
        port:587,
        auth: {
          user:"bexsd@hotmail.com", // generated ethereal user
          pass:"koy123456aA", // generated ethereal password
        },
        tls:{
          rejectUnauthorized: false
        }
      });
      const readHtml = fs.readFileSync(__dirname+(forPassword ? "/password.handlebars" : "/verification.handlebars"),"utf8")
      
      const template = handlebar.compile(readHtml)


      const htmlContent = template({firstname:payload.firstname,surname:payload.surname,generatedLink:payload.generatedLink,code:payload.verificationCode})
    
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