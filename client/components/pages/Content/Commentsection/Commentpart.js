import React from 'react'
import Writecomment from "./writecomment";
import Belowcomment from "./belowcomment";

var rendered = 0

function Commentpart({Producecomment,list,spinner,handleanswer}){
    
    console.log(list)
    const mutated = {...list}
    
    const numobj = {}

    for (let i = 0; i < list.length; i++) {
        
        numobj[i] = 0
        
    }

    const Lengthcalcualter = (comment,index)=>{
             
            if(comment.takeit.length > 0){
                numobj[index] += comment.takeit.length
                comment.takeit.forEach(element => {
                    Lengthcalcualter(element)
                });
              
            }
            else return
    }

    for (let i = 0; i < list.length; i++) {
        
        Lengthcalcualter(list[i],i)
    }

    console.log(numobj)

    return (
        <div style={{padding:"20px"}}>
            <Writecomment spinner={spinner} Producecomment={Producecomment}></Writecomment>
            <Belowcomment Answerhandler={handleanswer} mylist={list}></Belowcomment>
        </div>
    )
}

export default React.memo(Commentpart)
