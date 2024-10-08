import React,{useState,useContext}from 'react'
import styled from "styled-components";
import Icon from "../../../UI/Icon";
import {Porfileimage} from "../../../styledcomponents/Globalstyles";
import Switch from "react-switch";
import Link from "next/link";
import {calculatedate} from "../../../../utilsfunc"
import {CreateNightMode} from "../../../../context/Nightmode"

const Option1div=styled.div`
width:100%;
display:flex;
align-items:center;
margin-bottom:10px;
position:relative;
cursor:pointer;
padding:10px;
border-radius:6px;
background-color:${({check})=> check == false ? "#EBEBEB" : ""};
&:hover{
    background-color:#EBEBEB;
}
`

export default function Navigationtools({optnumber,Navdata,Logout,UserId}){
    
    const {nightmode,setIsNight} = useContext(CreateNightMode)

    let Myoption = null;
    let title = "";

    if(optnumber == 1){
      title = "Create"
      Myoption = <React.Fragment>
                   <Link href="/post">
                        <Option1div>
                            <Icon className="far fa-edit" Iconconfig={{width:"35px",backcolor:"#DEDEDE",height:"35px",lineheight:"32px"}}></Icon>
                            <div style={{marginLeft:"8px"}}>
                                <p>Post</p>
                                <p style={{fontSize:"13px"}}>Create content</p>
                            </div>
                        </Option1div>
                    </Link>
                    <Option1div>
                        <Icon className="fas fa-users " Iconconfig={{width:"35px",backcolor:"#DEDEDE",height:"35px",lineheight:"32px"}}></Icon>
                        <div style={{marginLeft:"8px"}}>
                            <p>Room</p>
                            <p style={{fontSize:"13px"}}>Create a room for discussion</p>
                            <p style={{fontSize:"13px"}}>( This feature will be available soon )</p>
                        </div>
                    </Option1div>
                 </React.Fragment>
    }
    if(optnumber == 2){

        title="Notifications"

        const Attriubtearray=[
            {name:"Like",idname:"ContentId",desc:"Liked your post.",Icon:"fas fa-thumbs-up",color:"#DD1F1F",lh:"30px",href:"/content"},
            {name:"Reshow",idname:"ContentId",desc:"Senin Gönderini İşaretledi.",Icon:"fas fa-thumbtack",color:"#adb5bd",lh:"35px",href:"/content"},
            {name:"Follow",idname:"UserId",desc:"Followed You",Icon:"fas fa-user-plus fa-sm",color:"#ee6055",lh:"30px",href:"/profile"},
            {name:"Comment",idname:"ContentId",desc:"Commented about your post",Icon:"fas fa-comment-dots",color:"#adb5bd",lh:"30px",href:"/content"},
            {name:"Post",idname:"ContentId",desc:"Published a new post.",Icon:"fas fa-edit",color:"#fca311",lh:"30px"},
            {name:"Message",desc:"A feedback from moderation. !",Icon:"",idname:"ContentId",href:"/content"},
        ];

        if(Navdata.length == 0)
        {
            Myoption = <h3 style={{textAlign:"center",lineHeight:"300px"}}>You dont get a noitification yet</h3>
        }
        
        if(Navdata.length > 0)
        {

            Myoption = 

            (<React.Fragment>

                {Navdata.map((item,index)=>{
                    //TODO icon detector
                    var myitemobj={};
            

                    for (let i = 0; i < Attriubtearray.length; i++) {
                      
                        if(item.attribute == Attriubtearray[i].name){
                                
                            myitemobj = Attriubtearray[i];
        
                        }

                    }

                    if(item.ContentId == null && item.CommentId == null){
                           
                    }

                    var ReportDiv = <p style={{fontWeight:"bold",fontSize:"15px"}}>{item.ReportMessage}</p>
                    
                    //if UserId does not exist, it means that this notification comes from MOD
                    return (<Option1div key={index} check={item.Facecheck}>
                              <Link href={{pathname:`${myitemobj.href}/${item[myitemobj.idname]}`,query:{name:"Post"}}}>
                                <div style={{display:"flex",alignItems:"center"}}>
                                     <div>
                                      <Porfileimage profile={item.User.mainUrl} width="50px" height="50px"/>
                                     </div>
                                     <Icon className={myitemobj.Icon} Iconconfig={{position:"absolute",top:"20px",right:"10px",color:"white",backcolor:myitemobj.color,width:"30px",height:"30px",lineheight:myitemobj.lh}}></Icon>
                                     {/*<Icon className={"fas fa-star fa-sm"} Iconconfig={{position:"absolute",top:"-8px",right:"-2px",color:"#72ddf7",width:"17px",height:"17px",lineheight:"17px"}}></Icon>*/}
                                     <div style={{marginLeft:"20px"}}>
                                        {!item.UserId ? ReportDiv : <p style={{fontWeight:"bold",fontSize:"15px"}}>{item.User.firstname + " " + item.User.lastname}</p> }
                                        <p style={{fontSize:"13px",color:"#757575",fontWeight:"bold"}}>{myitemobj.desc}</p>
                                        <p style={{fontSize:"13px",color:"#1780a1",fontWeight:"bold"}}>{calculatedate(item.createdAt).time + " " + calculatedate(item.createdAt).express} önce </p>
                                     </div>
                                </div>
                              </Link>
                           </Option1div>)
                })}
              </React.Fragment>)   

        }          
    }
    if(optnumber == 3){
      title="Profile"
      Myoption=( <React.Fragment>
                    <Link href={{
                        pathname:`/profile/${UserId}`,
                        query:{name:"Post"}
                    }}>
                        <Option1div>
                            <Icon className="fas fa-user" Iconconfig={{width:"32px",height:"32px",backcolor:"#DEDEDE",lineheight:"32px"}}></Icon>
                            <div style={{marginLeft:"8px"}}>
                                <p  style={{fontSize:"15px"}}>My Profile</p>
                                <p style={{fontSize:"13px"}}></p>
                            </div>
                        </Option1div>
                    </Link>
                    <Option1div>
                        <Icon className="fas fa-moon " Iconconfig={{width:"32px",backcolor:"#DEDEDE",height:"32px",lineheight:"32px"}}></Icon>
                        <div style={{marginLeft:"8px"}}>
                            <p style={{fontSize:"15px"}}>Dark Mode</p>
                            <p style={{fontSize:"13px"}}></p>
                        </div>
                        <div style={{marginLeft:"auto"}}>
                          <Switch  checkedIcon={false} uncheckedIcon={false} onChange={()=>setIsNight(!nightmode)} checked={nightmode}></Switch>
                        </div>
                    </Option1div>
                    <Option1div onClick={()=>Logout()}>
                        <Icon className="fas fa-sign-out-alt " Iconconfig={{width:"32px",backcolor:"#DEDEDE",height:"32px",lineheight:"32px"}}></Icon>
                        <div style={{marginLeft:"8px"}}>
                            <p style={{fontSize:"15px"}}>Log Out</p>
                            <p style={{fontSize:"13px"}}></p>
                        </div>
                    </Option1div>       
                 </React.Fragment> )
    }

    return (
        <React.Fragment>
          <p style={{padding:"5px",fontSize:"20px"}}>{title}</p>
          {Myoption}
        </React.Fragment>
    )

   
}
