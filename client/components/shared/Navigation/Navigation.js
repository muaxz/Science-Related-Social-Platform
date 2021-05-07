import React, { useState,useContext} from 'react'
import styled,{keyframes} from "styled-components";
import {Porfileimage} from "../../styledcomponents/button";
import Navtools from "./Navigationtools";
import useClickoutside from '../../../hooks/Clikcoutisde';
import {createusercontext} from "../../../context/Usercontext";
import {Button} from "@material-ui/core"
import Link from "next/link";
import { AccountCircle, Person } from '@material-ui/icons';



const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid lightgrey;
  border-right: 2px solid lightgrey;
  border-bottom: 2px solid lightgrey;
  border-left: 2px solid black;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;


const Navbarext=styled.div`
position:fixed;
top:0;
left:0;
width:100%;
height:60px;
padding:5px;
background-color:white;
box-shadow: 0 3px 3px rgba(0,0,0,0.2);
z-index:100;
`
const InnerNavbar=styled.div`
position:relative;
height:100%;
margin:auto;
display:flex;
align-items:center;
max-width:1100px;
width:100%;
justify-content:space-between;
`


const Iconholder=styled.div`
position:relative;
margin-right:10px;
cursor:pointer;
background-color:${({clicked})=>clicked ? "#00b4d8" : ""};
padding:2px;
border-radius:50%;
transition:0.3s;
`

const InputHolder=styled.div`
display:${({flex})=>flex};
position:relative;
@media (max-width:850px){
    display:${({flex2})=>flex2};
}
`

const Input=styled.input`
padding:6px;
padding-left:10px;
border:none;
width:100%;
outline:none;
border-radius:3px;
background-color:#E0E0E0;
color:black;
::placeholder {
    color:black;
}
`
const Iconsecure=styled.i`
position:absolute;
padding:6px;
right:15px;
border-top-right-radius:4px;
border-bottom-right-radius:4px;
border-left:1px solid white;
color:white;
top:50%;
height:100%;
transform:translate(50%,-50%);
`
const Optionwindow=styled.div`
position:absolute;
top:60px;
padding:8px;
right:0px;
width:350px;
background-color:white;
border-radius:6px;
box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;

`
const Inneroption=styled.div`

`


export default function Navigation(){
 

    const {logged,spinner}=useContext(createusercontext);
    const {ref,visible,setvisible} = useClickoutside();
    const [toolnumber,settoolnumber]=useState(0);
    const [Iconumber,setıconnumber]=useState(0);
    const [Iconobject,setIconobject]=useState({
        1:{
          className:"fas fa-plus",
          onoff:false,
          lineheight:'35px'
        },
        2:{
          className:"fas fa-bell",
          onoff:false,
          lineheight:'35px'
        },
        3:{
          className:"fas fa-sort-down",
          onoff:false,
          lineheight:'30px'
        }
    })

    const Iconselect=(iconnumber)=>{
      
        const myobject={...Iconobject};

        Object.keys(myobject).forEach(key =>{
            if(iconnumber !== key){
                myobject[key].onoff=false;
            }
           
        });

        if(myobject[iconnumber].onoff){

            myobject[iconnumber].onoff=false;
            setıconnumber(0);

        }
        else{

            myobject[iconnumber].onoff=true;
            setıconnumber(iconnumber);

        }
       
        setIconobject(myobject); 
        setvisible(true);
        
    }

    if(!visible){

        const myobject={...Iconobject};
        Object.keys(myobject).forEach(key =>{ 
            myobject[key].onoff=false;
        });

        setIconobject(myobject);
        setvisible(true); 
        setıconnumber(0);

    }

    return (
        <Navbarext >
            <InnerNavbar>
                <InputHolder flex={"block"}>
                  <div style={{display:"flex",alignItems:"center"}}>
                    <Porfileimage profile="https://evrimagaci.org/public/images/logo/v3.svg?v=1" width="40px" height="40px">
                    </Porfileimage>
                    <div style={{marginLeft:"10px"}}><span>Evrim Ağacı</span></div>
                  </div>
                </InputHolder>
                <InputHolder  flex2={"none"} flex={false}>
                    <Input placeholder="Ara"></Input>
                    <Iconsecure className="fas fa-search"></Iconsecure>
                </InputHolder>
                {  !spinner ? 
                   
                    <Spinner></Spinner>
                   
                   :

                   !logged ? 

                   <InputHolder>
                        <Link  href="/login">
                         <Button variant="contained" style={{marginRight:"10px"}} endIcon={<AccountCircle style={{fontSize:"25px"}}></AccountCircle>}>
                           Giriş Yap
                         </Button>
                       </Link>
                       <Button variant="contained" color="secondary">Kayıt Ol</Button>
                   </InputHolder>

                   :

                        <InputHolder  flex2={"flex"} ref={ref} flex={"flex"}>
                        {
                            Object.keys(Iconobject).map((item)=>{
                                return (
                                    <Iconholder clicked={Iconobject[item].onoff} onClick={()=>Iconselect(item)}>
                                        <span style={{display:"block",backgroundColor:"#F0F0F0",borderRadius:"50%",width:"35px",height:"35px",textAlign:"center",lineHeight:Iconobject[item].lineheight}}>
                                            <i className={Iconobject[item].className}></i>
                                            {
                                                /*<span style={{position:"absolute",width:"20px",display:"block",height:"20px",textAlign:"center",lineHeight:"20px",backgroundColor:"red",color:"white",borderRadius:"50%"}}>3</span> : "" */
                                            }
                                        </span>
                                    </Iconholder>
                                )
                            })
                        }
                        {
                        
                            Iconumber !== 0 && visible == true ?
                            <Optionwindow>
                                    <Inneroption>
                                    <Navtools optnumber={Iconumber}></Navtools>
                                    </Inneroption>
                            </Optionwindow> : null
                        }  
                        
                    </InputHolder>
                }
               
               
            </InnerNavbar>
        </Navbarext>
    )
}
