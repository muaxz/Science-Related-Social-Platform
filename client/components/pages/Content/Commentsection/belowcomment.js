import React from 'react'
import Contentcard from "../../../shared/Contentcard";
import uniqid from "uniqid"
//deneme
export default function Belowcomment({Answerhandler,mylist,postId,content,showwindow,like,retweet,comment,readlater,profileimage,title,titleimage,username,usersurname,subtitle,date}){

    const Contentdiv =
    (<Contentcard 
    iscomment={true}
    postId={postId}//no need
    content={content}
    showwindow={(stateoflist)=>setlist(stateoflist)}
    like={[]}//bu bir obje array
    retweet={[]}
    comment={[]}
    readlater={[]}
    profileimage={"/black.jpg"}
    title={title}//no need
    titleimage={"yaprak.jpg"}
    username={"Duhan"}
    usersurname={"Öztürk"}
    subtitle={subtitle}//no need
    date={date}
    Answerhandler={Answerhandler}
    >
    </Contentcard>)
    
    console.log(mylist)
    return (
        <React.Fragment>
        { 
          date && Contentdiv
        }
        <div style={{marginTop:"20px",marginLeft:"60px"}}>
            {
            mylist ?
            mylist.map((item,index)=>{
                return (<Belowcomment
                    key={uniqid()}
                    iscomment={true}
                    postId={item.id}//no need
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
                    username={"Duhan"}
                    usersurname={"Öztürk"}
                    subtitle={item.subtitle}//no need
                    date={item.createdAt}
                    mylist={item.subcomments}
                    Answerhandler={Answerhandler}
                ></Belowcomment>)
            })
            :null
        }
        </div>
        </React.Fragment>
    )

}


/*

*/