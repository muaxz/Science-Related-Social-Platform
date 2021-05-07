import React,{useState}from 'react'
import styled from "styled-components";
import Icon from "../../UI/Icon";
import {Porfileimage} from "../../styledcomponents/button";
import Switch from "react-switch";

const Option1div=styled.div`
display:flex;
position:relative;
align-items:center;
padding:10px;
border-radius:6px;
&:hover{
    background-color:#EBEBEB;
}
`

export default function Navigationtools({optnumber,optname}){
    const [toggle,settogle]=useState(false);
    let Myoption=null;
    let title=null;
    if(optnumber == 1){
      title="Oluştur"
      Myoption= <React.Fragment>
                    <Option1div>
                        <Icon className="far fa-edit" Iconconfig={{width:"35px",backcolor:"#DEDEDE",height:"35px",lineheight:"32px"}}></Icon>
                        <div style={{marginLeft:"8px"}}>
                            <p>Gönderi</p>
                            <p style={{fontSize:"13px"}}>Sayfanda bir gönderi paylaş</p>
                        </div>
                    </Option1div>
                    <Option1div>
                        <Icon className="fas fa-users " Iconconfig={{width:"35px",backcolor:"#DEDEDE",height:"35px",lineheight:"32px"}}></Icon>
                        <div style={{marginLeft:"8px"}}>
                            <p>Oda</p>
                            <p style={{fontSize:"13px"}}>Bir tartışma odası oluştur</p>
                        </div>
                    </Option1div>
                 </React.Fragment>
    }
    if(optnumber == 2){
        title="Bildirimler"
        Myoption=(<React.Fragment>
                    {[1,1,1].map((item)=>{
                        //TODO icon detector
                        return (<Option1div>
                                    <Porfileimage profile="/black.jpg" width="50px" height="50px"/>
                                    <Icon className="fas fa-thumbs-up fa-sm" Iconconfig={{position:"absolute",top:"45px",left:"35px",color:"white",backcolor:"#DD1F1F",width:"25px",height:"25px",lineheight:"20px"}}></Icon>
                                    <div style={{marginLeft:"20px"}}>
                                        <p>Melike Yılmaz</p>
                                        <p style={{fontSize:"13px",color:"#757575"}}>Senin postunu beğendi</p>
                                        <p style={{fontSize:"13px",color:"#2A5D9A"}}>5 dakika önce</p>
                                    </div>
                               </Option1div>)
                    })}
                  </React.Fragment>)             
    }
    if(optnumber == 3){
      title="Profil"
      Myoption=( <React.Fragment>
                    <Option1div>
                        <Icon className="fas fa-user" Iconconfig={{width:"32px",height:"32px",backcolor:"#DEDEDE",lineheight:"32px"}}></Icon>
                        <div style={{marginLeft:"8px"}}>
                            <p  style={{fontSize:"15px"}}>Profilim</p>
                            <p style={{fontSize:"13px"}}></p>
                        </div>
                    </Option1div>
                    <Option1div>
                        <Icon className="fas fa-user-cog " Iconconfig={{width:"32px",height:"32px",backcolor:"#DEDEDE",lineheight:"32px"}}></Icon>
                        <div style={{marginLeft:"8px"}}>
                            <p style={{fontSize:"15px"}}>Profil Ayarları</p>
                            <p style={{fontSize:"13px"}}></p>
                        </div>
                    </Option1div>
                    <Option1div>
                        <Icon className="fas fa-moon " Iconconfig={{width:"32px",backcolor:"#DEDEDE",height:"32px",lineheight:"32px"}}></Icon>
                        <div style={{marginLeft:"8px"}}>
                            <p style={{fontSize:"15px"}}>Karanlık Mod</p>
                            <p style={{fontSize:"13px"}}></p>
                        </div>
                        <div style={{marginLeft:"auto"}}>
                          <Switch  checkedIcon={false} uncheckedIcon={false} onChange={()=>settogle(!toggle)} checked={toggle}></Switch>
                        </div>
                    </Option1div>
                    <Option1div>
                        <Icon className="fas fa-sign-out-alt " Iconconfig={{width:"32px",backcolor:"#DEDEDE",height:"32px",lineheight:"32px"}}></Icon>
                        <div style={{marginLeft:"8px"}}>
                            <p style={{fontSize:"15px"}}>Çıkış Yap</p>
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
