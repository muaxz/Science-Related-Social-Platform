import React,{useState,useEffect,useContext} from 'react'
import styled from "styled-components";
import Lefttoolbar from "../../components/shared/Lefttoolbar";
import Navigation from "../../components/shared/Navigation/Navigation";
import {Global} from "../../components/styledcomponents/button";
import {Black} from "../../components/styledcomponents/button"
import {createusercontext} from "../../context/Usercontext";
import {useRouter} from "next/router"
import io from "socket.io-client";
import Icon from "../../components/UI/Icon";
import {NotificationCountreq,Notificationreq,UpdateNotificationcount} from "../../Api/Api"


const Bigdiv=styled.div`
`

const Goupicon=styled.div`
position:fixed;
bottom:40px;
right:40px;
transition-property:opacity;
transition-duration:0.5s;
z-index:100;
opacity:${({up})=>up ? "1" : "0"};
`
//TODO socket io handle functions on serverside
const socket = io("http://localhost:3001");

export default function Mainlayout({children}) {

    const [active,setactive]=useState(false);
    const [goup,setgoup]=useState(false);
    const {userdata} = useContext(createusercontext)
    const [navdata,setnavdata]=useState([]);
    const [countofdata,setcountdata]=useState(0);
    const [lastrecord,setlastrecord]=useState(0);
    const [lastrecordactive,setlastrecordactive]=useState(false);
    const userouter=useRouter();
    
    console.log(userouter.pathname);
    useEffect(()=>{

        if(userdata.UserId){
            socket.emit("create",userdata.UserId)
        }
        
    },[userdata])

    useEffect(() => {
    
        setactive(false);  
    }, [userouter.query])
    
    useEffect(()=>{

       document.addEventListener("scroll",()=>{

          if(window.scrollY > 500){
              setgoup(true)
          }
          else{
              setgoup(false)
          }

       })

       if(userdata.UserId){

            NotificationCountreq({
                setcountdata:setcountdata,
                UserId:userdata.UserId
            })

            Notificationreq({
                setnavdata:setnavdata,
                UserId:userdata.UserId,
                order:10,
                navdata:navdata,
                lastrow:false,
            })

       }   

    },[userdata])
    
    useEffect(()=>{

        const listener=()=>{
            setlastrecordactive(true);
            setlastrecord(prev=>prev+1);
            if(userdata.UserId){
                
                NotificationCountreq({
                    setcountdata:setcountdata,
                    UserId:userdata.UserId
                })

             }
        }
    
        socket.on("Notification",listener) 

       

    },[userdata])

    useEffect(()=>{
    
      if(userdata.UserId && lastrecordactive){
            Notificationreq({
                setnavdata:setnavdata,
                UserId:userdata.UserId,
                order:countofdata,
                navdata:navdata,
                lastrow:true,
            })
      }

    },[lastrecord])

    const Reloadnav=(order)=>{

        Notificationreq({
            setnavdata:setnavdata,
            UserId:userdata.UserId,
            order:order,
            navdata:navdata,
            lastrow:false,
        })

    }

    const Updatecount=()=>{
        console.log("updatinnggg");
        setcountdata(0);
        UpdateNotificationcount({UserId:userdata.UserId});
    }

    //
    return (
        <Bigdiv>
            <Black onClick={()=>setactive(false)} aktif={active}></Black>
            <Navigation Update={Updatecount} Reloadfunc={Reloadnav} Count={countofdata} Data={navdata}></Navigation>
            <Lefttoolbar myactive={active} makeactive={setactive}></Lefttoolbar>
            {/*this part will be changed*/}
            <Global></Global>
            <Goupicon onClick={()=>{window.scrollTo({top:0})}} up={goup}>
                <Icon className="fas fa-chevron-up fa-lg" Iconconfig={{backcolor:"#ef233c",color:"white",width:"40px",height:"40px",lineheight:"40px"}}></Icon>
            </Goupicon>
            {children}
        </Bigdiv>
    )
}
