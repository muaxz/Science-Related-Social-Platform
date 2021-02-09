import React,{useEffect,useState,useContext,useReducer} from 'react'
import {createusercontext} from "../context/Usercontext";
import styled,{createGlobalStyle} from "styled-components";
import {useRouter} from "next/router"
import Head from "next/head";
import {loginreq,resigterreq} from "../Api/Api";





const ImageDiv = styled.div`
background-image:url("https://images.pexels.com/photos/4256852/pexels-photo-4256852.jpeg");
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
width:88%;
padding:10px;
padding-left:35px;
border:none;
outline:none;
transition:0.5s;
background:transparent;
::placeholder {
    color:white
}
&:focus{
    background-color: rgba(0, 0, 0, 0.5);
    
}
`

const WindowDiv=styled.div`
border:1px solid white;
display:flex;
padding-right:20px;
padding-left:20px;
padding-top:20px;
flex-direction:column;
align-items:center;
text-align:center;
width:400px;
height:550px;
background-color: rgba(0, 0, 0, 0.5);
transition:0.5s;
transform:rotate(0deg);
&:hover {
    
}
`
const InputHolder=styled.div`
position:relative;
width:100%;
border-bottom:1px solid white;
padding:5px;
margin-bottom:20px;

`
const Button=styled.button`

margin-top:10px;
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
border:1px solid grey;
background-color:black;
padding:7px;
left:-15px;
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
    
    const router=useRouter();
    const{setlogged,setuserdata}=useContext(createusercontext);
    const[currenturl,setcurrent]=useState("");
    const[wrongemail,setwrongemail]=useState(false);
    const[wrongapass,setwrongpass]=useState(false);
    const[errormsg,seterror]=useState(false);
    const[register,setregister]=useState("Login");
    const[inputs,setinputs]=useState({
        Login:{
            Eposta:{
                placeholder:"E-posta",
                func:"Login",
                value:"",
                icon:"far fa-envelope"
            },
            Şifre:{
                placeholder:"Şifre",
                func:"Login",
                value:"",
                icon:"fas fa-unlock-alt"
            }
        },
        Register:{
            İsim:{
               placeholder:"İsim",
               func:"Register",
               value:"",
               icon:"fas fa-user"
            },
            Soyisim:{
                placeholder:"Soy İsim",
                func:"Register",
                value:"",
                icon:"fas fa-user",
            },
            Eposta:{
                placeholder:"E-posta",
                func:"Register",
                value:"",
                icon:"far fa-envelope"
            },
            Şifre:{
                placeholder:"Şifre",
                func:"Register",
                value:"",
                icon:"fas fa-unlock-alt"
        }
    }});
    

    useEffect(()=>{

       console.log("rendered");

       const random=Math.floor(Math.random() * 15);

       /*axioss.get("https://api.pexels.com/v1/search?query=magic",{
        headers:{
           "Authorization":"563492ad6f917000010000014adb809e89634602a896d8e62a850401",
        }
       })
       .then((res)=>{
            console.log(res.data.photos);  
            setcurrent(res.data.photos[3].src.original);
        })
        */
 
    },[])

    const Submithandler=()=>{

        const currentinput={...inputs};
        const ourdata={};
        for (const key in currentinput[register]) {
            ourdata[key]=currentinput[register][key].value;
        }        

        switch(register){
            case "Login":
                loginreq({
                     setlogged:setlogged,
                     userdata:ourdata,
                     router:router,
                     setuserdata:setuserdata,
                     setwrongemail:setwrongemail,
                     setwrongpass:setwrongpass,
                     seterrmsg:seterror,
                 })
                break;
            case "Register":  
                Register({

                })
                
        } 
    }
       

    const changehandler=(e,type,value)=>{
         const inputsget={...inputs};
         inputsget[type][value].value=e.target.value;
         setinputs(inputsget);
         console.log(e.target.value)
    }
    
    if(errormsg){
        return <h2>Something Went Wrong...</h2>
    }
    
    return (
       <ImageDiv urlget={currenturl}>
           <Global/>
            <Head>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossOrigin="anonymous" />
              <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Font+Name"/>
            </Head>
           <WindowDiv>     
               <div style={{flex:3}}>
                  <Logo></Logo>
               </div>
               <p  style={{color:"white",display:register == "Register" ? "none" : "block",flex:4}}>Hakikatin temsilcisinin en az olduğu zaman, onu dile getirmenin tehlikeli olduğu zaman değil, can sıkıcı olduğu zamandır.</p>
               
               <div style={{width:"80%",flex:6}}>
                   {
                        Object.keys(inputs[register]).map(item=>
                        (<InputHolder key={item}>
                            <Iconsecure className={inputs[register][item]["icon"]}></Iconsecure>
                            <Input value={inputs[register][item]["value"]} onChange={(e)=>changehandler(e,register,item)}  placeholder={inputs[register][item]["placeholder"]}></Input>
                        </InputHolder>
                        ))
                    }   
                    <Button onClick={register == "Login" ? ()=> Submithandler : ()=>setregister("Login")} >Giriş Yap <Icon className="fas fa-chevron-right"></Icon></Button>    
                    <Button onClick={register == "Login" ? ()=> setregister("Register") : Submithandler}>{register == "Login" ? "Hesap Oluştur" : "Kayıt ol"}</Button>        
                </div>         
           </WindowDiv>
       </ImageDiv>
    )
}

export default Login;