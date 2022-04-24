import React from 'react'
import Head from "next/head";
import ReportControl from "../containers/pages/reportcontrol";
import Mainlayout from "../containers/Layout/mainlayout";
import axios from 'axios';


const ReportPage=({error,content})=>{

    if(error) return null;

    return (
       <React.Fragment>
           <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Parisienne&family=Slabo+27px&display=swap&family=Domine&display=swap&family=Rajdhani:wght@500&display=swap&family=Tinos:ital@1&display=swap&family=IBM+Plex+Serif:wght@500&display=swap" rel="stylesheet"></link>
           </Head>
          <ReportControl controlType={"Reports"} reportList={content}></ReportControl>
       </React.Fragment>
    )
}

ReportPage.layout=(children)=>{
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

            var response = await axios.get("http://localhost:3001/content/getReports",{headers:{Cookie:req.headers.cookie}})
            if(response.data.state == 404){
                needRedirect = true;
            }else if(response.data.state == 401){
                return {
                    props:{error:401}
                }
            }

        }else needRedirect = true

        if(needRedirect){

            return {
                redirect:{
                    destination:"/404"
                }
            };

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


export default ReportPage;