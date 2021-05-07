import React from 'react'
import ContextProvider from "../context/Usercontext";
import Head from "next/head"
import {useRouter} from "next/router"

const Myapp=({Component,pageProps})=>{
   
    const Layout=Component.layout || React.Fragment;
    const router =useRouter();
    console.log(router.pathname)
    
    return (
        <ContextProvider>
            <Head>
              <link href="https://fonts.googleapis.com/css2?family=Parisienne&family=Slabo+27px&display=swap&family=Domine&display=swap&family=Rajdhani:wght@500&display=swap&family=Tinos:ital@1&display=swap&family=IBM+Plex+Serif:wght@500&display=swap" rel="stylesheet"></link>
            </Head>
            <Layout>
               <Component {...pageProps}/>
            </Layout>
        </ContextProvider>
   )
}

export default Myapp;
