module.exports = {
    async headers(){
      return [
        {
          source:"/:path*",
          headers:[
            {key:"Access-Control-Allow-Credentials",value:"true"}
          ]
        }
      ]
    },
    compiler: {
      // ssr and displayName are configured by default
      styledComponents: true,
    },

  }