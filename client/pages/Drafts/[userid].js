import React from 'react'
import Head from "next/head";
import Mainlayout from "../../containers/Layout/mainlayout";
import Guardlayout from "../../containers/Layout/routerguard";
import Usercontent from "../../containers/pages/Usercontent";
import {Global} from "../../components/styledcomponents/Globalstyles"
import axios from 'axios';

export default function Draftpage({content}) {
    console.log(content)
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

export async function getServerSideProps({query,req}){

    try {

        const {data}  =await axios.get(`http://localhost:3001/content/usercontent/Draft/${query.userid}/10`,{headers:{Cookie:req.headers.cookie}})

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



Draftpage.layout=(children)=>{
    return (
        <Mainlayout>
           <Guardlayout>
               <React.Fragment>
                  {children}
               </React.Fragment>
           </Guardlayout>
        </Mainlayout>
       
    )
}
