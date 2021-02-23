import React,{useEffect,useState,useContext,useReducer,useCallback} from 'react'
import {createusercontext} from "../context/Usercontext";
import Contentcard from "../components/shared/Contentcard";
import Head from "next/head";
import {Global} from "../components/styledcomponents/button";
import Main from "../containers/pages/Home";


const Home=()=>{
    console.log("HOME RENDERED")
    return (
       <React.Fragment>
           <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Parisienne&family=Slabo+27px&display=swap&family=Domine&display=swap&family=Rajdhani:wght@500&display=swap&family=Tinos:ital@1&display=swap" rel="stylesheet"></link>
           </Head>
          <Global></Global>
          <Main></Main>
       </React.Fragment>
    )
}

export default Home;