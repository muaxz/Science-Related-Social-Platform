const Redis = require("ioredis")

const client = new Redis({
    host:"ec2-44-199-54-215.compute-1.amazonaws.com",
    port:7970,
    password:"p02f1a4d23900a9697de8339827683c998e2bb370467e9070a9353cf970871c36",
    tls:{
       rejectUnauthorized: false
    }
})


module.exports = client;