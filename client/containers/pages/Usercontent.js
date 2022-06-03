import React,{useContext, useEffect,useState} from 'react'
import styled from "styled-components";
import DraftCard from "../../components/shared/Cards/DraftCard"
import {Getusercontent,Createrelationreq,DeletePost} from "../../Api/requests"
import {createusercontext} from "../../context/Usercontext"
import useScroll from "../../hooks/Scroll";
import { Bookmark, BookmarkBorderOutlined, BookmarkBorderRounded, ThumbUpAlt } from '@material-ui/icons';

const Exteriordiv=styled.div`
width:100%;
padding-left:90px;
padding-top:80px;
margin:auto;
@media (max-width:940px){
    padding-left:10px;
}

@media (max-width:840px){
    padding-left:30px;
    padding-right:20px;
}
`

const Innerdiv=styled.div`
display:flex;
padding-top:20px;
flex-wrap:wrap;
`

const Contentholder=styled.div`
max-width:340px;
height:350px;
padding-right:25px;
padding-top:25px;
@media (max-width:1200px){
    width:33%;
}
@media (max-width:840px){
    width:50%;
}
@media (max-width:600px){
    width:80%;
    margin:auto;
}
`

export default function Usercontent({params,mydata}){
   
    const {bottom}=useScroll();
    const [data,setdata]=useState(mydata);
    const {userdata}=useContext(createusercontext)
    const [stopscrolling,setstopscrolling]=useState(false);
    const [ordercount,setordercount]=useState(mydata.length);

    useEffect(() =>{
      

        if(bottom && userdata.UserId){
            
            Getusercontent({
                params:params,
                UserId:userdata.UserId,
                setdata:setdata,
                order:ordercount,
                setstopscrolling:setstopscrolling,
                currentdata:data,
            })

        }

     },[ordercount])
     
    useEffect(()=>{
    
       console.log("here")
       if(bottom && !stopscrolling){

           var count=ordercount;
           count+=data.length+10;
           setordercount(count);

       }

    },[bottom])
    
    var fornorecord = "";

    if(params == "Draft"){
        fornorecord="You did not create a draft yet ):"
    }
    else if(params == "Readlater"){
        fornorecord="You did not save any content ):"
    }
    else if(params == "Like"){
        fornorecord="You did not like any content ):"
    }
    const Handlerelation=(postId,attribute,typeofrelation,index,isDraft)=>{
        
        if(isDraft == "Draft"){

           //delete post request
           DeletePost({
               PostId:postId
           })
           //deletin post from array
           Deleteitem(index)
           
        }else{

            Deleteitem(index)
            Createrelationreq({
                UserId:userdata.UserId,
                PostId:postId,
                attribute:attribute,
                relationtype:typeofrelation
            })
        }
    }

    const Deleteitem=(index)=>{
    
         const mydata=[...data];
         mydata.splice(index,1);
         setdata(mydata);
    }
 
    return(
        <React.Fragment>

                  <Exteriordiv>
                      {/*Draft page condition*/}
                      { 
                        params !== "Draft" ? 

                        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                        <h3 style={{paddingRight:"5px"}}>{params == "Like" ? "Liked Contents" : "Saved Contents"} </h3>
                        {
                                params == "Readlater" ?

                                <Bookmark ></Bookmark>
                                :
                                <ThumbUpAlt></ThumbUpAlt>
                        }
                        <span style={{paddingLeft:"5px",color:"#6c757d",fontSize:"20px",fontWeight:"bold"}}>
                            {data.length}
                        </span>
                        </div>

                        : 

                        null
                      }
                      {/*Post kaydı bulunmadıgında*/}
                      {
                          !data.length ? 

                          <p style={{textAlign:"center",textTransform:"capitalize",fontSize:"25px",paddingTop:"30px"}}>{fornorecord}</p>

                          : null 
                      }
                       
                    <Innerdiv>
                        {
                            data.map((item,index)=>{
                                return (
                                <Contentholder key={index}>
                                    <DraftCard
                                        draftContent={item}
                                    />
                                </Contentholder>
                                )
                            })
                        }
                    </Innerdiv>
                </Exteriordiv>   
          </React.Fragment>

    )
}
