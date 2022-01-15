import React,{useRef} from 'react'
import Contentcard from "../../../shared/Contentcard";
import uniqid from "uniqid"
//deneme


var lengthcounter = 0
function Belowcomment({Editcommenthandler,imagetoken,imagefilename,Answerhandler,mylist,commentID,content,showwindow,like,retweet,comment,readlater,profileimage,title,titleimage,username,usersurname,subtitle,date,userid}){
    
    const Contentdiv =
    (<Contentcard 
    iscomment={true}
    postId={commentID}//no need
    content={content}
    showwindow={(stateoflist)=>setlist(stateoflist)}
    like={[]}//bu bir obje array
    retweet={[]}
    comment={[]}
    readlater={[]}
    profileimage={"/black.jpg"}
    title={title}//no need
    titleimage={"yaprak.jpg"}
    username={username}
    usersurname={usersurname}
    subtitle={subtitle}//no need
    date={date}
    imagefilename={imagefilename}
    imagetoken={imagetoken}
    userid={userid}
    Answerhandler={Answerhandler}
    Childlength={mylist.length}
    Editcommenthandler={Editcommenthandler}
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
                    iscomment={true}
                    commentID={item.id}//no need
                    content={item.Message}
                    showwindow={(stateoflist)=>setlist(stateoflist)}
                    like={[]}//bu bir obje array
                    retweet={[]}
                    comment={[]}
                    readlater={[]}
                    key={index}//key numarası
                    profileimage={"/black.jpg"}
                    title={item.title}//no need
                    titleimage={"yaprak.jpg"}
                    username={item.User.firstname}
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


/*

*/