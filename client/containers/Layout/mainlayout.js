import React,{useState,useEffect,useContext} from 'react'
import styled from "styled-components";
import Lefttoolbar from "../../components/shared/Lefttoolbar";
import Navigation from "../../components/shared/Navigation/Navigation";
import {Global} from "../../components/styledcomponents/button";
import {Black} from "../../components/styledcomponents/button"
import {createusercontext} from "../../context/Usercontext";
import {useRouter} from "next/router"
import io from "socket.io-client";
import {NotificationCountreq,Notificationreq,UpdateNotificationcount} from "../../Api/Api"
import { Update } from '@material-ui/icons';

const Bigdiv=styled.div`
padding-top:80px;
`

const socket=io("http://localhost:3001");

export default function Mainlayout({children}) {

    const [active,setactive]=useState(false);
    const {userdata} = useContext(createusercontext)
    const [navdata,setnavdata]=useState([]);
    const [countofdata,setcountdata]=useState(0);
    const userouter=useRouter();

    useEffect(() => {
        setactive(false);  
    }, [userouter.query])
    
   
    useEffect(()=>{

       if(userdata.UserId){
            NotificationCountreq({
                setcountdata:setcountdata,
                UserId:userdata.UserId
            })
       }   

    },[userdata])
    
    useEffect(()=>{
      
        socket.on("Notification",(data)=>{
             
             if(userdata.UserId){

                NotificationCountreq({
                    setcountdata:setcountdata,
                    UserId:userdata.UserId
                })

             }
        })

    },[userdata])

    const Reloadnav=(order)=>{

        Notificationreq({
            setnavdata:setnavdata,
            UserId:userdata.UserId,
            order:order,
            navdata:navdata,
        })

    }

    const Updatecount=()=>{

        UpdateNotificationcount();
        setcountdata(0);
        
    }
    //
    return (
        <Bigdiv>
            <Black onClick={()=>setactive(false)} aktif={active}></Black>
            <Navigation Update={Updatecount} Reloadfunc={Reloadnav} Count={countofdata} Data={navdata}></Navigation>
            <Lefttoolbar myactive={active} makeactive={setactive}></Lefttoolbar>
            {/*this part will be changed*/}
            <Global></Global>
            {children}
        </Bigdiv>
    )
}
