import React from 'react'
import Mainlayout from "../../containers/Layout/mainlayout";
import Mycontent from "../../containers/pages/Content";
import Head from "next/head"
import {Global} from "../../components/styledcomponents/button"


export default function Content({query}) {
    return (
       <> 
           <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Parisienne&family=Slabo+27px&display=swap&family=Domine&display=swap&family=Rajdhani:wght@500&display=swap&family=Tinos:ital@1&display=swap&family=Libre+Baskerville&display=swap&family=Shippori+Mincho:wght@600&display=swap" rel="stylesheet"></link>
           </Head>
          <Global></Global>
          <Mycontent id={query.id}/>
       </>
    )
}

Content.layout=Mainlayout;

export async function getServerSideProps({query}){
  return {
    props :{query:query}
  }
} 




