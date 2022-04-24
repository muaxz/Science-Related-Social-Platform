import React,{useContext} from 'react'
import CKE from "../containers/pages/Post";
import Head from "next/head";
import router from "next/router"
import Mainlayout from "../containers/Layout/mainlayout";
import {createusercontext} from "../context/Usercontext"


export default function MyEditor({state}){

    const {spinner,logged} = useContext(createusercontext);
    //waiting for results to be completed
    
    if(spinner && logged){

        return (
          <React.Fragment>
          <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossOrigin="anonymous" />
          </Head>
          <CKE/>
          </React.Fragment>
        )

    }else if(spinner && !logged){
    
        router.push("/404")

    }

    return null;
}

MyEditor.layout=(children)=>{
  return (
      <Mainlayout>
          {children}
      </Mainlayout>
  )
}







