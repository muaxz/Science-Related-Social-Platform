import React, { useState } from 'react'
import styled from "styled-components";
import Usercard from '../../shared/Usercard';
import Icon from "../../UI/Icon";


const Exteriordiv=styled.div`
position:fixed;
top:80px;
right:30px;
width:300px;
height:500px;
border-radius:10px;
background-color:white;
box-shadow: 0 1px 1px rgba(0,0,0,0.15), 
0 2px 2px rgba(0,0,0,0.15), 
0 4px 4px rgba(0,0,0,0.15), 
0 8px 8px rgba(0,0,0,0.15);
`

const Innerdiv=styled.div`
padding:10px;
height:345px;
overflow:auto;
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
    return (
       <Exteriordiv>
           <Imagediv>
            <div style={{textAlign:"center",color:"#d90429",padding:"10px",display:"flex",justifyContent:"space-between"}}>
                <Icon className="fas fa-trophy fa-lg" Iconconfig={{color:"#E6D626"}}></Icon>
                <h3 style={{color:"white"}}>#1.Hafta</h3>
            </div>
            <div style={{display:"flex"}}>
                <Secondoptiondiv onClick={()=>setoptions(prev=>{return{...prev,1:true,2:false}})} border={options["1"]}>Bu Hafta</Secondoptiondiv>
                <Secondoptiondiv onClick={()=>setoptions(prev=>{return{...prev,2:true,1:false}})} border={options["2"]}>Geçen Hafta</Secondoptiondiv> 
            </div>
           </Imagediv>
            <hr></hr>
           <Innerdiv>
               {
                   [{name:"Sadık",image:"car.jpg"},{name:"Sadık",image:"car.jpg"},{name:"Sadık",image:"car.jpg"},{name:"Aadık",image:"black.jpg"},{name:"Musa",image:"yaprak.jpg"},{name:"Selman",image:"led.jpg"},{name:"Ahmet",image:"yaprak.jpg"},{name:"Duhan",image:"car.jpg"},{name:"Sadık",image:"car.jpg"},{name:"Sadık",image:"car.jpg"}].map((item,index)=>(
                     <Usercard usernumber={index+1} imageurl={item.image} optionforbutton={false}>543</Usercard>
                   ))
               }
             
           </Innerdiv>
       </Exteriordiv>
    )
}
