import React, { useEffect,useState,useRef} from 'react'
import styled from "styled-components";
import {useRouter} from "next/router"
import Icon from "../../components/UI/Icon";
import {Porfileimage} from "../../components/styledcomponents/button";
import {Contentreq} from "../../Api/Api";
import Parser from "react-html-parser";


const Exteriorcontent=styled.div`
background-color:white;
max-width:950px;
height:700px;
margin:auto;
width:100%
`
const ImageDiv=styled.div`
position:relative;
width:100%;
height:400px;
`

const ContentDiv=styled.div`
margin-top:40px;
padding:10px;
`

const ProfileDiv=styled.div`
box-sizing:border-box;
padding:10px;
display:flex;
align-items:center;
`

const Attribute=styled.div`
display:${({active})=>active ? "block" : "none"};
position:absolute;
top:35px;
right:35px;
border-radius:7px;
background-color:white;
`
const Attributeholder=styled.div`
display:flex;
align-items:center;
border-radius:7px;
padding:5px;
&:hover{
 background-color:#E2E3E3;
 cursor:pointer;
}
`
//todo map array to create attribute list

export default function Content({id}){

    const {current}=useRef([{icon:"fas fa-bookmark",desc:"Gönderiyi Kaydet"},{icon:"fas fa-thumbs-up",desc:"Gönderiyi Beğen"},{icon:"fas fa-retweet",desc:"Gönderiyi Profil Sayfamda Göster"}])
    const [content,setcontent]=useState({});
    const [active,setactive]=useState(false);
    const [errmsg,seterrmsg]=useState(false);
    const router=useRouter();
    //const {id}=router.query;
    console.log(id);
    
    useEffect(()=>{

        Contentreq({
            contentId:id,
            setcontent:setcontent,
            seterrmsg:seterrmsg,
        });
        
    },[])

    return (
        <Exteriorcontent>
            <div>
                <ImageDiv>
                    <img src={"/car.jpg"} style={{objectFit:"cover",width:"100%",height:"100%"}} ></img>
                    <Icon  activefunc={()=>setactive(!active)} className="fas fa-ellipsis-h" Iconconfig={{position:"absolute",top:"10px",right:"10px",color:"white",borderRadius:"50%",width:"25px",height:"25px"}}></Icon>
                    <Attribute active={active}>
                        {current.map(item=>(
                        <Attributeholder key={item.icon}>
                             <Icon className={item.icon} Iconconfig={{width:"28px",height:"28px"}}></Icon>
                             <span style={{marginLeft:"5px",fontSize:"13px"}}>{item.desc}</span>
                         </Attributeholder>  
                        ))}
                    </Attribute>
                </ImageDiv>
                <ProfileDiv>
                    <Porfileimage profile="/black.jpg" width="40px" height="40px"></Porfileimage>
                    <div style={{marginLeft:"10px"}}><span>Duhan Öztürk</span></div>
                    <div style={{marginLeft:"auto"}}><span style={{backgroundColor:"#DE3C3C",color:"white",padding:"4px",borderRadius:"5px"}}>Yayınlanma tarihi: 12/08/2020</span></div>
                </ProfileDiv>
                <ContentDiv>
                    <h2>{content.title}</h2>
                    <h3>{content.subtitle}</h3>
                    <div>
                        <p>
                          {Parser(content.content)}
                        </p>
                    </div>
                </ContentDiv>
            </div>
        </Exteriorcontent>
    )
}
