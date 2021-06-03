import React,{useContext, useEffect,useState} from 'react'
import styled from "styled-components";
import Contentcard from "../../components/shared/Contentcard";
import {Getusercontent} from "../../Api/Api"
import {createusercontext} from "../../context/Usercontext"
import {Createrelationreq} from "../../Api/Api"
const Exteriordiv=styled.div`
max-width:1200px;
width:100%;
margin:auto;
`

const Innerdiv=styled.div`
display:flex;
padding-top:10px;
flex-wrap:wrap;
`

const Contentholder=styled.div`
width:25%;
padding-right:10px;
`
export default function Stuff({params}){

   const {userdata}=useContext(createusercontext)
   const [data,setdata]=useState({});
   const [current,setcurrent]=useState("");

    var latestparams="";

    useEffect(() =>{
      
       switch (params) {
           case "kaydedilenler":
               latestparams="Readlater";
               break;
           case "beğenilenler":
               latestparams="Like"
               break;        
       }

       if(userdata.UserId){

            setcurrent(latestparams);
            Getusercontent({
                params:latestparams,
                UserId:userdata.UserId,
                setdata:setdata,
            })

       }
    
    },[userdata,params])

    const Relationreq=(postId,attribute,typeofrelation,index)=>{

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
         const mydata={...data};
         mydata[current].splice(index,1);
         setdata(mydata);
    }

    return (
        <Exteriordiv>
            <h4 style={{paddingBottom:"10px"}}>{current}</h4>
            
            {console.log(data)}
            <Innerdiv>
                {
                    data[current] ?

                    data[current].map((item,index)=>{
                        return (
                        <Contentholder>
                            <Contentcard
                            foruser={true}
                            postId={item.id}
                            content={item.content}
                            indexnum={index}
                            createrelationforsmh={Relationreq}
                            key={index}//key numarası
                            profileimage={"https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?cs=srgb&dl=pexels-martin-p%C3%A9chy-594610.jpg&fm=jpg"}
                            title={item.title}
                            titleimage={"yaprak.jpg"}
                            username={"Duhan"}
                            usersurname={"Öztürk"}//bir obje props
                            subtitle={item.subtitle}
                            date={item.createdAt}
                            like={[]}//bu bir obje array
                            retweet={[]}
                            comment={[]}
                            foruseroption={current}
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
