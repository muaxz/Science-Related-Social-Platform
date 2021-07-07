import React,{useContext, useEffect,useState} from 'react'
import styled from "styled-components";
import Contentcard from "../../components/shared/Contentcard";
import {Getusercontent,Createrelationreq} from "../../Api/Api"
import {createusercontext} from "../../context/Usercontext"
import useScroll from "../../hooks/Scroll";
import { Bookmark, BookmarkBorderOutlined, BookmarkBorderRounded, ThumbUpAlt } from '@material-ui/icons';

const Exteriordiv=styled.div`
max-width:1200px;
width:100%;
margin:auto;
`

const Innerdiv=styled.div`
display:flex;
padding-top:40px;
flex-wrap:wrap;
`

const Contentholder=styled.div`
width:25%;
padding-right:10px;
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

    const Handlerelation=(postId,attribute,typeofrelation,index)=>{

        console.log(attribute,postId)
        Deleteitem(index)
        Createrelationreq({
            UserId:userdata.UserId,
            PostId:postId,
            attribute:attribute,
            relationtype:typeofrelation
        })
        

    }

    const Deleteitem=(index)=>{
         console.log(index);
         const mydata=[...data];
         mydata.splice(index,1);
         setdata(mydata);
    }
 

    return(

        <Exteriordiv>
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
        <Innerdiv>
            {
                data.length ?

                data.map((item,index)=>{
                    return (
                    <Contentholder>
                        <Contentcard
                        foruser={true}
                        iscomment={false}
                        postId={item.Content.id}
                        content={item.Content.content}
                        indexnum={index}
                        key={index}//key numarası
                        profileimage={"https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?cs=srgb&dl=pexels-martin-p%C3%A9chy-594610.jpg&fm=jpg"}
                        title={item.Content.title}
                        titleimage={"/yaprak.jpg"}
                        username={"Duhan"}
                        usersurname={"Öztürk"}//bir obje props
                        subtitle={item.Content.subtitle}
                        date={item.Content.createdAt}
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
                : "Loading..."
            }
        </Innerdiv>
    </Exteriordiv>

    )
}
