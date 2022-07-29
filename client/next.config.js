module.exports = {
    async headers(){
      return [
        {
          source:"/:path*",
          headers:[
            {key:"Access-Control-Allow-Credentials",value:"true"},
            {key:"Access-Control-Allow-Origin",value:"https://mynextrepo.vercel.app"},
            {key:"Access-Control-Allow-Methods",value:"GET, POST, PUT, DELETE"},
          ]
        }
      ]
    },
    compiler: {
      // ssr and displayName are configured by default
      styledComponents: true,
    },

  }