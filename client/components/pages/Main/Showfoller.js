import React from 'react'
import {Black} from "../../styledcomponents/Globalstyles";
import styled from "styled-components";
import Usercard from "../../shared/Cards/Usercard";
import {Createuserrelation} from "../../../Api/requests"
import {ThumbUp} from "@material-ui/icons"

const Rtlikewindow=styled.div`
position:absolute;
max-width:500px;
width:100%;
background-color:white;
height:350px;
border-radius:5px;
z-index:200;
top:50%;
left:50%;
transform:translate(-50%,-50%);
`

const Innerwindow=styled.div`
padding:10px;
height:100%;
overflow:auto;
`

export default function Showfollower({list,setlist,attribute}) {

    var Title = "";
    var Icon  = "";
    console.log(list)
    const Followingrelation = (checkfollow,UserId,followedid) =>{

        Createuserrelation({
            UserId:UserId,
            FollowedId:followedid,
            checkiffollow:checkfollow
        })
    }
    
    switch (attribute) {
        case "Like":
            Title="Beğeniler"
            Icon=<ThumbUp style={{color:"#C72121"}}></ThumbUp>
            break;
        case "Reshow":
            Title="İşaretler"
            break;
        default:
            Title="Empty for now"
            break;
    }
    
    return (
        <div>
                <Black onClick={setlist} aktif={true}></Black>
                <Rtlikewindow>
                    <div style={{padding:"10px",backgroundColor:"lightgrey",marginBottom:"10px",height:"40px",width:"100%",margin:"auto",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                        <ThumbUp style={{color:"#C72121"}}></ThumbUp>
                        <h4>{Title}</h4>
                        <i onClick={setlist}  style={{color:"white",cursor:"pointer"}} className="fas fa-times-circle fa-lg"></i>
                    </div>
                    <Innerwindow>
                        {list.map(item=>(
                            <Usercard 
                            optionforbutton={true}
                            firstname={item.firstname}
                            surname={item.lastname}
                            userid={item.id}
                            followerlist={item.Followed}
                            Relationfunc={Followingrelation}
                            ></Usercard>
                        ))}
                    </Innerwindow>
                </Rtlikewindow> 
        </div>
    )
}
