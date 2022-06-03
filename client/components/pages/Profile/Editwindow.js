import { CameraAlt } from '@material-ui/icons'
import React, { useState,useEffect,useReducer} from 'react'
import styled from "styled-components"
import {ArrowDropUp,Email,Lock,Notifications} from "@material-ui/icons"
import {Black,Porfileimage,Spinner} from "../../styledcomponents/Globalstyles"
import {TextField,Button} from "@material-ui/core"
import Cropper from  "react-image-crop"
import axios from 'axios'
import {UpdateProfile} from "../../../Api/requests"
import Switch from "react-switch"
import "react-image-crop/dist/ReactCrop.css"
import Validate from "validator"

const Exterior = styled.div`
display:${({active})=>active ? "block" : "none"};
position:absolute;
transform:translate(-50%,-50%);
left:50%;
top:50%;
max-width:600px;
width:90%;
height:${({getcropper})=>getcropper ? "350px" : "580px"};
background-color:white;
border-radius:10px;
z-index:1000;

`
const Inner = styled.div`
position:relative;
padding:10px;
overflow:auto;
height:580px;
`
const Background = styled.div`
display:flex;
cursor:pointer;
justify-content:center;
align-items:center;
width:100%;
border-top-left-radius:10px;
border-top-right-radius:10px;
height:200px;
opacity:0.8;
background-image:url(${({ImageforBack})=>ImageforBack});
background-size:cover;
background-repeat: no-repeat;
background-position:center; 
transition:0.4s;
&:hover{
    opacity:1;
}
`
const ProfileImageholder=styled.div`
position:absolute;
top:160px;
opacity:0.8;
left:30px;
z-index:1;
transition:0.4s;
&:hover{
    opacity:1;
}
`
const Inputholder = styled.div`
display:${({displayed})=> displayed ? "block" : "none"};
margin-top:20px;
`
const Information = styled.div`
position:relative;
padding-top:${({isforedit})=>isforedit ? "10px" : "80px"};
background-color:${({isforedit})=>isforedit ? "#e9ecef" : "white"};
padding-left:20px;
padding-right:20px; 
padding-bottom:20px;
border-radius:20px;
`
const Labelimage=styled.label`
position:absolute;
width:100%;
height:200px;
display:block;
padding:6px;
padding-left:45px;
background-color:white;
cursor:pointer;
color:black;
opacity:0;
`
//selection bar for editing
const Selectionbar = styled.div`
display:flex;
justify-content:space-around;
height:30px;
margin-bottom:40px;
`

const Childsofselection = styled.div`
position:relative;
top:${({innercolor})=>innercolor ? "10px" : "0"};
background-color:${({innercolor})=>innercolor ? "#7de2d1" : "#ff0a54"};
display:flex;
align-items:center;
justify-content:center;
border-radius:50%;
width:38px;
height:38px;
cursor:pointer;
transition-duration:0.18s;
padding:5px;
`

const Holderforupicon = styled.div`
position:absolute;
transition-duration:0.3s;
top:-45px;
left:${({slipvalue})=>{
    if(slipvalue == 1){
        return "55px"
    }else if(slipvalue == 2){
        return "250px"
    }else{
        return "440px"
    }
}};
`

const ProfileuploadedDiv = styled.div`
position:fixed;
transition-duration:0.5s;
top:500px;
opacity:${({successful})=> successful ? "1" : "0"};
left:${({successful})=> successful ? "20px" : "5px"};
padding:10px;
border-radius:10px;
z-index:1000;
background-color:#403d58;
color:white;
box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
`


//email,password,notification

