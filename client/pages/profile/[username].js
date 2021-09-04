import React from 'react'
import Head from "next/head";
import Mainlayout from "../../containers/Layout/mainlayout";
import Profile from "../../containers/pages/Profile";
import {Global} from "../../components/styledcomponents/button"
import axious from "axios";


export default function Stuff({mydata,counts,getquery}){

    
    return (
        <React.Fragment>
            <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Parisienne&family=Slabo+27px&display=swap&family=Domine&display=swap&family=Rajdhani:wght@500&display=swap&family=Tinos:ital@1&display=swap&family=Libre+Baskerville&display=swap&family=Shippori+Mincho:wght@600&display=swap&family=Amiri&display=swap&family=Poppins:ital,wght@1,300&display=swap" rel="stylesheet"></link>
           </Head>
           <Global></Global>
           <Profile Counts={counts} Mydata={mydata} query={getquery}></Profile>
        </React.Fragment>
    )
}

export async function getServerSideProps({query}){ 
    
    try {

        
        const recieve=await axious.all([
            axious.get(`user/getuserprofile/${query.username}`),
            axious.get(`user/getusercount/${query.username}`)
        ])
          
        if(recieve[0].data && recieve[0].data.error || recieve[1].data && recieve[1].data.error){

            return {
                redirect:{
                    destination:"/500"
                }
            };
      
        }
        //404
        if(recieve[0].data.userdata == null){
            
            return {
                redirect:{
                    destination:"/404.js"
                }
            };
    
        };
         
        return {
            props :{mydata:recieve[0].data.userdata,counts:recieve[1].data.data,getquery:query}
        }

    } catch (error) {
        
        return {
            redirect:{
                destination:"/500"
            }
        };
    }

} 

Stuff.layout=Mainlayout;