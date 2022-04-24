const Token = require("csrf");

module.exports = (req,res,next)=>{

    const csrf = new Token();
    const secret = csrf.secretSync();
    const createdToken  = csrf.create(secret);
    const currentToken  = req.headers["csrf-token"]
    
    console.log(req.session.csrfSecret)
    if(csrf.verify(req.session.csrfSecret,currentToken)){

        req.session.csrfSecret = secret;
        res.header("csrf-token",createdToken)
        return next()

    }


    return res.json({error:"Page Not Found CSRF!",state:401})

}