import React, {useEffect,useState} from 'react'
import Contentcard from "../../components/shared/Contentcard";
import styled from "styled-components";
import {Homereq} from "../../Api/Api";


const Rtlikewindow=styled.div`
position:absolute;
width:300px;
height:400px;
background-color:grey;
borrder:2px solid black;
z-index:100;
top:50%;
left:50%;
transform:translate(-50%,-50%);
`
const Innerwindow=styled.div`
padding:10px;
`

export default function Home(){
    const[contentdata,setcontentdata]=useState([]);
    const[order,setorder]=useState(10);
    const[errormsg,seterror]=useState(false);
    const[activelike,setactivelike]=useState()
    const[list,setlist]=useState([]);

    useEffect(()=>{
        Homereq({
            currentdata:contentdata,
            setcontentdata:setcontentdata,
            order:order,
            seterrmsg:seterror,
        })
    },[order])

    const showindow=(stateoflist)=>{
       setlist(stateoflist);
    }

    return (
        <div>
            { list.length > 0 ?
              <Rtlikewindow>
                  <Innerwindow>
                      {list.map(item=>(
                          <div>{item.firstname}</div>
                      ))}
                  </Innerwindow>
             </Rtlikewindow> 
             : ""
            }

          <div style={{width:"60%",margin:"auto"}}>
            {
               console.log(contentdata),
               contentdata.length > 0 ?
               contentdata.map((item,index)=>(
                 <Contentcard 
                 showwindow={showindow}
                 like={item.Like}
                 retweet={item.Retweet}
                 comment={item.allcomments}
                 key={index}//key numarası
                 profileimage={"car.jpg"}
                 title={item.title}
                 titleimage={"led.jpg"}
                 username={"duhan"}
                 usersurname={"öztürk"}//bir obje props
                 subtitle={item.subtitle}
                 date={item.createdAt}
                 />
               ))
               : "Loading..."
            }
        </div>
        </div>
    )
}
