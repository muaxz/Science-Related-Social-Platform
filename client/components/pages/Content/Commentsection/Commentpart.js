import React,{useEffect,useState} from 'react'
import Writecomment from "./writecomment";
import Belowcomment from "./belowcomment";

function Commentpart({Editcommenthandler,Producecomment,list,spinner,handleanswer,commentRelationHandler}){
    
    const [mylist,setMylist] = useState(list)
    
    
    useEffect(()=>{
        console.log(list)
        const numobj = {}
        const mutated = [...list]

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

        setMylist(mutated)

    },[list])

    return (
        <div>
            <Writecomment spinner={spinner} Producecomment={Producecomment}></Writecomment>
            <Belowcomment commentRelationHandler={commentRelationHandler} Editcommenthandler={Editcommenthandler} Answerhandler={handleanswer} mylist={mylist}></Belowcomment>
        </div>
    )
}

export default React.memo(Commentpart)
