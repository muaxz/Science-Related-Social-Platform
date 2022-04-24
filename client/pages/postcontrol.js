import React,{useContext} from 'react'
import Head from "next/head";
import PostControl from "../containers/pages/PostControl";
import Mainlayout from "../containers/Layout/mainlayout";
import {createusercontext} from "../context/Usercontext";
import axios from 'axios';


const PostControlPage=({error,content})=>{


    if(error) return null;
    

    return (
       <React.Fragment>
           <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Parisienne&family=Slabo+27px&display=swap&family=Domine&display=swap&family=Rajdhani:wght@500&display=swap&family=Tinos:ital@1&display=swap&family=IBM+Plex+Serif:wght@500&display=swap" rel="stylesheet"></link>
           </Head>
          <PostControl contentData={content} ></PostControl>
       </React.Fragment>
    )
}

PostControlPage.layout=(children)=>{
    return (
        <Mainlayout>
            {children}
        </Mainlayout>
    )
};

export async function getServerSideProps({req,res}){
   
    try {

        var needRedirect = false;
       

        if(req.headers.cookie){

            var response = await axios.get("http://localhost:3001/content/getModContents/Default/null",{headers:{Cookie:req.headers.cookie}})

            if(response.data.state == 404){

                needRedirect = true
                
            }
            else if(response.data.state == 401){

                return {
                    props:{error:401}
                }

            }

        }else needRedirect = true;

        if(needRedirect){
            return {
                redirect:{
                    destination:"/404"
                }
            }
        }
        
        return {
            props:{content:response.data.data}
        }

    } catch (error) {

        return {
            redirect:{
                destination:"/500"
            }
        };
    }
}


export default PostControlPage;
