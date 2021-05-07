import React, {useEffect,useState,useContext} from 'react'
import Contentcard from "../../components/shared/Contentcard";
import styled from "styled-components";
import {Homereq,Createrelationreq} from "../../Api/Api";
import Usercard from "../../components/shared/Usercard";
import {Black} from "../../components/styledcomponents/button"
import {createusercontext} from "../../context/Usercontext";
import io from "socket.io-client";
import {FormControl,InputLabel,Select,MenuItem,Button} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import Showfollower from "../../components/pages/Main/Showfoller";
import Leaderboard from '../../components/pages/Main/Leaderboard';



const CssTextField = makeStyles({
    root: {
      '& .MuiSelect-root': {
        color: "black"
      }
    }
  });

export default function Home(){
   
    const usestyles=CssTextField();
    const {userdata} = useContext(createusercontext)
    const[contentdata,setcontentdata]=useState([]);
    const[order,setorder]=useState(10);
    const[errormsg,seterror]=useState(false);
    const[activelike,setactivelike]=useState()
    const[list,setlist]=useState([]);
    const[windowactive,setactive]=useState(false);
    
    useEffect(()=>{
        Homereq({
            currentdata:contentdata,
            setcontentdata:setcontentdata,
            order:order,
            seterrmsg:seterror,
        })
    },[order])

    useEffect(()=>{
       /*document.addEventListener("scroll",()=>{
           window.scrollTo({top:0,behavior:"auto"})
       })
       */
    })

    const createrelation=(postId,attribute)=>{
        
        Createrelation({
            UserId:userdata.UserId,
            PostId:postId,
            attribute:attribute,
        })
    }
   
   

    return (
        <div> 
            <div>
                { list.length > 0 ?
                 <Showfollower></Showfollower>
                : null
                }
                <Leaderboard></Leaderboard>
                <div style={{padding:"10px",maxWidth:"650px",margin:"auto",height:`${list.length > 0 ? "100vh" : "100%"}`,overflow:"hidden"}}>
                    {
                    console.log(contentdata),
                    contentdata.length > 0 ?
                    contentdata.map((item,index)=>(
                        <Contentcard 
                        postId={item.id}
                        content={item.content}
                        createrelation={createrelation}
                        showwindow={(stateoflist)=>setlist(stateoflist)}
                        like={item.Like}//bu bir obje array
                        retweet={item.Retweet}
                        comment={item.allcomments}
                        key={index}//key numarası
                        profileimage={"/black.jpg"}
                        title={item.title}
                        titleimage={"yaprak.jpg"}
                        username={"Duhan"}
                        usersurname={"Öztürk"}//bir obje props
                        subtitle={item.subtitle}
                        date={"8 dakika önce"}
                        />
                    ))
                    : "Loading..."
                    }
                </div>
           </div>
        </div>
       
    )
}



/*<Sectionpart>
<div style={{width:"40%",marginRight:"15px"}}>
    <FormControl size="small" variant="standard" style={{width:"100%"}}>
        <InputLabel>Gönderi Türü</InputLabel>
        <Select className={usestyles.root}>
            <MenuItem value="Felsefe">Felsefe</MenuItem>
            <MenuItem value="Tarih">Tarih</MenuItem> 
            <MenuItem value="Biyoloji">Tarih</MenuItem>   
        </Select>
    </FormControl>
</div>

<div style={{width:"40%"}}>
    <FormControl size="small" variant="standard" style={{width:"100%"}}>
        <InputLabel>Sıralama Ölçütü</InputLabel>
        <Select>
            <MenuItem value="Like">Beğeni Sayısı</MenuItem>
            <MenuItem value="Date">Yüklenme Tarihi</MenuItem> 
            <MenuItem value="Retweet">Retweet Sayısı</MenuItem>   
        </Select>
    </FormControl>
</div>
<div style={{marginLeft:"auto"}}>
    <Button endIcon={<SearhIcon></SearhIcon>} variant="contained" color="secondary">Ara</Button>
</div>
</Sectionpart>
*/