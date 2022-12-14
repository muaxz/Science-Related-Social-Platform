import React from 'react'
import Head from "next/head";
import Mainlayout from "../../../containers/Layout/mainlayout";
import Profile from "../../../containers/pages/Profile";
import {Global} from "../../../components/styledcomponents/Globalstyles"
import axios from "axios";
import {calculatedate} from "../../../utilsfunc"


export default function Stuff({profile,counts,contents,getquery}){

    
    return (
        <React.Fragment>
            <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Parisienne&family=Slabo+27px&display=swap&family=Domine&display=swap&family=Rajdhani:wght@500&display=swap&family=Tinos:ital@1&display=swap&family=Libre+Baskerville&display=swap&family=Shippori+Mincho:wght@600&display=swap&family=Amiri&display=swap&family=Poppins:ital,wght@1,300&display=swap&family=Inter:wght@700&display=swap&family=Roboto:wght@700&display=swap&family=Bebas+Neue&display=swap" rel="stylesheet"></link>
           </Head>
           <Global></Global>
           <Profile Counts={counts} Mydata={profile} query={getquery} Contentdata={contents}></Profile>
        </React.Fragment>
    )
}

export async function getServerSideProps({req,query}){ 
    
    try {
    
        const recieved = await axios.all([
            axios.get(`user/getuserprofile/${query.username}`,req.headers.cookie ? {headers:{Cookie:req.headers.cookie}} : {}),
            axios.get(`user/getusercount/${query.username}`,req.headers.cookie ? {headers:{Cookie:req.headers.cookie}} : {}),
            axios.get(`user/getuserprofilecontent/${query.username}/${query.name == "Post" ? "true" : "false"}/${query.name}/0`,req.headers.cookie ? {headers:{Cookie:req.headers.cookie}} : {})
        ])
        //users?age=15&gender=m&

        recieved[2].data.data.forEach(element => {
            element.difference = calculatedate(element.createdAt)
        });
        
        if(recieved[0].data && recieved[0].data.error || recieved[1].data && recieved[1].data.error){

            return {
                redirect:{
                    destination:"/500"
                }
            };
      
        }
        //404
        if(recieved[0].data.userdata == null){
            
            return {
                redirect:{
                    destination:"/404"
                }
            };
    
        };
         
        return {
            props :{profile:recieved[0].data.userdata,counts:recieved[1].data.data,contents:recieved[2].data.data,getquery:query}
        }

    } catch (error) {
        
        return {
            redirect:{
                destination:"/500"
            }
        };
    }

} 

Stuff.layout=(children)=>{
    return (
        <Mainlayout>
            {children}
        </Mainlayout>
    )
};