import React from 'react'
import Head from "next/head";
import Mainlayout from "../../containers/Layout/mainlayout";
import Usercontent from "../../containers/pages/Usercontent";
import {Global} from "../../components/styledcomponents/Globalstyles"
import axios from 'axios';

export default function Draftpage({content}) {
  
    return (
        <React.Fragment>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossOrigin="anonymous" />
            </Head>
            <Global></Global>
            <Usercontent  mydata={content} params={"Draft"} ></Usercontent>
        </React.Fragment>
    )
}

export async function getServerSideProps({query,req,res}){

    try {

        const Response  = await axios.get(`/content/usercontent/Draft/${query.userid}/0`,{headers:{Cookie:req.headers.cookie}})

        if(Response.data && Response.data.error){

            return {
                redirect:{
                    destination:"/500"
                }
            };
      
        }

        if(Response.headers['set-cookie']){
          
            res.setHeader("Set-Cookie",[Response.headers['set-cookie'][0]])
        }

        return { 
            props:{content:Response.data.data}
        }

    } catch (error){
         
        return {
            redirect:{
                destination:"/500"
            }
        };
    
    }
}



Draftpage.layout=(children)=>{
    return (
        <Mainlayout>  
            <React.Fragment>
                  {children}
            </React.Fragment>  
        </Mainlayout>
    )
}
