import React,{useEffect,useState,useContext} from 'react'
import styled from "styled-components";
import {createusercontext} from "../../context/Usercontext"
import {Porfileimage,Button} from "../styledcomponents/button"
import Link from "next/link"


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
       
        console.log("çalıştı")
        followerlist.forEach(element => {
            
            if(userdata.UserId == element.id){

                setcheckfollow(true);

            }

        });

    },[userdata])

    if(optionforbutton)
    Option = <Button  onClick={()=>Relationfunc(checkfollow,userdata.UserId,userid)} color="black" backcolor="#CFD9BA"><i style={{marginRight:"8px"}} className="fas fa-user-plus"></i>{checkfollow ? "Takipten Çık" : "Takip Et"}</Button>;

    return (
        <Exterior>
            <Inner>
                {
                    !optionforbutton ?

                    <div style={{color:"#e5383b",width:"25px"}}>{usernumber}.</div>
                    :null
                }
               <Link href={{
                   pathname:`/profile/${userid}`,
                   query:{name:"Post"}

                 }}>
                 <Porfileimage profile={"/car.jpg"} width="40px" height="40px"></Porfileimage>
               </Link>
               <Name><span style={{color:"black"}}>{firstname+" "+surname}</span></Name>
               <Following>{children}</Following>
               {Option}
            </Inner>
        </Exterior>
    )
}
