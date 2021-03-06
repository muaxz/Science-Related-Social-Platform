import React from 'react'
import styled from 'styled-components';
import {Porfileimage} from "../../styledcomponents/button";

const ExteriorDiv=styled.div`
position:fixed;
top:0;
left:0;
height:100vh;
width:220px;
z-index:101;
background-color:#E0E2E1;
//box-shadow:2px 5px 5px grey;
`
const InnerDiv=styled.div`
display:flex;
padding:5px;
flex-direction:column;
align-items:center;
height:100%;
`

const ImageDiv=styled.div`
padding:10px;
display:flex;
width:100%;
justify-content:flex-start;
align-items:center;
`

const NavigationDiv=styled.div`
background-coloyor:yellow;
margin-top:px;
width:96%;
`
const Li=styled.li`
position:relative;
border-radius:15px;
text-align:center;
background-color:white;
padding:10px;
list-style-type:none;
margin:10px auto;
color:black;
font-size:13px;s
width:96%;
box-shadow: 0 3px 3px rgba(0,0,0,0.2);
&:hover{
    box-shadow: 0 3px 3px rgba(0,0,0,0.2);
    cursor:pointer;
}
`

const Icon=styled.i`
position:absolute;
left:9px;
top:50%;
transform:translateY(-50%);
color:${({color})=>color}
`
const Closeopen=styled.div`
width:100%;
height:30px;
padding:10px;
text-align:right;
`

const Lefttoolbar=()=>{
    return (
        <ExteriorDiv>
            <InnerDiv>
                {/*  <Closeopen>
                 <i style={{color:"black"}} className="far fa-times-circle fa-lg"></i>
               </Closeopen>*/}
               <ImageDiv>
                 <Porfileimage profile="black.jpg"  width="50px" height="50px"></Porfileimage>
                 <span style={{marginLeft:"20px",color:"black",fontSize:"15px"}}>Emre Özer</span>
               </ImageDiv>
               <NavigationDiv>
                    <ul style={{width:"100%"}}>
                        <Li><Icon className="fas fa-bookmark"></Icon>Kaydedilen Postlar</Li>
                        <Li><Icon color="#F92323" className="fas fa-thumbs-up"></Icon>Beğenilen Postlar</Li>
                        <Li><Icon color="#337DF1" className="fas fa-share"></Icon> Retweet</Li>
                        <Li><Icon className="fas fa-users"></Icon>Tartışmalarım</Li>
                        <Li><Icon className="fas fa-pencil-alt"></Icon>İçerik Üret</Li>
                        <Li><Icon className="fas fa-book-open"></Icon>Yazılarım</Li>
                        <Li  style={{position:"relative",top:"260px"}} ><Icon className="fas fa-cog fa-lg"></Icon>Profil Ayarları</Li>
                    </ul>
               </NavigationDiv>
            </InnerDiv>
        </ExteriorDiv>
    )
}


export default Lefttoolbar;
