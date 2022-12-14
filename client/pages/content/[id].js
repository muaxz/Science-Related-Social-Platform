import React from 'react'
import Mainlayout from "../../containers/Layout/mainlayout";
import Mycontent from "../../containers/pages/Content";
import Head from "next/head"
import axious from "axios";
import {calculatedate} from "../../utilsfunc"


export default function Content({mydata,comments,getquery}) {

    return (
       <> 
           <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Parisienne&family=Slabo+27px&display=swap&family=Domine&display=swap&family=Rajdhani:wght@500&display=swap&family=Tinos:ital@1&display=swap&family=Libre+Baskerville&display=swap&family=Shippori+Mincho:wght@600&display=swap" rel="stylesheet"></link>
           </Head>
          <Mycontent Contentdata={mydata} comments={comments} id={getquery}/>
       </>
    )
}

Content.layout=(children)=>{
    return (
        <Mainlayout>
            {children}
        </Mainlayout>
    )
  }

export async function getServerSideProps({query}){
    
  try {

        const recieve = await axious.all([
        axious.get(`content/Post/${query.id}`),
        axious.get(`comment/${query.id}/false/0/false`)
        ])

    
        //ilk 10 comment için istek atılıcak
        //eğer burası null ise 404 olarak hata döndür redirect to 404.js
        if(recieve[0].data && recieve[0].data.error || recieve[1].data && recieve[1].data.error){
            
            return {
                redirect:{
                    destination:"/500"
                }
            };
    
        };
        //404.js page not found error
        if(recieve[0].data.data == null){
            
            return {
                redirect:{
                    destination:"/404"
                }
            };
    
        };
        
        recieve[0].data.data.difference = calculatedate(recieve[0].data.data.createdAt)

        return {
            props :{mydata:recieve[0].data.data,comments:recieve[1].data.data,getquery:query.id}
        }

    } catch (error) {
        
        return {
            redirect:{
                destination:"/500"
            }
        };
    }
} 




