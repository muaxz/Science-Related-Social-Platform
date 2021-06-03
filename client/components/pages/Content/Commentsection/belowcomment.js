import React from 'react'
import Contentcard from "../../../shared/Contentcard";

export default function belowcomment({mylist}){

    return (
        <div style={{marginTop:"20px"}}>
            {mylist.map((item,index)=>{
                return (
                    <Contentcard 
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
                    >
                    </Contentcard>)
            })}
        </div>
    )

}
