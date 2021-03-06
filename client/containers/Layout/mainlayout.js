import React from 'react'
import Lefttoolbar from "../../components/pages/Main/Lefttoolbar";
import Navigation from "../../components/shared/Navigation";

export default function Mainlayout({children}) {
    //istekler burada
    return (
        <div>
            <Navigation></Navigation>
            <Lefttoolbar></Lefttoolbar>
            {children}
        </div>
    )
}
