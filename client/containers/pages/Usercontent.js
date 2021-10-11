import React,{useContext, useEffect,useState} from 'react'
import styled from "styled-components";
import Contentcard from "../../components/shared/Contentcard";
import {Getusercontent,Createrelationreq,DeletePost} from "../../Api/Api"
import {createusercontext} from "../../context/Usercontext"
import useScroll from "../../hooks/Scroll";
import { Bookmark, BookmarkBorderOutlined, BookmarkBorderRounded, ThumbUpAlt } from '@material-ui/icons';

const Exteriordiv=styled.div`
width:100%;
padding-left:90px;
padding-top:25px;
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
justify-content:flex-start;
flex-wrap:wrap;
`

const Contentholder=styled.div`
width:25%;
padding-right:10px;
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
    

       if(bottom && !stopscrolling){

           var count=ordercount;
           count+=data.length+10;
           setordercount(count);

       }

    },[bottom])
    
    var fornorecord = "";

    if(params == "Draft"){
        fornorecord="henüz bir taslağın yok ):"
    }
    else if(params == "Readlater"){
        fornorecord="henüz bir gönderi kaydetmedin ):"
    }
    else if(params == "Like"){
        fornorecord="henüz bir gönderi beğenmedin ):"
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

            console.log(attribute,postId)
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
         console.log(index);
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
                        <h3 style={{paddingRight:"5px"}}>{params == "Like" ? "Beğenilen Gönderiler" : "Kaydedilen Gönderiler"} </h3>
                        {
                                params == "Readlater" ?

                                <Bookmark ></Bookmark>
                                :
                                <ThumbUpAlt></ThumbUpAlt>
                        }
                        <span style={{paddingLeft:"5px",color:"#6c757d"}}>
                            {`(${data.length})`}
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
                                <Contentholder>
                                    <Contentcard
                                    foruser={true}
                                    draft={params == "Draft" ? true : false}
                                    iscomment={false}
                                    postId={item.Content ? item.Content.id : item.id}
                                    content={item.Content ? item.Content.content : item.content} 
                                    indexnum={index}
                                    key={item.Content ? item.Content.id : item.id}//key numarası
                                    profileimage={"https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?cs=srgb&dl=pexels-martin-p%C3%A9chy-594610.jpg&fm=jpg"}
                                    title={item.Content ? item.Content.title : item.title}
                                    titleimage={"/yaprak.jpg"}
                                    username={"Duhan"}
                                    usersurname={"Öztürk"}//bir obje props
                                    subtitle={item.Content ? item.Content.subtitle : item.subtitle}
                                    date={item.Content ? item.Content.createdAt : item.createdAt}
                                    like={[]}//bu bir obje array
                                    retweet={[]}
                                    comment={[]}
                                    foruseroption={params}
                                    createrelationforsmh={Handlerelation}
                                    >
                                    </Contentcard>
                                </Contentholder>
                                )
                            })
                           
                        }
                    </Innerdiv>
                </Exteriordiv>   
          </React.Fragment>

    )
}
