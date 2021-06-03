import React from 'react'
import Writecomment from "./writecomment";
import Belowcomment from "./belowcomment";

export default function Commentpart({Producecomment,list,spinner}){
    return (
        <div style={{padding:"20px"}}>
            <Writecomment spinner={spinner} Producecomment={Producecomment}></Writecomment>
            <Belowcomment mylist={list}></Belowcomment>
        </div>
    )
}
