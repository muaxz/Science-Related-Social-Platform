import React from 'react'
import Head from "next/head";
import Main from "../containers/pages/Home";
import Mainlayout from "../containers/Layout/mainlayout";
import axios from 'axios';


const Home = ()=>{
  
    return (
       <React.Fragment>
           <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Parisienne&family=Slabo+27px&display=swap&family=Domine&display=swap&family=Rajdhani:wght@500&display=swap&family=Tinos:ital@1&display=swap&family=IBM+Plex+Serif:wght@500&display=swap" rel="stylesheet"></link>
           </Head>
          <Main></Main>
       </React.Fragment>
    )
}

Home.layout=(children)=>{
    return (
        <Mainlayout>
            {children}
        </Mainlayout>
    )
};

export async function getServerSideProps(context){

    try {

        if(context.query.accessValue){
            context.res.setHeader("Set-Cookie",[`accessToken=${context.query.accessValue};Path=/;Expires=${new Date(Date.now() + (1000*60*60*24*30)).toUTCString()};HttpOnly;Secure;SameSite=None`,`refreshToken=${context.query.refreshValue};Path=/;Expires=${new Date(Date.now() + (1000*60*60*24*30)).toUTCString()};HttpOnly;Secure;SameSite=None`])
        }

        if(context.query.state === "logout"){
            context.res.setHeader("Set-Cookie",[`accessToken=${context.query.accessValue};Max-Age=0;Path=/;HttpOnly;Secure;SameSite=None`,`refreshToken=${context.query.refreshValue};Max-Age=0;Path=/;HttpOnly;Secure;SameSite=None`])
        }

        return { 
            props:{content:[]}
        }

    } catch (error){
         
        return {
            redirect:{
                destination:"/500"
            }
        };
    
    }
}


export default Home;