export default function Editwindow({isWindowforsettings,updatefunc,active,editdata,closefunc}){

    
    const [file,setfile] = useState({
        Backimage:"",
        Profileimage:""
    })
    const [crop,setcrop] = useState({aspect:16/16,height:200,width:100,x:50,y:50})
    const [src,setsrc] = useState({
        Profileimage:{
            token:editdata.imagetoken,
            name:editdata.imageurl
        },
        Backimage:{
            token:editdata.backgroundtoken,
            name:editdata.backgroundurl
        }
    })
    const [uploading,setuploading] = useState(false)
    const [succesfulupload,setsuccesfulupload] = useState("")
    const [imagetype,setimagetype] = useState("")
    const [image,setimage] = useState(null)
    const [result,setresult] = useState({
        Backimage:{
            src:"",
            cropvalues:{
                width:"",
                height:"",
                x:"",
                y:""
            }
        },
        Profileimage:{
            src:"",
            cropvalues:{
                width:"",
                height:"",
                x:"",
                y:""
            }
        }
    })
    const [iscropperactive,setcropperactive] = useState(false)
    const [userinfo,setuserinfo] = useState({
        musername:{
            activate:false,
            value:editdata.username,
            label:"Username",
            warning:false,
            multiline:false,
            msg:"",
            errormsg:""
        },
        firstname:{
            activate:false,
            value:editdata.firstname,
            label:"Firstname",
            warning:false,
            multiline:false,
            msg:"",
            errormsg:""
        },
        surname:{
            activate:false,
            value:editdata.lastname,
            label:"Surname",
            warning:false,
            multiline:false,
            msg:"",
            errormsg:""
        },
        personaltext:{
            activate:false,
            value:editdata.personaltext,
            label:"Personal Information",
            warning:false,
            multiline:true,
            msg:"",
            errormsg:""
        },
        CurrentPasswordForEmail:{
            activate:false,
            value:"",
            label:"Sifreniz",
            warning:false,
            multiline:false,
            msg:"",
            errormsg:"Sifreni yanlis girdin galiba, tekrar dene !"
        },
        email:{
            activate:false,
            value:editdata.email,
            label:"E-Posta",
            warning:false,
            multiline:false,
            msg:"E-postani degistirmek istersen, yeni girdigin adrese bir kod gonderilicek lutfen onu gir.",
            errormsg:"Gecerli Bir E-posta adresi girin !"
        },
        Currentpassword:{
            activate:false,
            value:"",
            label:"Eski Sifreniz",
            warning:false,
            multiline:false,
            msg:"",
            errormsg:"Eski sifreni yanlis girdin galiba, tekrar dene !"
        }, 
        Newpassword:{
            activate:false,
            value:"",
            label:"Yeni sifrenizi girin",
            warning:false,
            multiline:false,
            msg:"",
            errormsg:"Make sure that your password has at least 6 length and contains one upper, one lower character and one number."
        }, 
        ValidationNewpassword:{
            activate:false,
            value:"",
            label:"Yeni sifrenizi tekrar girin",
            warning:false,
            multiline:false,
            msg:"",
            errormsg:"Girdiginiz sifreler ayni degil"
        },
        Notifications:{
            activate:false,
            value:{
                Whenfollow:{
                    value:editdata.Notification.Whenfollow,
                    msg:"Biri takip ettiginde"
                },
                Whenlike:{
                    value:editdata.Notification.Whenlike,
                    msg:"Biri icerik begendiginde"
                },
                Whencomment:{
                    value:editdata.Notification.Whencomment,
                    msg:"Biri yorum yaptiginda"
                }
            },
            label:"",
            warning:false,
            multiline:false,
            msg:""
        }
      
    })
    const [selectionchilds,setselectionchilds] = useState({
        Email:true,
        Password:false,
        Notification:false
    })
    const [selected,setselected] = useState(1)

    useEffect(()=>{

     
            const copy = {...userinfo}
            for (const key in copy){
                copy[key].activate = false
                copy[key].warning  = false
            }

    
            if(isWindowforsettings){

                if(selected == 1){

                    copy["email"].activate = true 
                    copy["CurrentPasswordForEmail"].activate = true

                }else if(selected == 2){
                    
                    copy["Currentpassword"].activate = true 
                    copy["Newpassword"].activate = true 
                    copy["ValidationNewpassword"].activate = true 

                }else{//selected 3
                    copy["Notifications"].activate = true
                }

            }else{

                if(active){
                    for (const key in copy) {
                        if(key == "musername" || key == "personaltext" || key == "firstname" || key == "surname"){
                            copy[key].activate = true
                        
                        }
                    }
                }

            }
            
    
            setuserinfo(copy)
            

    },[active,selected])
    
    useEffect(()=>{
        setcropperactive(false)
    },[active])
    /*
    useEffect(()=>{

       if(src.Backimage !== ""){
           console.log("heyyo")
            const backimg = document.querySelector("#Backimg")
            backimg.addEventListener("load",()=>{
                setimage(backimg)
                console.log(backimg)
            })
       }    

    },[src])
    */
    const Inputerrorhandler = (type,value)=>{
        switch (type) {
            case "username":
                break;
            case "firstname":
                break;
            case "email":
                return Validate.isEmail(value)
            case "password":
                
            
                if(value.New !== value.Newvalidation)
                return {state:"Unequal",validate:false}

                if(!Validate.isStrongPassword(value.New,{minSymbols:0,minNumbers:1,minLowercase:1,minUppercase:1,minLength:6}))
                return {state:"Strong",validate:false};

                return {state:"Success",validate:true}
                //newpassword character checking
            default:
                break;
        }
    }

    const ToCanvas = async ()=>{
       
        const canvas = document.createElement("canvas");
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width
        canvas.height = crop.height
        const ctx = canvas.getContext("2d");

        
    
        ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height
        );
        
        const base64Image = canvas.toDataURL("imge/png")

        setresult((prev)=>{
            return {...prev,[imagetype]:{src:base64Image,cropvalues:{x:crop.x,y:crop.y,width:crop.width,height:crop.height}}}
        })

        setcropperactive(false)
        
    }

    const Inputhandler = (key,event,subkey)=>{

        const mutated = {...userinfo}
        if(key == "Notifications"){
            mutated[key]["value"][subkey]["value"]= !mutated[key]["value"][subkey]["value"]
        }else{
            mutated[key].value=event.target.value
            mutated[key].warning = false
        }
       
        setuserinfo(mutated)
    }

    const Updatefile = (event,type)=>{
        if(type == "Backimage"){
            setcrop({
                aspect:16/9,
                height:200,
                width:300,
                unit:"px",
                x:0,
                y:50
            })
        }
        else{
            setcrop({
                aspect:16/16,
                height:200,
                width:200,
                unit:"px",
                x:50,
                y:50
            })
        }
        
        setimagetype(type)
        setcropperactive(true)
        setsrc((prev)=>{
            return {...prev,[type]:URL.createObjectURL(event.target.files[0])}
        })
        setfile((prev)=>{
            return {...prev,[type]:event.target.files[0]}
        })

      
    }

    const updatecrop = (newcrop)=>{
        //buraya bak
        if(crop.aspect > 1){
            setcrop((res)=>{
                return {...res,y:newcrop.y}
            })
        }
        else{
            setcrop((res)=>{
                return {...res,y:newcrop.y,x:newcrop.x}
            })
        }
        console.log(crop)

        //value of cropper width height x and y
    }

    const Sendupdates = async (typeofupdate)=>{
        //TODO look for parts for seperation
        const values = {}
        const copy = {...userinfo}
        var updateFor = ""

        if(!isWindowforsettings){
            
            updateFor = "Profile"
            values.backcrop = result.Backimage.cropvalues
            values.profile  = result.Profileimage.cropvalues
            
            for (const key in userinfo){
                if(key == "email")
                break
                values[key] = userinfo[key].value
            }

        }else if(typeofupdate == 1){

            updateFor = "Email"
            if(!Inputerrorhandler("email",userinfo["email"].value)){
                copy["email"].warning = true
                copy["email"].msg = "Gecerli Bir E-posta adresi girin !"
                return setuserinfo(copy)
            }
           
            values["email"] = userinfo["email"].value
            values["CurrentPasswordForEmail"] = userinfo["CurrentPasswordForEmail"].value
            
        }else if(typeofupdate == 2){

            updateFor = "Password"
            const {state,validate} = Inputerrorhandler("password",{Current:userinfo["Currentpassword"].value,New:userinfo["Newpassword"].value,Newvalidation:userinfo["ValidationNewpassword"].value})
        
           
            if(!validate){

                if(state == "Unequal"){

                    copy["ValidationNewpassword"].warning = true   

                }else{

                    copy["Newpassword"].warning = true

                }

                return setuserinfo(copy)
            }

            values["Currentpassword"] = userinfo["Currentpassword"].value
            values["Newpassword"] = userinfo["Newpassword"].value
            values["NewValidation"] = userinfo["ValidationNewpassword"].value
            
        }else{

            updateFor = "Notification"
            values["Notifications"] = userinfo["Notifications"]["value"]

        }


        const formData=new FormData();

        if(file.Backimage !== "" && file.Profileimage !== ""){

            formData.append("upload",file.Backimage);
            formData.append("upload2",file.Profileimage)
            
        }
        else{
            
            formData.append("upload",file[imagetype])
        }

        formData.append("Profilevalues",JSON.stringify(values))
        
     
        setuploading(true)
        UpdateProfile({
            userdata:formData,
            typeofupdate:updateFor,
            setuploading:setuploading,
            setsuccesfulupload:setsuccesfulupload,
            userinfo:userinfo,
            setuserinfo:setuserinfo
        })

    }

    const Selectionhandler=(keyname,index)=>{
        
        const copy = {...selectionchilds}
        for (const key in copy) {
           copy[key] = false
        }
        
        copy[keyname] = true
        setselected(index+1)
        setselectionchilds(copy)
    }

    const Iconcreater =(keyname)=>{
        if(keyname == "Email")
        return <Email></Email>
        if(keyname == "Password")
        return <Lock></Lock>
        if(keyname == "Notification")
        return <Notifications></Notifications>
    }

    return (
        <div>
            <Black onClick={closefunc} aktif={active}/>
            <img style={{visibility:"hidden",position:"absolute"}} id="Backimg" src={src["Backimage"]}></img>
            <img style={{visibility:"hidden",position:"absolute"}} id="Profileimg" src={src["Profileimage"]}></img>
            <Exterior getcropper={iscropperactive} active={active}>
                <Inner>
                    <ProfileuploadedDiv successful={succesfulupload == "SUCCESSFUL" ? true : false}>Profile updated successfully</ProfileuploadedDiv>
                    <div style={{position:"absolute",top:isWindowforsettings ? "500px":"250px",right:"40px",zIndex:"300"}}>
                        <Button onClick={()=>Sendupdates(selected)} style={{textTransform:"capitalize",borderRadius:"25px"}} color="secondary" variant="contained">
                            {
                                uploading ? (<Spinner style={{marginRight:"5px"}}></Spinner>) : null
                            }
                            Save
                        </Button>
                    </div>
                    {
                        isWindowforsettings &&
                        (<Selectionbar>
                            {
                                Object.keys(selectionchilds).map((item,index)=>{
                                    return (<Childsofselection innercolor={selectionchilds[item]} style={{color:selectionchilds[item] ? "white" : "white"}} onClick={()=>Selectionhandler(item,index)}>{Iconcreater(item)}</Childsofselection>)
                                })
                            }
                        </Selectionbar>)
                    }
                    {
                        iscropperactive 
                        
                        ? 
                            <div style={{textAlign:"center"}}>
                                <Cropper  onImageLoaded={(img)=>setimage(img)} style={{backgroundColor:"red",height:"350px",width:"300px"}}  imageStyle={{height:"350px",width:"300px",objectFit:"cover"}}  src={src[imagetype]} crop={crop} onChange={(newcrop)=>updatecrop(newcrop)}/> 
                                <div style={{textAlign:"center"}}>
                                 <Button onClick={()=>ToCanvas()} color="secondary" variant="contained" >Upload the file to server</Button>
                                </div>
                            </div>
                        
                        :

                             (<> 
                                    { !isWindowforsettings &&  

                                        (<>
                                            <Background ImageforBack={src.Backimage.token ? `https://firebasestorage.googleapis.com/v0/b/mynext-a074a.appspot.com/o/${src.Backimage.name}?alt=media&token=${src.Backimage.token}` : "/yaprak.jpg"}>
                                                <Labelimage  htmlFor="file"></Labelimage>
                                                <CameraAlt style={{color:"white"}}></CameraAlt>
                                                <input  onChange={(e)=>Updatefile(e,"Backimage")}  accept="image/png, image/gif, image/jpeg" id="file" type="file" style={{display:"none"}}></input>
                                            </Background>
                                            <ProfileImageholder isHavingprofile={src.Profileimage.token}>
                                                <Porfileimage profile={src.Profileimage.token ? `https://firebasestorage.googleapis.com/v0/b/mynext-a074a.appspot.com/o/${src.Profileimage.name}?alt=media&token=${src.Profileimage.token}` : "/yaprak.jpg"} style={{display:"flex",justifyContent:"center",alignItems:"center"}} width="80px" height="80px" >
                                                    <Labelimage htmlFor="file2"></Labelimage>
                                                    <CameraAlt style={{color:"white"}}></CameraAlt>
                                                    <input onChange={(e)=>Updatefile(e,"Profileimage")} accept="image/png, image/gif, image/jpeg" id="file2" type="file" style={{display:"none"}}></input>
                                                </Porfileimage>
                                            </ProfileImageholder>
                                            
                                        </>)

                                    }
                                  
                                <Information isforedit={isWindowforsettings}>

                                    {
                                        isWindowforsettings &&
                                        <Holderforupicon slipvalue={selected}>
                                           <ArrowDropUp style={{fontSize:"80px",color:"#e9ecef"}}></ArrowDropUp>
                                        </Holderforupicon>
                                    }
                                   
                                    {
                                        Object.keys(userinfo).map((item,index)=>{   

                                            var subelements = null
                                            if(item == "Notifications"){

                                                var subelements = Object.keys(userinfo[item].value).map((subitem,subindex)=>(//sub values of noitification phase
                                                    <Inputholder displayed={userinfo[item].activate}>  
                                                        <div style={{display:"flex",justifyContent:"space-between"}}>
                                                            <p style={{textTransform:"capitalize"}}>{userinfo[item]["value"][subitem]["msg"]}</p>
                                                            <Switch onColor='#ff002b' andleDiameter={20} onChange={()=>Inputhandler(item,"",subitem)} checkedIcon={true} uncheckedIcon={true} checked={userinfo[item]["value"][subitem]["value"]}></Switch>
                                                        </div>
                                                    </Inputholder>))

                                            }else{

                                                subelements = (<Inputholder displayed={userinfo[item].activate}>
                                                                <TextField   
                                                                    error={userinfo[item].warning}
                                                                    multiline={userinfo[item].multiline}
                                                                    rows={4}
                                                                    onChange={(e)=>Inputhandler(item,e)}
                                                                    style={{width:"100%"}}
                                                                    label={userinfo[item].label}
                                                                    variant="outlined"
                                                                    value={userinfo[item].value}
                                                                    helperText={!userinfo[item].warning ? userinfo[item].msg : userinfo[item].errormsg}
                                                                ></TextField>
                                                             </Inputholder>)

                                            }

                                            return subelements
                                        })
                                    }
                                </Information>
                        </>)
                    }
                </Inner>
            </Exterior>
        </div>
    )
}
