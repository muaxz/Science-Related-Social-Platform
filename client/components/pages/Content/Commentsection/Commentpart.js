import React from 'react'
import Writecomment from "./writecomment";
import Belowcomment from "./belowcomment";

var rendered = 0

function Commentpart({Editcommenthandler,Producecomment,list,spinner,handleanswer}){
    

    const mutated = [...list]
  
    
    const numobj = {}

    for (let i = 0; i < list.length; i++) {
        
        numobj[i] = 0
        
    }

    const Lengthcalcualter = (comment,MainparentID,index,answerTo)=>{

            var Topcomment = ""

            if(comment.ContentId !== null){
                Topcomment = comment
            }
            comment.Mainparent = MainparentID
            comment.AnswerTo = answerTo
            

            if(comment.takeit.length > 0){
                numobj[index] += comment.takeit.length
                comment.takeit.forEach(element => {
                    Lengthcalcualter(element,MainparentID,index,comment.User.firstname)
                });
            }
            else return

            if(Topcomment !== ""){
                Topcomment["allchilds"] = numobj[index]
            }
    }

    for (let i = 0; i < mutated.length; i++) {
        
        Lengthcalcualter(mutated[i],mutated[i].id,i,"")
    }

    console.log(numobj)

    return (
        <div style={{padding:"20px",clear:"right"}}>
            <Writecomment spinner={spinner} Producecomment={Producecomment}></Writecomment>
            <Belowcomment Editcommenthandler={Editcommenthandler} Answerhandler={handleanswer} mylist={mutated}></Belowcomment>
        </div>
    )
}

export default React.memo(Commentpart)
