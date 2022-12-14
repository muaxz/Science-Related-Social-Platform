import React from 'react'
import Head from "next/head";
import Mainlayout from "../../containers/Layout/mainlayout";
import Usercontent from "../../containers/pages/Usercontent";
import {Global} from "../../components/styledcomponents/Globalstyles"
import axios from 'axios';
import {calculatedate} from "../../utilsfunc"


export default function Saved({content}) {
    return (
        <React.Fragment>
            <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Parisienne&family=Slabo+27px&display=swap&family=Domine&display=swap&family=Rajdhani:wght@500&display=swap&family=Tinos:ital@1&display=swap&family=Libre+Baskerville&display=swap&family=Shippori+Mincho:wght@600&display=swap&family=Amiri&display=swap&family=Poppins:ital,wght@1,300&display=swap" rel="stylesheet"></link>
           </Head>
           <Global></Global>
           <Usercontent mydata={content} params={"Readlater"}></Usercontent>
        </React.Fragment>
    )
}



export async function getServerSideProps({query,req,res}){

    try {
      
        if(req.headers.cookie){

            var Response = await axios.get(`/content/usercontent/Readlater/${query.userıd}/0`,{headers:{Cookie:req.headers.cookie}})


            if(Response.data && Response.data.error){

                return {
                    redirect:{
                        destination:"/500"
                    }
                };
          
            }

            Response.data.data.forEach(element => {
                element.difference = calculatedate(element.createdAt)
            });

            if(Response.headers['set-cookie']){
                console.log(Response.headers['set-cookie'][0])
                res.setHeader("Set-Cookie",[Response.headers['set-cookie'][0]])
            }

            return { 
                props:{content:Response.data.data}
            }

        }else{

            return {
                redirect:{
                    destination:"/404"
                }
            }

        }
    

    } catch (error){
         
        return {
            redirect:{
                destination:"/500"
            }
        };
    
    }
}

Saved.layout=(children)=>{
    return (
        <Mainlayout>
               <React.Fragment>
                  {children}
               </React.Fragment>
        </Mainlayout>
       
    )
}