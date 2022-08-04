export default function handler(req, res) {
      
    if (req.method === 'POST') {

        const {accessToken,refreshToken} = req.body
        res.setHeader("Set-Cookie",[`accessToken=${accessToken};Path=/;Expires=${new Date(Date.now() + (1000*60*60*24*30)).toUTCString()};HttpOnly;Secure;SameSite=None`,`refreshToken=${refreshToken};Path=/;Expires=${new Date(Date.now() + (1000*60*60*24*30)).toUTCString()};HttpOnly;Secure;SameSite=None`])
        return res.json({state:"successful"})

    } else {
      // Handle any other HTTP method
    }
  }