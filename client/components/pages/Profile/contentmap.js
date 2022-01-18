import React from 'react'
import Contentcard from "../../../components/shared/Cards/Contentcard"
import uniqid from "uniqid"

function Contentmap({contentlist,relationfunc,norecord}) {
    console.log(contentlist)
    var textfornorecord = ""
    if(norecord == "Reshow"){
         textfornorecord = "Kullanıcının işaretlediği gönderi yok..."
    }
    else if(norecord == "Post"){
         textfornorecord = "Kullanıcının hiçbir gönderisi yok..."
    }
    else if(norecord == "Like"){
         textfornorecord = "Kullanıcının beğendiği gönderi yok..."
    }

    return (

        <div>
            {
                contentlist.length ? 
                contentlist.map((item,index)=>{
                
                        return ( <Contentcard 
                                key={uniqid()}
                                postId={item.personal? item.id : item.Content.id}
                                like={item.personal ? item.Like : item.Content.Like}//bu bir obje array
                                retweet={item.personal ? item.Retweet : item.Content.Retweet}
                                readlater={item.personal ? item.Readlater : item.Content.Readlater}
                                comment={item.personal ? item.allcomments : item.Content.allcomments}
                                profileimage={"https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?cs=srgb&dl=pexels-martin-p%C3%A9chy-594610.jpg&fm=jpg"}
                                title={item.personal ? item.title : item.Content.title}
                                titleimage={"/yaprak.jpg"}
                                userfirstname={item.personal ? item.personal.firstname : item.Content.personal.firstname}
                                usersurname={item.personal ? item.personal.lastname : item.Content.personal.lastname}//bir obje props
                                createrelationforsmh={relationfunc}
                                date={item.personal ? item.createdAt : item.Content.createdAt}
                            />)
                    }) 
                    
                :
                
                <p style={{textTransform:"capitalize",textAlign:"center",marginTop:"20px"}}>{textfornorecord}</p>
            }
        </div>
    )
}

export default React.memo(Contentmap);
//sadece list değiştiginde tekrar render ediliyor
