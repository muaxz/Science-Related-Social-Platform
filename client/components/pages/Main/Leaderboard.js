import React, { useState } from 'react'
import styled from "styled-components";
import Usercard from '../../shared/Usercard';
import Icon from "../../UI/Icon";
import Slider from "react-slick";

const Contentdiv=styled.div`
height:220px;
padding:15px;
border-radius:10px;
width:100%;
filter:blur (2x);
background-image:url(${({image})=>image});
background-size: cover;
background-repeat: no-repeat;
background-position: center; 
`

const Exteriordiv=styled.div`
position:sticky;
top:80px;
width:300px;
height:600px;
border-radius:7px;
`

const Innerdiv=styled.div`
padding:10px;
height:100%;
`
const Imagediv=styled.div`
height:150px;
display:flex;
flex-direction:column;
justify-content:space-between;
border-top-left-radius:10px;
border-top-right-radius:10px;
background-image:url(/black.jpg);
background-size: cover;
background-repeat: no-repeat;
background-position: center; 
`

const Secondoptiondiv=styled.div`
width:50%;
text-align:center;
color: ${({border})=> border == false ? "#d90429" : "white"};
padding:8px;
border-bottom:2px solid ${({border})=> border ? "#d90429" : "transparent"};
transition:0.1s;
&: hover{
    background-color:#d90429;
    color:white;
    cursor:pointer;
}
`

const Firstpart=styled.div`
overflow:auto;
height:250px;
margin-bottom:10px;
&::-webkit-scrollbar {
    width:30px;
}
&::-webkit-scrollbar:vertical {
    width: 5px;
    }
    
&::-webkit-scrollbar:horizontal {
    height: 12px;
}

&::-webkit-scrollbar-thumb {
    fontsize:10px;
    background-color: rgba(0, 0, 0, .5);
    border-radius:10px;
}
`
const Secondpart=styled.div`
overflow:hidden;
height:290px;
`
/*
 <div style={{textAlign:"center",color:"#d90429",padding:"8px",display:"flex",justifyContent:"space-around"}}>
               <h3>Liderlik Tablosu</h3>
               <Icon className="fas fa-trophy fa-lg" Iconconfig={{color:"#E6D626"}}></Icon>
            </div>
*/           
export default function Leaderboard({list}){
    const [options,setoptions]=useState({
        1:false,
        2:false,
    });

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll:1,
        arrows:true,
        autoplay:true,
        autoplaySpeed:2000,
    };

    return (
       <Exteriordiv>
           <Innerdiv>
               <p style={{marginBottom:"10px",color:"#4a4a4a",fontWeight:"bold"}}>Liderlik Tablosu</p>
               <Firstpart>
                    
                    {
                        [{name:"Musa",image:"/yaprak.jpg"},{name:"Selman",image:"/led.jpg"},{name:"Ahmet",image:"/yaprak.jpg"},{name:"Duhan",image:"/car.jpg"},{name:"Sadık",image:"/car.jpg"},{name:"Sadık",image:"/car.jpg"}].map((item,index)=>(
                            <Usercard firstname={item.name} usernumber={index+1} imageurl={item.image} optionforbutton={false}>543</Usercard>
                        ))
                    }
               </Firstpart> 
               <hr></hr>  
               <Secondpart>
                   <p style={{color:"#4a4a4a",marginBottom:"10px",paddingTop:"10px",fontWeight:"bold"}}>Öne Çıkan Gönderiler</p>
                   <Slider  {...settings}>
                       {
                            [{name:"Uzay neden gizemli? İnsanlar bu konuda ne yapmalı?",image:"/yaprak.jpg"},{name:"Resim ve Düşüncenin insanın fizyolohisine etkisi.",image:"/led.jpg"},{name:"İçimizdeki Sönmeyen Ateşi bulabilir miyiz?",image:"/yaprak.jpg"},{name:"Son Krallık",image:"/car.jpg"},{name:"Sadık",image:"/car.jpg"},{name:"Sadık",image:"/car.jpg"}].map((item,index)=>(
                               <Contentdiv key={index} image={item.image}>
                                   <p style={{color:"white"}}>{item.name}</p>
                               </Contentdiv>
                            ))
                        }
                   </Slider>
               </Secondpart>
           </Innerdiv>
       </Exteriordiv>
    )
}
