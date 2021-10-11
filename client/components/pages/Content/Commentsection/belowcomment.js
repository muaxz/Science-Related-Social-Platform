import React from 'react'
import Contentcard from "../../../shared/Contentcard";

export default function Belowcomment({mylist,iscomment,postId,content,showwindow,like,retweet,comment,readlater,profileimage,title,titleimage,username,usersurname,subtitle,date}){

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
    >
    </Contentcard>)

    return (
        <React.Fragment>
            { date ?
            Contentdiv
            : null
        }
        <div style={{marginTop:"20px"}}>
            {mylist.map((item,index)=>{
                return (<Belowcomment
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
                    mylist={[]}
                ></Belowcomment>)
            })}
        </div>
        </React.Fragment>
    )

}


/*

*/