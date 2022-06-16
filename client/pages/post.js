import React,{useContext} from 'react'
import PostPage from "../containers/pages/Post";
import Head from "next/head";
import router from "next/router"
import Mainlayout from "../containers/Layout/mainlayout";
import {createusercontext} from "../context/Usercontext"
import axios from 'axios';


export default function MyEditor({categories}){

    const {spinner,logged} = useContext(createusercontext);
    //waiting for results to be completed
   
    if(spinner && logged){

        return (
          <React.Fragment>
             <Head>
               <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossOrigin="anonymous" />
             </Head>
             <PostPage categories={categories}/>
          </React.Fragment>
        )

    }else if(spinner && !logged){
    
        router.push("/404")

    }

    return null;
}


export async function getStaticProps(context) {
  
  try {

    const {data} = await axios.get(`http://localhost:3001/content/getCategories`)

    return {

      props: {categories:data.data},
      revalidata:60*60// every hour
      
    }

  } catch (error) {

    return {redirect:{destination:"/500"}};

 }

}

MyEditor.layout=(children)=>{
  return (
      <Mainlayout>
          {children}
      </Mainlayout>
  )
}







