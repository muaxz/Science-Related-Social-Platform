export default function handler(req, res) {
   
    if (req.method === 'POST') {
        
        res.setHeader("Set-Cookie",[`accessToken=0;Max-Age=0;Path=/;HttpOnly;Secure;SameSite=None`,`refreshToken=0;Max-Age=0;Path=/;HttpOnly;Secure;SameSite=None`])
        return res.json({state:"successful"})

    } else {
      // Handle any other HTTP method
    }
  }