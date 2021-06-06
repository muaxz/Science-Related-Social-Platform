import React,{useContext, useEffect,useState} from 'react'
import styled from "styled-components";
import Contentcard from "../../components/shared/Contentcard";
import {Getusercontent,Createrelationreq} from "../../Api/Api"
import {createusercontext} from "../../context/Usercontext"
import useScroll from "../../hooks/Scroll";
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

   const {bottom}=useScroll();
   const {userdata}=useContext(createusercontext)
   const [data,setdata]=useState([]);
   const [stopscrolling,setstopscrolling]=useState(false);
   const [itemcounts,setitemcounts]=useState({
      Readlater:10,
      Like:10,
   });
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
                order:itemcounts[latestparams],
                setstopscrolling:setstopscrolling,
                currentdata:data,
            })

       }
    
    },[userdata,params,itemcounts])
  
    useEffect(()=>{
         console.log("buradaa");
        if(bottom && !stopscrolling){

            const mutated={...itemcounts};
            mutated[current]+=10;
            setitemcounts(mutated);
            console.log("changing");
        }

    },[bottom])

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
         const mydata=[...data];
         mydata.splice(index,1);
         setdata(mydata);
    }

    return (
        <Exteriordiv>
            <h4 style={{paddingBottom:"10px"}}>{current}</h4>
            
          
            <Innerdiv>
                {
                    data.length ?

                    data.map((item,index)=>{
                        return (
                        <Contentholder>
                            <Contentcard
                            foruser={true}
                            postId={item.Content.id}
                            content={item.Content.content}
                            indexnum={index}
                            createrelationforsmh={Relationreq}
                            key={index}//key numarası
                            profileimage={"https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?cs=srgb&dl=pexels-martin-p%C3%A9chy-594610.jpg&fm=jpg"}
                            title={item.Content.title}
                            titleimage={"yaprak.jpg"}
                            username={"Duhan"}
                            usersurname={"Öztürk"}//bir obje props
                            subtitle={item.Content.subtitle}
                            date={item.Content.createdAt}
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
