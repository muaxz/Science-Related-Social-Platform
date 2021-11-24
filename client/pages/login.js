import React,{useEffect,useState,useContext,useReducer} from 'react'
import {createusercontext} from "../context/Usercontext";
import styled,{createGlobalStyle} from "styled-components";
import {useRouter} from "next/router"
import Head from "next/head";
import {loginreq,resigterreq} from "../Api/Api";
import Window from "../components/UI/window";
import {TextField,Button,InputAdornment} from '@material-ui/core';
import {withStyles,makeStyles} from '@material-ui/core/styles';
import {Global} from "../components/styledcomponents/button"
import Guardlayout from "../containers/Layout/routerguard";
import {AccountCircle,EmailOutlined,Lock,ArrowRight, ArrowLeft,SupervisorAccount,SupervisedUserCircleSharp, SupervisorAccountRounded, SupervisorAccountSharp, AccountCircleSharp, AccountCircleRounded, Person, Home, ArrowRightAltRounded, ChevronRight, Assignment} from "@material-ui/icons"



const CssTextField = makeStyles({
    root: {
      '& .MuiInputLabel-root': {
        color: 'grey',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'white',
        },
        '&:hover fieldset': {
          borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#3FBEA7',
        },
      },
    },
  });

const ImageDiv = styled.div`
background-image:url("/led.jpg");
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
`

const WindowDiv=styled.div`
position:relative;
border:1px solid white;
display:flex;
padding-right:20px;
padding-left:20px;
padding-top:20px;
flex-direction:column;
align-items:center;
text-align:center;
width:600px;
height:550px;
background-color: rgba(0, 0, 0, 0.3);
transition:0.5s;
transform:rotate(0deg);

`
const InputHolder=styled.div`
position:relative;
width:${({checkregister})=>checkregister ? "50%" : "100%"};
padding:5px;
margin-bottom:20px;
`
const Buttons=styled.button`

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
    background-color: rgba(0, 0, 0, 1);
    cursor:pointer;
}
`
const Icon=styled.i`
margin-left:10px;
font-size:10px;
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
background-image:url("/way.jpg");
background-size: cover;
background-repeat: no-repeat;
background-position: center; 
`

const Registerloginholder=styled.div`
cursor:pointer;
position:absolute;
top:15px;
right:15px;
background-color:#f50057;
width:40px;
height:40px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
transition:0.09s ease-in;
&:hover {
color:#f50057;
width:45px;
height:45px;
}
`



