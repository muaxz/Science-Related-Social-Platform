import React from 'react'
import Lefttoolbar from "../../components/pages/Main/Lefttoolbar";
import Navigation from "../../components/shared/Navigation";
import {Global} from "../../components/styledcomponents/button";

export default function Mainlayout({children}) {
    //istekler burada
    return (
        <div style={{paddingTop:"100px",height:"100%",paddingRight:"25px"}}>
           
            <Navigation></Navigation>
            <Lefttoolbar></Lefttoolbar>
            <Global></Global>
            {children}
          
        </div>
    )
}
