import React from 'react'
import Writecomment from "./writecomment";
import Belowcomment from "./belowcomment";

export default function Commentpart({Producecomment,list,spinner,handleanswer}){
    return (
        <div style={{padding:"20px"}}>
            <Writecomment spinner={spinner} Producecomment={Producecomment}></Writecomment>
            <Belowcomment Answerhandler={handleanswer} mylist={list}></Belowcomment>
        </div>
    )
}
