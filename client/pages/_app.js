import React from 'react'
import Context from "../context/Usercontext";
import Head from "next/head"

const Myapp=({Component,pageProps})=>{
    console.log("rendered app")
    const Layout=Component.layout || React.Fragment;
    
    return (
        <Context>
            <Head>
              <link href="https://fonts.googleapis.com/css2?family=Parisienne&family=Slabo+27px&display=swap&family=Domine&display=swap&family=Rajdhani:wght@500&display=swap&family=Tinos:ital@1&display=swap&family=Libre+Baskerville&display=swap&family=Shippori+Mincho:wght@600&display=swap" rel="stylesheet"></link>
            </Head>
            <Layout>
               <Component {...pageProps}/>
            </Layout>
        </Context>
   )
}

export default Myapp;
