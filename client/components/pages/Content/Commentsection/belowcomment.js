import React,{useRef} from 'react'
import Contentcard from "../../../shared/Cards/Contentcard";
import uniqid from "uniqid"
//deneme


var lengthcounter = 0
function Belowcomment({Answer_To,isMainparent,mainparentID,Editcommenthandler,imagetoken,imagefilename,Answerhandler,mylist,commentID,content,showwindow,like,retweet,comment,readlater,profileimage,title,titleimage,userfirstname,usersurname,subtitle,date,userid,commentRelationHandler}){
    
    const Contentdiv =
    (<Contentcard 
    Animateforcomment={true}
    mainparentID={mainparentID}
    iscomment={true}
    postId={commentID}//no need
    content={content}
    showwindow={()=>""}
    createrelationforsmh={commentRelationHandler}
    like={like}//bu bir obje array
    retweet={[]}
    comment={[]}
    readlater={[]}
    profileimage={"/black.jpg"}
    title={title}//no need
    titleimage={"yaprak.jpg"}
    userfirstname={userfirstname}
    usersurname={usersurname}
    subtitle={subtitle}//no need
    date={date}
    imagefilename={imagefilename}
    imagetoken={imagetoken}
    userid={userid}
    Answerhandler={Answerhandler}
    Childlength={mylist.length}
    Editcommenthandler={Editcommenthandler}
    isMainparent={isMainparent}
    Answer_To={Answer_To}
    >
    </Contentcard>)
    
   
    
    return (
        <React.Fragment>
        { 
          date && Contentdiv
        }
        <div style={{marginTop:"20px",marginLeft:"60px"}}>
            {
                
            mylist.length > 0 ?

            mylist.map((item,index)=>{
               
                return (<Belowcomment
                    key={uniqid()} 
                    allchildlength={item.allchilds}
                    Answer_To={item.AnswerTo}
                    isMainparent={item.ContentId}
                    mainparentID={item.Mainparent}
                    commentRelationHandler={commentRelationHandler}
                    iscomment={true}
                    commentID={item.id}//no need
                    content={item.Message}
                    showwindow={(stateoflist)=>setlist(stateoflist)}
                    like={item.likeNumber != null ? JSON.parse(item.likeNumber) : []}
                    retweet={[]}
                    comment={[]}
                    readlater={[]}//key numarası
                    profileimage={"/black.jpg"}
                    title={item.title}//no need
                    titleimage={"yaprak.jpg"}
                    userfirstname={item.User.firstname}
                    usersurname={item.User.lastname}
                    userid={item.User.id}
                    imagefilename={item.User.imageurl}
                    imagetoken={item.User.imagetoken}
                    subtitle={item.subtitle}//no need
                    date={item.createdAt}
                    mylist={item.takeit}
                    Answerhandler={Answerhandler}
                    Editcommenthandler={Editcommenthandler}
                ></Belowcomment>)
            })
            :null
        }
        </div>
        </React.Fragment>
    )

}

export default React.memo(Belowcomment)

