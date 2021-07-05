import React,{useRef,useState,useContext,useEffect} from 'react'
import styled from 'styled-components';
import {Porfileimage} from "../styledcomponents/button";
import Icon from "../UI/Icon";
import Link from "next/link";
import {createusercontext} from "../../context/Usercontext";



const ExteriorDiv=styled.div`
position:fixed;
top:60px;
overflow:hidden;
left:0;
height:100vh;
z-index:150;
background-color:#e9ecef;
box-shadow: 3px 3px 3px rgba(0,0,0,0.2);
transition:all 0.2s;
width:${({active})=>active ? "200px" : "60px"}
`
const InnerDiv=styled.div`
display:flex;
padding:5px;
flex-direction:column;
align-items:center;
height:100%;
`

const ImageDiv=styled.div`
display:flex;
flex-direction:column;
align-items:center;
`

const NavigationDiv=styled.div`
background-coloyor:yellow;
margin-top:5px;
width:96%;
`
const Li=styled.li`
list-style-type:none;
margin-top:10px;
display:flex;
width:100%;
border-radius:5px;
align-items:center;
padding:7px;
&:hover {
    background-color:#D4D4D4;
    cursor:pointer;
    
}
`

//const Icon=styled.i`
//color:#C70039;
//`
const Closeopen=styled.div`
width:100%;
height:30px;
padding:10px;
text-align:right;
`

const Lefttoolbar=({makeactive,myactive})=>{

    const {userdata,logged}=useContext(createusercontext);
    const firstlist=useRef([{icon:"fas fa-bookmark",desc:"Kaydedilenler",path:`saved`},{icon:"fas fa-thumbs-up",desc:"Beğenilenler",path:`liked`}])
    const secondlist=useRef([{icon:"fas fa-edit",desc:"Gönderilerim",path:"/gönderiler"},{icon:"fas fa-users",desc:"Tartışmalarım",path:"/tartışmalar"}])
    
    useEffect(() => {

        console.log(userdata.UserId)

    }, [userdata])
    return (
        <div>
            {

            logged ?

            <ExteriorDiv active={myactive}>
                <InnerDiv>
                    {/*  <Closeopen>
                    <i style={{color:"black"}} className="far fa-times-circle fa-lg"></i>
                </Closeopen>*/}
                <ImageDiv>
                <Icon activefunc={()=>{makeactive(!myactive)}} className="fas fa-angle-double-right" Iconconfig={{width:"35px",height:"35px",lineheight:"35px",color:"black",rotate:myactive ? true : undefined}}></Icon>
                    <div style={{paddingBottom:"15px"}}>
                    <Porfileimage profile={"/car.jpg"}  width={myactive ? "80px" : "50px"} height={myactive ? "80px" : "50px"}/>
                    <div style={{marginTop:"10px",color:"#293241",textAlign:"center"}}><span>{myactive ? userdata.Username : "..."}</span></div>
                    </div>     
                </ImageDiv>
                <NavigationDiv>
                    <hr></hr>
                        <ul style={{width:"100%",padding:"0px",display:"flex",flexDirection:"column",alignItems:myactive ? "flex-start" : "center"}}>
                            {firstlist.current.map((item)=>(
                                <Link href={`/[userıd]/${item.path}`} as={`/${userdata.UserId}/${item.path}`}>
                                    <Li>
                                        <Icon className={item.icon} Iconconfig={{width:myactive ? "31px" : "35px",height:myactive ? "31px" : "35px",lineheight:myactive ? "31px" : "35px",backcolor:"#ff0a54",color:"white"}}></Icon>   
                                        <span style={{display:myactive ? "block" : "none",fontSize:"15px",marginLeft:"10px"}}>{item.desc}</span> 
                                    </Li>
                                </Link>            
                            ))}
                        
                        </ul>
                </NavigationDiv>
                <NavigationDiv>     
                    <hr></hr>
                        <ul style={{width:"100%",padding:"0px",display:"flex",flexDirection:"column",alignItems:myactive ? "flex-start" : "center"}}>
                            {secondlist.current.map((item)=>(
                                <Link href="/[stuff]" as={`${item.path}`}>
                                    <Li>
                                        <Icon className={item.icon} Iconconfig={{width:myactive ? "31px" : "35px",height:myactive ? "31px" : "35px",lineheight:myactive ? "31px" : "35px",backcolor:"#168aad",color:"white"}}></Icon>   
                                        <span style={{display:myactive ? "block" : "none",fontSize:"15px",marginLeft:"10px"}}>{item.desc}</span> 
                                    </Li>
                                </Link>    
                            ))}        
                        </ul>
                </NavigationDiv>
                <NavigationDiv>     
                    <hr></hr>
                        <ul style={{width:"100%",padding:"0px",display:"flex",flexDirection:"column",alignItems:myactive ? "flex-start" : "center"}}>
                            {secondlist.current.map((item)=>(
                                <Li>
                                    <Icon className={item.icon} Iconconfig={{width:myactive ? "31px" : "35px",height:myactive ? "31px" : "35px",lineheight:myactive ? "31px" : "35px",backcolor:"#F0F0F0",color:"black"}}></Icon>   
                                    <span style={{display:myactive ? "block" : "none",fontSize:"15px",marginLeft:"10px"}}>{item.desc}</span> 
                                </Li>
                                
                            ))}        
                        </ul>
                </NavigationDiv>
                </InnerDiv>
            </ExteriorDiv>

            : null
            }
        </div>
    )
}


export default Lefttoolbar;
