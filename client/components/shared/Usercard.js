import React,{useEffect,useState,useContext} from 'react'
import styled from "styled-components";
import {createusercontext} from "../../context/Usercontext"
import {Porfileimage} from "../styledcomponents/button"
import {Button} from "@material-ui/core"
import {PersonAdd} from "@material-ui/icons"
import Link from "next/link";


const Exterior=styled.div`
width:100%;
margin-bottom:10px;
`
const Inner=styled.div`
display:flex;
align-items:center;
`

const Name=styled.div`
margin-left:10px;
font-weight:600;
`

const Following=styled.div`
margin-left:auto;
margin-right:10px;
`
export default function Usercard({firstname,surname,imageurl,optionforbutton,children,usernumber,userid,followerlist,Relationfunc}) {

    const [checkfollow,setcheckfollow] = useState(false);
    const {userdata} = useContext(createusercontext);

    var Option=null;


    useEffect(()=>{
       
     
        if(userdata.UserId){

            followerlist.forEach(element => {
            
                if(userdata.UserId == element.id){
    
                    setcheckfollow(true);
    
                }
    
            });

        }

    },[userdata])

    const Followingreq=()=>{
        
        setcheckfollow(!checkfollow);
        Relationfunc(checkfollow,userdata.UserId,userid);
    }


    return (
        <Exterior>
            <Inner>
               <Link href={{
                   pathname:`/profile/${userid}`,
                   query:{name:"Post"}
                 }}>
                 <Porfileimage profile={"/led.jpg"} width="40px" height="40px"></Porfileimage>
               </Link>
               <Name><span style={{color:"black"}}>{firstname+" "+surname}</span></Name>
               <Following>{children}</Following>
               <Button  startIcon={<PersonAdd></PersonAdd>} style={{width:"170px",textTransform:"capitalize",fontWeight:"600"}} color="secondary" variant="outlined" onClick={Followingreq}>{checkfollow ? "Takipten Çık" : "Takip Et"}</Button>
            </Inner>
        </Exterior>
    )
}
