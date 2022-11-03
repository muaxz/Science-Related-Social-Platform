import React from 'react'
import Contentcard from "../../../components/shared/Cards/Contentcard"
import uniqid from "uniqid"
import {calculatedate} from "../../../utilsfunc"
import { NightLightP } from '../../styledcomponents/Globalstyles'

function Contentmap({contentlist,relationfunc,norecord,deleteThePost}) {
  
    var textfornorecord = ""
    if(norecord == "Reshow"){
         textfornorecord = "No Any Post..."
    }
    else if(norecord == "Post"){
         textfornorecord = "No Any Post..."
    }
    else if(norecord == "Like"){
         textfornorecord = "No Any Post Liked..."
    }
    console.log(contentlist)
    return (

        <div>
            {
                contentlist.length ? 

                contentlist.map((item,index)=>{
                
                        return ( <div  key={uniqid()} style={{marginBottom:"25px"}}>
                                    <Contentcard
                                        isHomeCard={false} 
                                        description={item.personal ? item.description : item.Content.description}
                                        content={item.personal ? item.content : item.Content.content}
                                        categoryType={item.personal ? item.Category.categoryName : item.Content.Category.categoryName}
                                        deleteThePost={deleteThePost}
                                        userid={item.personal ? item.personal.id : item.Content.personal.id}
                                        postId={item.personal? item.id : item.Content.id}
                                        like={item.personal ? item.Like : item.Content.Like}//bu bir obje array
                                        retweet={item.personal ? item.Retweet : item.Content.Retweet}
                                        readlater={item.personal ? item.Readlater : item.Content.Readlater}
                                        comment={item.personal ? item.allcomments : item.Content.allcomments}
                                        followeds={item.personal ? [] : item.Content.personal.Followed}
                                        profileimage={item.personal ? item.personal.mainUrl : item.Content.personal.mainUrl}
                                        title={item.personal ? item.title : item.Content.title}
                                        titleimage={item.personal != null ? item.titleimage : item.Content.titleimage}
                                        userfirstname={item.personal ? item.personal.firstname : item.Content.personal.firstname}
                                        usersurname={item.personal ? item.personal.lastname : item.Content.personal.lastname}//bir obje props
                                        createrelationforsmh={relationfunc}
                                        date={item.difference || calculatedate(item.createdAt)}
                                    />
                             </div>)
                    }) 
                    
                :
                
                <NightLightP style={{textTransform:"capitalize",textAlign:"center",marginTop:"20px"}}>{textfornorecord}</NightLightP>
            }
        </div>
    )
}

export default React.memo(Contentmap);
//sadece list değiştiginde tekrar render ediliyor
