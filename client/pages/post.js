import React from 'react'
import PostComponent from "../containers/pages/Post";
import Head from "next/head";
import Mainlayout from "../containers/Layout/mainlayout";
import axios from 'axios';


export default function PostPage({categories}){

    return (
      <React.Fragment>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossOrigin="anonymous" />
              </Head>
            <PostComponent categories={categories}/>
      </React.Fragment>
    )

    
}


export async function getStaticProps(context) {
  
  
    const {data} = await axios.get(`http://localhost:3001/content/getCategories`)

    return {
      props: {categories:data.data},// every hour
      revalidate:60,
    }

}



PostPage.layout=(children)=>{
  return (
      <Mainlayout>
          {children}
      </Mainlayout>
  )
}

