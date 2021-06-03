import React from 'react'
import {Black} from "../../styledcomponents/button";
import styled from "styled-components";
import Usercard from "../../shared/Usercard";

const Rtlikewindow=styled.div`
position:absolute;
width:500px;
height:350px;
border-radius:5px;
background-color:#c83349;
z-index:100;
top:50%;
left:50%;
transform:translate(-50%,-50%);
`

const Innerwindow=styled.div`
padding:10px;
background-color:white;
height:100%;
border-radius:5px;
overflow:auto;
`

export default function Showfollower({list,setlist}) {
    return (
        <div>
                <Black onClick={setlist} aktif={true}></Black>
                <Rtlikewindow>
                    <div style={{height:"40px",width:"95%",margin:"auto",display:"flex",alignItems:"center",justifyContent:"flex-end"}}>
                      
                        <i onClick={setlist}  style={{color:"white",cursor:"pointer"}} className="fas fa-times-circle fa-lg"></i>
                       
                    </div>
                    <Innerwindow>
                        {list.map(item=>(
                            <Usercard 
                            optionforbutton={true}
                            firstname={item.firstname}
                            imageurl={item.surname}
                            ></Usercard>
                        ))}
                    </Innerwindow>
                </Rtlikewindow> 
        </div>
    )
}
