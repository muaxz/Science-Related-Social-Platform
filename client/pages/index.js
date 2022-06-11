import React, { useEffect } from 'react'
import Head from "next/head";
import Main from "../containers/pages/Home";
import Mainlayout from "../containers/Layout/mainlayout";
import axios from 'axios';


const Home=({content})=>{

    
    return (
       <React.Fragment>
           <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Parisienne&family=Slabo+27px&display=swap&family=Domine&display=swap&family=Rajdhani:wght@500&display=swap&family=Tinos:ital@1&display=swap&family=IBM+Plex+Serif:wght@500&display=swap" rel="stylesheet"></link>
           </Head>
          <Main mydata={content}></Main>
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

export async function getServerSideProps({req,res}){

    try {

        var {data} = await axios.get(`http://localhost:3001/content/gethome/0/Felsefe`,{headers:{Cookie:req.headers.cookie}})

       
        if(data && data.error){

            return {
                redirect:{
                    destination:"/500"
                }
            };
      
        }

        return { 
            props:{content:data.data}
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