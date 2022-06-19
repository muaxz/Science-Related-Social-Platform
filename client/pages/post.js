import React from 'react'
import PostComponent from "../containers/pages/Post";
import Head from "next/head";
import Mainlayout from "../containers/Layout/mainlayout";
import axios from 'axios';


export default function PostPage({categories,content}){
   
    return (
      <React.Fragment>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossOrigin="anonymous" />
              </Head>
            <PostComponent content={content} categories={categories}/>
      </React.Fragment>
    )

    
}


export async function getServerSideProps(context){

    try {

      var dataProps = {}
      dataProps.content = {}

     
      if(context.query.write){
          var draftResponse = await axios.get(`http://localhost:3001/content/getContentForPost/${context.query.write}`,{headers:{Cookie:context.req.headers.cookie}})
  
          if(draftResponse.data.content != null){
           
             dataProps.content = draftResponse.data.content
          } 
      }
  
      const {data} = await axios.get(`http://localhost:3001/content/getCategories`)
      dataProps.categories = data.data
  
      return {
        props: {...dataProps},// every hour
      }

    }catch (error) {
      

    }
   

}



PostPage.layout=(children)=>{
  return (
      <Mainlayout>
          {children}
      </Mainlayout>
  )
}

