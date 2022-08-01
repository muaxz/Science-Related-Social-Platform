import React,{useState,useEffect,useContext,Suspense} from 'react'
import styled,{ThemeProvider} from "styled-components";
import Navigation from "../../components/shared/Navigation/Navbar/Navigation";
import {Global,Black,SavedInfoDiv} from "../../components/styledcomponents/Globalstyles";
import {createusercontext} from "../../context/Usercontext";
import {CreateUtilContext} from "../../context/UtilContext";
import {CreateNightMode} from "../../context/Nightmode";
import {useRouter} from "next/router"
import io from "socket.io-client";
import Icon from "../../components/UI/Icon";
import dynamic from "next/dynamic"
import {NotificationCountreq,Notificationreq,UpdateNotificationcount} from "../../Api/requests"

const Lefttoolbar = dynamic(() => import("../../components/shared/Navigation/SideBar/Lefttoolbar"), {
    suspense: true,
})

const Bigdiv=styled.div``

const GoUpIcon=styled.div`
position:fixed;
bottom:40px;
right:40px;
transition-property:opacity;
transition-duration:0.5s;
z-index:100;
opacity:${({up})=>up ? "1" : "0"};
`
//TODO socket io handle functions on serverside

const themeNight = {
background:"rgb(21, 32, 43)",
cardBackground:"rgb(21, 32, 43)",
cardShadowColor:"",
p_Color:"white",
contentSectionBorderColor:"#383838"
}

const themeLight = {
cardShadowColor:"#00afb9",
background:"#dad9d3",
cardBackground:"white",
p_Color:"black",
contentSectionBorderColor:"white"
}

const socket = io("https://ideasharee.herokuapp.com");

export default function Mainlayout({children}) {

    const [active,setactive]=useState(false);
    const [goup,setgoup]=useState(false);
    const {userdata} = useContext(createusercontext)
    const {nightmode} = useContext(CreateNightMode)
    const {savedWindow,savedWindowText} = useContext(CreateUtilContext)
    const [navdata,setnavdata]=useState([]);
    const [countofdata,setcountdata]=useState(0);
    const [lastrecord,setlastrecord]=useState(0);
    const [lastrecordactive,setlastrecordactive]=useState(false);
    const userouter=useRouter();
    

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
        <ThemeProvider theme={nightmode ? themeNight : themeLight}>
            <Bigdiv>
                <input id='csrf-token' type='hidden' value=""></input>
                <Black onClick={()=>setactive(false)} aktif={active}></Black>
                <SavedInfoDiv active={savedWindow}>{savedWindowText}</SavedInfoDiv>
                <Navigation Update={Updatecount} Reloadfunc={Reloadnav} Count={countofdata} Data={navdata}></Navigation>
                <Suspense fallback={"asdasdasdasd"}>
                   <Lefttoolbar myactive={active} makeactive={setactive}></Lefttoolbar>
                </Suspense>
                {/*this part will be changed*/}
                <Global></Global>
                <GoUpIcon onClick={()=>{window.scrollTo({top:0})}} up={goup}>
                    <Icon className="fas fa-chevron-up fa-lg" Iconconfig={{backcolor:"#ef233c",color:"white",width:"40px",height:"40px",lineheight:"40px"}}></Icon>
                </GoUpIcon>
                {children}
            </Bigdiv>
        </ThemeProvider>
    )
}
