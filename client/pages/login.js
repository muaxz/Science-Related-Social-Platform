import React,{useEffect,useState} from 'react'
import styled,{createGlobalStyle} from "styled-components";
import Head from "next/head";
import axioss from "axios";



const ImageDiv = styled.div`
background-image:url(${({urlget})=> urlget});
background-size: cover;
background-repeat: no-repeat;
background-position: center; 
width:100%;
height:100vh;
background-color:white;
display:flex;
justify-content:center;
align-items:center;
`

const Input=styled.input`
color:white;
width:70%;
padding:10px;
border:none;
outline:none;
border-bottom:1px solid white;
transition:0.5s;
background:transparent;
&:focus{
    background-color: rgba(0, 0, 0, 0.5);
}
`

const WindowDiv=styled.div`
border:1px solid white;
display:flex;
justify-content:space-around;
flex-direction:column;
align-items:center;
text-align:center;
width:400px;
height:550px;
background-color: rgba(0, 0, 0, 0.4);
transition:0.5s;
transform:rotate(0deg);
&:hover {
    
}
`
const InputHolder=styled.div`
position:relative;
width:100%;
padding:5px;
margin-bottom:20px;

`
const Button=styled.button`
display:flex;
margin-top:10px;
justify-content:center;
align-items:center;
margin-left:10px;
width:150px;
padding:10px;
outline:none;
border:none;
border-radius:8px;
color:white;
background:transparent;
transition:0.3s;
border:1px solid white;
&:hover {
    background-color: rgba(0, 0, 0, 0.3);
    cursor:pointer;
}
`
const Icon=styled.i`
margin-left:10px;

`

const Iconsecure=styled.i`
position:absolute;
left:0px;
color:white;
top:50%;
transform:translate(50%,-50%);
`

const Logo=styled.div`
width:100px;
height:100px;
border-radius:50%;
background-image:url("https://evrimagaci.org/public/images/logo-v3.svg?v=1");
background-size: cover;
background-repeat: no-repeat;
background-position: center; 
`
const Global=createGlobalStyle`
 *{
     margin:0px;
     padding:0px;
     font-family: 'Oswald', sans-serif;
 }
`
const Login=()=>{

    const[currenturl,setcurrent]=useState("led.jpg");

    useEffect(()=>{

       const random=Math.floor(Math.random() * 15);

       axioss.get("https://api.pexels.com/v1/search?query=magic",{
        headers:{
           "Authorization":"563492ad6f917000010000014adb809e89634602a896d8e62a850401",
        }
       })
       .then((res)=>{
            console.log(res.data.photos);  
            setcurrent(res.data.photos[3].src.original);
        })
        
    },[])
    
    return (
       <ImageDiv urlget={currenturl}>
           <Global/>
            <Head>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />
              <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Font+Name"/>
            </Head>
           <WindowDiv>
               <div>
                  <Logo></Logo>
               </div>
               <div style={{width:"80%",display:"flex",justifyContent:"center",flexWrap:"wrap"}}>
                    <InputHolder>
                        <Iconsecure className="far fa-envelope"></Iconsecure>
                        <Input placeholder="E-Posta"></Input>
                    </InputHolder>
                    <InputHolder>
                        <Iconsecure className="fas fa-unlock-alt"></Iconsecure>
                        <Input placeholder="Şifre"></Input>
                    </InputHolder>
                    <Button>Giriş Yap <Icon className="fas fa-angle-right fa-lg"></Icon></Button>
                    <Button>Hesap Oluştur</Button>
               </div>
           </WindowDiv>
       </ImageDiv>
    )
}

export default Login;