const Login=()=>{
    
    const stylesget=CssTextField();
    const{setlogged,setuserdata,setspinner}=useContext(createusercontext);
    const[currenturl,setcurrent]=useState("");
    const[backenderror,setbackenderror]=useState("")
    const[errormsg,seterror]=useState(false);
    const[register,setregister]=useState("Login");
    const[windowactive,setactive]=useState(false);
    const router=useRouter();
    const[inputs,setinputs]=useState({

        Login:{
            email:{
                placeholder:"E-posta",
                func:"Login",
                value:"",
                icon:"far fa-envelope",
                focused:false,
            },
            password:{
                placeholder:"Şifre",
                func:"Login",
                value:"",
                icon:"fas fa-unlock-alt",
                focused:false
            }
        },
        Register:{
            name:{
               placeholder:"İsim",
               func:"Register",
               value:"",
               icon:"fas fa-user",
               focused:false,
            },
            surname:{
                placeholder:"Soy İsim",
                func:"Register",
                value:"",
                icon:"fas fa-user",
                focused:false,
            },
            email:{
                placeholder:"E-posta",
                func:"Register",
                value:"",
                icon:"far fa-envelope",
                focused:false,
            },
            password:{
                placeholder:"Şifre",
                func:"Register",
                value:"",
                icon:"fas fa-unlock-alt",
                focused:false,
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

    const Rendericon=(item)=>{

          switch(item){
              case "email":
                  return <EmailOutlined style={{color:"white"}}></EmailOutlined>
              case "password":
                  return <Lock style={{color:"white"}}></Lock>
              case "name":
              case "surname":
                  return <AccountCircle style={{color:"white"}}></AccountCircle>        
          }
    }

    const Submithandler=()=>{

        console.log("submit");

        const currentinput={...inputs};
        const ourdata={};
        for (const key in currentinput[register]) {
            ourdata[key]=currentinput[register][key].value.trim();
        }        
        

        switch(register){
            case "Login":
                loginreq({
                     setlogged:setlogged,
                     userdata:ourdata,
                     router:router,
                     setuserdata:setuserdata,
                     seterrmsg:seterror,
                     setbackenderror:setbackenderror,
                     setactive:setactive,
                     setspinner:setspinner,
                 })
                break;
            case "Register":  
                resigterreq({
                    setbackenderror:setbackenderror,
                    userdata:ourdata,
                    seterrmsg:seterror,
                    setactive:setactive,
                })
                
        } 
    }
       
    const chekciffocus=(typeoffocus,type)=>{
        
        const inputsget={...inputs};
        inputsget[register][type].focused=typeoffocus == "focus" ? true : false;
        setinputs(inputsget);
    }

    const changehandler=(e,type,section)=>{
        const inputsget={...inputs};
        inputsget[type][section].value=e.target.value;
        setinputs(inputsget);
    }

    var backenderrormessage="";
    if(errormsg){
        return <h2>Something Went Wrong...</h2>
    }
    
    if(backenderror == "EXİST"){
      backenderrormessage="Girdğiniz email zaten kullanımda!"
    }
    else if(backenderror == "WP"){
      backenderrormessage="Girdiğiniz şifre yanlış!"
    }
    else if(backenderror == "WE"){
      backenderrormessage="Girdiğiniz e-posta yanlış!"
    }
    
    return (
       <ImageDiv urlget={currenturl} aktif={true}>
            <Head>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossOrigin="anonymous" />
             
            </Head>
            <Global></Global>
           <Window closefunction={()=>setactive(false)} active={windowactive} type="error">E-posta veya şifre yanlış!</Window>
           <WindowDiv>    
               <Registerloginholder onClick={register == "Login" ? ()=>setregister("Register") : ()=>setregister("Login")}>
                   {
                       register == "Login" ?
                       <div style={{display:"flex"}}>
                           <Assignment style={{color:"white",borderRadius:"50%",fontSize:"30px"}}></Assignment>
                       </div>
                       :
                       <Person style={{color:"white",borderRadius:"50%",fontSize:"30px"}}></Person>
                   }       
               </Registerloginholder> 
               <div style={{flex:4}}>
                  <Logo></Logo>
               </div>
               <p  style={{color:"white",flex:4,wordWrap:"break-word"}}>Hakikatin temsilcisinin en az olduğu zaman, onu dile getirmenin tehlikeli olduğu zaman değil, can sıkıcı olduğu zamandır.</p>
              
               <div style={{width:register == "Register" ? "100%" : "70%",boxSizing:"border-box",flex:7,display:register == "Register" ? "flex" : "block",flexWrap:"wrap"}}>
                   {
                        Object.keys(inputs[register]).map(item=>
                        (<InputHolder  checkregister={register == "Register" ? true:false} key={item}>
                           <TextField 
                            InputProps={{
                                style:{color:"white"},
                                endAdornment: <InputAdornment position="end">{Rendericon(item)}</InputAdornment>,
                            }}
                            className={stylesget.root} 
                            type={item == "password" ? "password" : ""}
                            onChange={(e)=>changehandler(e,register,item)} 
                            onFocus={()=>chekciffocus("focus",item)}     
                            onBlur={()=>chekciffocus("remove",item)} 
                            value={inputs[register][item].value}
                            focused={inputs[register][item].value !== "" || inputs[register][item].focused == true ? true : false} 
                            size="small"   
                            label={inputs[register][item].placeholder} 
                            variant='outlined'></TextField>
                        </InputHolder>
                        ))
                    }   
                    {
                        register == "Login" ? <p style={{color:"#EB3232"}}>Şifreni mi unuttun?</p> : ""
                    }
                </div>    
                <div style={{display:"flex",flex:"3",width:"100%"}}> 
                        <InputHolder>
                            {
                                register == "Login" ?
                                <Button  
                                    style={{width:"50%"}}
                                    inputProps={{style:{color:"red"}}}   
                                    variant="contained"
                                    endIcon={<ChevronRight style={{fontSize:"30px"}}></ChevronRight>}
                                    onClick={register == "Login" ? Submithandler : ()=>setregister("Login")}>
                                    Giriş Yap 
                                </Button>  
                                :  
                                <Button  
                                    style={{width:"50%"}}
                                    inputProps={{style:{color:"red"}}}   
                                    variant="contained"
                                    color="secondary"
                                    endIcon={<SupervisorAccount style={{fontSize:"30px"}}></SupervisorAccount>}
                                    onClick={Submithandler}>
                                    Kayıt Ol
                                </Button> 
                            }
                        </InputHolder>      
                </div>
                        
           </WindowDiv>
       </ImageDiv>
    )
}

/*
Login.layout=(children)=>{
    return (
           <Guardlayout>
               <React.Fragment>
                  {children}
               </React.Fragment>
           </Guardlayout>
    )
}
*/



export default Login;