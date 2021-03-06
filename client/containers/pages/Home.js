import React, {useEffect,useState,useContext} from 'react'
import Contentcard from "../../components/shared/Contentcard";
import styled from "styled-components";
import {Homereq,Createrelationreq} from "../../Api/Api";
import Usercard from "../../components/shared/Usercard";
import {Black} from "../../components/styledcomponents/button"
import {createusercontext} from "../../context/Usercontext";
import Lefttoolbar from "../../components/pages/Main/Lefttoolbar";
import Navigationbar from "../../components/shared/Navigation";



const Rtlikewindow=styled.div`
position:absolute;
width:500px;
height:350px;
border-radius:5px;
background-color:#c83349;
z-index:100;
top:50%;
left:50%;
transform:translate(-50%,-50%);
`
const Innerwindow=styled.div`
padding:10px;
background-color:white;
height:100%;
border-radius:5px;
overflow:auto;
`
const Flexdiv=styled.div`
`

export default function Home(){
    const {userdata} = useContext(createusercontext)
    const[contentdata,setcontentdata]=useState([]);
    const[order,setorder]=useState(10);
    const[errormsg,seterror]=useState(false);
    const[activelike,setactivelike]=useState()
    const[list,setlist]=useState([]);
    const[windowactive,setactive]=useState(false);

    useEffect(()=>{
        Homereq({
            currentdata:contentdata,
            setcontentdata:setcontentdata,
            order:order,
            seterrmsg:seterror,
        })
    },[order])

    useEffect(()=>{
       /*document.addEventListener("scroll",()=>{
           window.scrollTo({top:0,behavior:"auto"})
       })
       */
    })

    const createrelation=(postId,attribute)=>{

        Createrelation({
            UserId:userdata.UserId,
            PostId:postId,
            attribute:attribute,
        })
    }
   

    return (
        <div style={{backgroundColor:"#C7C7C7",paddingTop:"100px",paddingLeft:"300px"}}> 
            <div style={{height:`${list.length > 0 ? "100vh" : "100%"}`,overflow:"hidden"}}>
                { list.length > 0 ?
                <div>
                <Black onClick={()=>setlist([])}  aktif={true}></Black>
                <Rtlikewindow>
                    <div style={{height:"40px",width:"95%",margin:"auto",display:"flex",alignItems:"center",justifyContent:"flex-end"}}>
                      
                        <i style={{color:"white",cursor:"pointer"}} class="fas fa-times-circle fa-lg"></i>
                       
                    </div>
                    <Innerwindow>
                        {[{name:"Sadık",image:"car.jpg"},{name:"Aadık",image:"black.jpg"},{name:"Musa",image:"yaprak.jpg"},{name:"Selman",image:"led.jpg"},{name:"Ahmet",image:"rocket.jpg"},{name:"Duhan",image:"car.jpg"},{name:"Sadık",image:"car.jpg"},{name:"Sadık",image:"car.jpg"}].map(item=>(
                            <Usercard 
                            firstname={item.name}
                            imageurl={item.image}
                            ></Usercard>
                        ))}
                    </Innerwindow>
                </Rtlikewindow> 
                </div>
                
                : null
                }

                <div style={{maxWidth:"650px"}}>
                    {
                    console.log(contentdata),
                    contentdata.length > 0 ?
                    contentdata.map((item,index)=>(
                        <Contentcard 
                        createrelation={createrelation}
                        showwindow={(stateoflist)=>setlist(stateoflist)}
                        like={item.Like}//bu bir obje array
                        retweet={item.Retweet}
                        comment={item.allcomments}
                        key={index}//key numarası
                        profileimage={"car.jpg"}
                        title={item.title}
                        titleimage={"yaprak.jpg"}
                        username={"Duhan"}
                        usersurname={"Öztürk"}//bir obje props
                        subtitle={item.subtitle}
                        date={"8 dakika önce"}
                        />
                    ))
                    : "Loading..."
                    }
                </div>
           </div>
        </div>
       
    )
}
