import React, { useState,useEffect} from 'react'
import styled from "styled-components"
import Usercard from '../../shared/Cards/Usercard'
import {Createuserrelation} from "../../../Api/requests"
import Icon from '../../UI/Icon'
import UniqId from "uniqid"

const ExteriorDiv = styled.div`
position:relative;
padding-top:80px;

`

const titleFollow = styled.h4`

`



const Followlist = ({list,goBackToContent,type})=>{

    var titleFollow = ""
    if(type == "FOLLOWING"){
        titleFollow = "Takip Edilen"
    }else{
        titleFollow = "Takipciler"
    }

    const Followingrelation = (checkfollow,UserId,followedid) =>{

        Createuserrelation({
            UserId:UserId,
            FollowedId:followedid,
            checkiffollow:checkfollow
        })
    }

    return (
        <ExteriorDiv>
          <h3 style={{textAlign:"center",paddingBottom:"10px"}}>{titleFollow}</h3>
          <Icon  activefunc={goBackToContent} className="fa-solid fa-chevron-left" Iconconfig={{hoverback:"#c9184a",hovercolor:"white",hoverposleft:"-10px",backcolor:"#e5e5e5",color:"black",width:"40px",height:"40px",lineheight:"42px",position:"absolute",top:"20px",left:"0"}}></Icon>
          {
              list.length > 0 ?
              list.map((item)=>{
                  return (
                    <Usercard
                        key={UniqId()}
                        optionforbutton={true}
                        firstname={item.Followedpart ? item.Followedpart.firstname : item.Followerpart.firstname}
                        surname={item.Followedpart ? item.Followedpart.lastname : item.Followerpart.lastname}
                        userid={item.Followedpart ? item.Followedpart.id : item.Followerpart.id}
                        followerlist={item.Followedpart ? item.Followedpart.Followed : item.Followerpart.Followed}
                        Relationfunc={Followingrelation}
                    >    
                    </Usercard>
                  )
              })
              : <p></p>
          }
        </ExteriorDiv>
    )
    
}

export default Followlist;