import React,{useEffect,useState,useContext,useRef} from 'react'
import {createusercontext} from "../context/Usercontext";
import styled,{createGlobalStyle} from "styled-components";
import {useRouter} from "next/router"
import Head from "next/head";
import {loginreq,resigterreq,sendResetEmail,resetPassword} from "../Api/requests";
import Window from "../components/UI/window";
import {TextField,Button,InputAdornment,IconButton} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Validate from "validator"
import {AccountCircle,EmailOutlined,Lock,SupervisorAccount,Person,ChevronRight, Assignment,VisibilityOff,Visibility} from "@material-ui/icons"
import axios from 'axios';


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
width:${({checkregister})=>checkregister ? "50%" : "70%"};
padding:5px;
margin-bottom:20px;
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
background-image:url("/spinoza-logos.jpeg");
background-size: contain;
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
&:hover {
color:#f50057;
width:45px;
height:45px;
}
`


export const Global=createGlobalStyle`
 *{
     box-sizing:border-box;
     margin:0px;
     font-family: 'Raleway', sans-serif;
 }

 body{
  height:100%;
 }

 html{
   scroll-behavior:smooth;
 }
`

const Login=({mode,token})=>{
    
    const stylesget=CssTextField();
    const buttonCase = useRef({
        PasswordReset:{
            value:"Save",
            icon:""
        },
        Register:{
            value:"Sign Up",
            icon:<SupervisorAccount></SupervisorAccount>
        },
        Login:{
            value:"Sign In",
            icon:<ChevronRight></ChevronRight>
        },
        ForgetPassword:{
            value:"Send Code",
            icon:""
        }
    })
    const{setlogged,setuserdata,setspinner}=useContext(createusercontext);
    const[currenturl,setcurrent]=useState("");
    const[backendState,setBackendState]=useState("")
    const[errormsg,seterror]=useState(false);
    const[actionType,setActionType]=useState("Login");
    const[windowactive,setactive]=useState(false);
    const router=useRouter();
    const[inputs,setinputs]=useState({
        Login:{
            email:{
                placeholder:"E-Mail",
                func:"Login",
                value:"",
                icon:"far fa-envelope",
                focused:false,
                helperText:"",
                validation:true,
            },
            password:{
                placeholder:"Password",
                func:"Login",
                Visibility:false,
                value:"",
                icon:"fas fa-unlock-alt",
                focused:false,
                helperText:"",
                validation:true,
            }
        },
        Register:{
            name:{
               placeholder:"Firstname",
               func:"Register",
               value:"",
               icon:"fas fa-user",
               focused:false,
               helperText:"",
               validation:true,
            },
            surname:{
                placeholder:"Lastname",
                func:"Register",
                value:"",
                icon:"fas fa-user",
                focused:false,
                helperText:"",
                validation:true,
            },
            email:{
                placeholder:"E-Mail",
                func:"Register",
                value:"",
                icon:"far fa-envelope",
                focused:false,
                helperText:"This is not a proper email adress !",
                validation:true,
            },
            password:{
                placeholder:"Password",
                Visibility:false,
                func:"Register",
                value:"",
                icon:"fas fa-unlock-alt",
                focused:false,
                helperText:"Make sure that your password has at least 6 length and contains one upper, one lower character and one number.",
                validation:true,
            },
        }, 
        ForgetPassword:{
            email:{
                placeholder:"e-mail",
                func:"ForgetPassword",
                value:"",
                icon:"far fa-envelope",
                focused:false,
                helperText:"This is not a proper email adress !",
                validation:true,
            }
        },
        PasswordReset:{
            newPassword:{
                placeholder:"New Password",
                func:"PasswordReset",
                value:"",
                icon:"far fa-envelope",
                focused:false,
                helperText:"Make sure that your password has at least 6 length and contains one upper, one lower character and one number.",
                validation:true,
            },
            newPasswordAgain:{
                placeholder:"New Password Again",
                func:"PasswordReset",
                value:"",
                icon:"fas fa-unlock-alt",
                focused:false,
                helperText:"This not the same password as the first one",
                validation:true,
            }
        },
    });
    
    
    useEffect(()=>{
        if(mode == "RESET") setActionType("PasswordReset")
    },[])

    const Rendericon=(item)=>{

          switch(item){
              case "email":
                  return <EmailOutlined  style={{color:"white"}}></EmailOutlined>
              case "password":
                  return <Lock style={{color:"white"}}></Lock>
              case "name":
                  return <AccountCircle style={{color:"white"}}></AccountCircle> 
              case "surname":
                  return <AccountCircle style={{color:"white"}}></AccountCircle>        
          }
    }
    //For Registering
    const InputErrorHandler=(inputType,value)=>{
      
        switch (inputType) {
            case "email":
                if(!Validate.isEmail(value)){
                    console.log(value)
                    return {state:"notProperEmail",validate:false};
                }
                break;
            case "newPassword":
            case "password":
                if(!Validate.isStrongPassword(value,{minSymbols:0,minNumbers:1,minLowercase:1,minUppercase:1,minLength:6}))
                return {state:"Strong",validate:false};
                break;
                //newpassword character checking
            default:
                break;
        }

        return {state:"Successful",validate:true};
    }

    const Submithandler=()=>{

        const currentInputValues = {...inputs};
        console.log(actionType)
        const ourdata={};
        for (const key in currentInputValues[actionType]) {
            ourdata[key]=currentInputValues[actionType][key].value.trim();
            if(actionType == "Register" || actionType == "ForgetPassword" || actionType == "PasswordReset" && (key == "email" || key == "password" || key == "newPassword")){

                const handlerResponse = InputErrorHandler(key,currentInputValues[actionType][key].value.trim())
                if(!handlerResponse.validate){
                    console.log("here")
                    currentInputValues[actionType][key].validation = false;
                    return setinputs(currentInputValues)

                }
            }
        }        

    
        switch(actionType){
            case "Login":  
                loginreq({
                     setlogged:setlogged,
                     userdata:ourdata,
                     router:router,
                     setuserdata:setuserdata,
                     seterrmsg:seterror,
                     setBackendState:setBackendState,
                     setactive:setactive,
                     setspinner:setspinner,
                 })

                break;
            case "Register":  
                resigterreq({
                    setBackendState:setBackendState,
                    userdata:ourdata,
                    seterrmsg:seterror,
                    setactive:setactive,
                    setActionType:setActionType
                })
                break;
            case "ForgetPassword":
                sendResetEmail({email:ourdata.email,setBackendState:setBackendState,sendWindowActive:setactive})
                break;
            case "PasswordReset":
                if(ourdata.newPassword !== ourdata.newPasswordAgain) return setinputs(prev=>{return{...prev,PasswordReset:{...prev.PasswordReset,newPasswordAgain:{...prev.PasswordReset.newPasswordAgain,validation:false}}}}); 
                resetPassword({
                    token:token,
                    password:ourdata.newPassword,
                    setBackendState:setBackendState,
                    setWindowActive:setactive
                })    
                
        } 
    }
       
    const chekciffocus=(typeoffocus,type)=>{
        
        const inputsget={...inputs};
        inputsget[actionType][type].focused = typeoffocus == "focus" ? true : false;
        setinputs(inputsget);
    }

    const InputChangeHandler=(e,type,section)=>{
        const inputsget={...inputs};
        inputsget[type][section].value=e.target.value;
        inputsget[type][section].validation=true;
        setinputs(inputsget);
    }


    //Chnage this setion
    var backendMessage="";
    var messageType = "error";
 
    if(errormsg){return <h2>Something Went Wrong...</h2>}
    if(backendState == "EXİST"){backendMessage="Girdğin email zaten kullanımda!"}
    else if(backendState == "WP"){backendMessage="Girdiğin şifre yanlış!"} //remove this 
    else if(backendState == "WE"){backendMessage="Girdiğin e-posta yanlış!"}
    else if(backendState == "CODESENT"){
        
        backendMessage = "You can reset your password by clicking on the link that was sent to your email."
        messageType = "confirm"
    } 
    else if(backendState == "PASSWORD_SAVED"){
        backendMessage = "Your password has been succesfully updated."
        messageType = "confirm"
    }
    else if(backendState == "REGISTERED"){
        messageType = "confirm"
        backendMessage = "You successfully signed up. Sign in and start discovering"
    }

    
    return (
       <ImageDiv urlget={currenturl} aktif={true}>
            <Head>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossOrigin="anonymous" />    
            </Head>
            <Global></Global>
           <Window closefunction={()=>setactive(false)} active={windowactive} type={messageType}>{backendMessage}</Window>
           <WindowDiv>    
                {
                        actionType !== "PasswordReset" && 
                        (<Registerloginholder onClick={()=>setActionType(actionType == "Login" ? "Register" : "Login")}>
                                {  
                                    actionType == "Login"  ?
                                    
                                    <div style={{display:"flex"}}>
                                        <Assignment style={{color:"white",borderRadius:"50%",fontSize:"30px"}}></Assignment>
                                    </div>

                                    :

                                    <Person style={{color:"white",borderRadius:"50%",fontSize:"30px"}}></Person>
                                }       
                    </Registerloginholder> )
                }

               <div style={{flex:4}}>
                  <Logo></Logo>
               </div>
               <p  style={{color:"white",flex:4,wordWrap:"break-word"}}>Hakikatin temsilcisinin en az olduğu zaman, onu dile getirmenin tehlikeli olduğu zaman değil, can sıkıcı olduğu zamandır.</p>
               <div style={{width:actionType == "Register" ? "100%" : "70%",boxSizing:"border-box",flex:7,display:actionType == "Register" ? "flex" : "flex",flexWrap:"wrap",justifyContent:"center"}}>
                    {
                            Object.keys(inputs[actionType]).map(item=>
                            (<InputHolder  checkregister={actionType == "Register" ? true:false} key={item}>
                                <TextField 
                                    style={{maxWidth:"300px"}}
                                    InputProps={{
                                        style:{color:"white"},
                                        endAdornment: <InputAdornment position="end">{Rendericon(item)}</InputAdornment>,
                                        startAdornment: item == "password" ? <InputAdornment onClick={()=>setinputs(prev=>({...prev,[actionType]:{...prev[actionType],password:{...prev[actionType]["password"],Visibility:!prev[actionType]["password"].Visibility}}}))} style={{display:item == "password" ? "" : "none",margin:"0px",paddingRight:"10px",cursfdsfsdor:"pointer",borderRight:"1px solid #d3d0cb",height:"100%"}} position="end">{!inputs[actionType]["password"].Visibility ? <VisibilityOff /> : <Visibility />}</InputAdornment> : <></>,
                                    }}
                                    className={stylesget.root} 
                                    type={item == "password" ? (!inputs[actionType]["password"].Visibility ?  "password" : "") : ""}
                                    onChange={(e)=>InputChangeHandler(e,actionType,item)} 
                                    onFocus={()=>chekciffocus("focus",item)}     
                                    onBlur={()=>chekciffocus("remove",item)} 
                                    value={inputs[actionType][item].value}
                                    focused={inputs[actionType][item].value !== "" || inputs[actionType][item].focused == true ? true : false} 
                                    size="small"
                                    error={!inputs[actionType][item].validation}   
                                    helperText={!inputs[actionType][item].validation ? inputs[actionType][item].helperText : ""}
                                    label={inputs[actionType][item].placeholder} 
                                    variant='outlined'
                                    />
                            </InputHolder>
                            ))
                        }   

                    {
                        actionType == "Login" ? <p onClick={()=>setActionType("ForgetPassword")} style={{color:"#EB3232",cursor:"pointer"}}>Forget Password ?</p> : ""
                    }
                </div>    
                <div style={{display:"flex",flex:"3",width:"100%",justifyContent:"center"}}> 
                        <InputHolder>
                                <Button  
                                    style={{width:"50%"}}
                                    inputProps={{style:{color:"red"}}}   
                                    variant="contained"
                                    endIcon={buttonCase.current[actionType].icon}
                                    onClick={Submithandler}>
                                    <b>{buttonCase.current[actionType].value}</b>
                                </Button>  
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
export async function getServerSideProps(context){

    try {

      if(context.req.headers.cookie){

         return {
            redirect :{
                destination:"/"
            }
         }

      }

      if(context.query.token){

            const {data} = await axios.post("/resetPasswordTokenCheck",{token:context.query.token})
            
            if(data.state == "NotExist"){
    
                return {
                    redirect:{
                      destination:"/404"
                    }
                };
    
            }else if(data.state == "Exist"){

                return {
                    props:{mode:"RESET",token:context.query.token}
                  }
            }
      }  

      return {
        props : {mode:""}
      }

    }catch (error) {
        
        return {
            redirect:{
               destination:"/500"
            }
         };
    }
}

export default Login;