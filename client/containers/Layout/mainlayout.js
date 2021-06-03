import React,{useState,useEffect} from 'react'
import styled from "styled-components";
import Lefttoolbar from "../../components/shared/Lefttoolbar";
import Navigation from "../../components/shared/Navigation/Navigation";
import {Global} from "../../components/styledcomponents/button";
import {Black} from "../../components/styledcomponents/button"
import {useRouter} from "next/router"

const Bigdiv=styled.div`
padding-top:50px;
`

export default function Mainlayout({children}) {
    //istekler burada
    const [active,setactive]=useState(false);
    const userouter=useRouter();

    useEffect(() => {
        setactive(false);  
    }, [userouter.query])

    console.log(userouter.query)
    return (
        <Bigdiv>
            <Black onClick={()=>setactive(false)} aktif={active}></Black>
            <Navigation></Navigation>
            <Lefttoolbar myactive={active} makeactive={setactive}></Lefttoolbar>
            <Global></Global>
            {children}
        </Bigdiv>
    )
}
