import React,{useState} from 'react'
import Lefttoolbar from "../../components/shared/Lefttoolbar";
import Navigation from "../../components/shared/Navigation/Navigation";
import {Global} from "../../components/styledcomponents/button";
import {Black} from "../../components/styledcomponents/button"

export default function Mainlayout({children}) {
    //istekler burada
    const [active,setactive]=useState(false);
    
    return (
        <div style={{paddingTop:"70px"}}>
            <Black onClick={()=>setactive(false)} aktif={active}></Black>
            <Navigation></Navigation>
            <Lefttoolbar myactive={active} makeactive={setactive}></Lefttoolbar>
            <Global></Global>
            {children}
        </div>
    )
}
