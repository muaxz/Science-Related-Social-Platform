import React, {useEffect,useState,useContext} from 'react'
import Contentcard from "../../components/shared/Contentcard";
import styled from "styled-components";
import {Homereq,Createrelationreq,Notificationreq} from "../../Api/Api";
import {createusercontext} from "../../context/Usercontext";
import {FormControl,InputLabel,Select,MenuItem,Button} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import Showfollower from "../../components/pages/Main/Showfoller";
import Leaderboard from '../../components/pages/Main/Leaderboard';
import useScroll from "../../hooks/Scroll";
import {Spinner} from "../../components/styledcomponents/button"



const CssTextField = makeStyles({
    root: {
      '& .MuiSelect-root': {
        color: "black"
      }
    }
});

const Flexdiv=styled.div`
display:flex;
justify-content:space-between;
max-width:1250px;
width:100%;
`

const ContentDiv=styled.div`

`



export default function Home({mydata}){
   
    const {bottom}=useScroll();
    const {userdata} = useContext(createusercontext)
    const[contentdata,setcontentdata]=useState([...mydata]);
    const[order,setorder]=useState(0);
    const[errormsg,seterror]=useState(false);
    const[activelike,setactivelike]=useState()
    const[list,setlist]=useState([]);
    const [stoprequesting,setstopreq]=useState(false);
    const [spinner,setspinner]=useState(false);

  

    
    useEffect(()=>{


        //TODO MOVE THİS TO LAYOUT FİLE
       


        if(!stoprequesting && bottom){
            
            setspinner(true);
            Homereq({
                currentdata:contentdata,
                setcontentdata:setcontentdata,
                order:order,
                setspinner:setspinner,
                seterrmsg:seterror,
                setstopreq:setstopreq,
            })

        }

    },[order])

  
    

    useEffect(()=>{
        
        if(bottom)
        setorder(mydata.length+10);

    },[bottom])

    const createrelation=(postId,attribute,typeofrelation,userid)=>{
        
        console.log(attribute,postId)

        Createrelationreq({
            UserId:userdata.UserId,
            PostId:postId,
            attribute:attribute,
            relationtype:typeofrelation,
            UserIdofcontent:userid,
        })
    }
   
   

    return (
        <div> 
            <div style={{paddingLeft:"115px"}}>
                
                <div style={{textAlign:"center",display:"flex",justifyContent:"center"}}>
                    {
                        spinner ? <Spinner></Spinner> : null
                    }
                </div>
                { list.length > 0 ?

                  <Showfollower setlist={()=>setlist([])} list={list}></Showfollower>

                : null
                
                }
                <Flexdiv>
                    <ContentDiv style={{padding:"10px",maxWidth:"650px",height:`${list.length > 0 ? "100vh" : "100%"}`,overflow:"hidden"}}>
                        {
                    
                        contentdata.length &&

                        contentdata.map((item,index)=>(
                            <Contentcard 
                            postId={item.id}
                            content={item.content}
                            createrelationforsmh={createrelation}
                            showwindow={(stateoflist)=>setlist(stateoflist)}
                            like={item.Like}//bu bir obje array
                            retweet={item.Retweet}
                            comment={item.allcomments}
                            readlater={item.Readlater}
                            key={index}//key numarası
                            profileimage={"https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?cs=srgb&dl=pexels-martin-p%C3%A9chy-594610.jpg&fm=jpg"}
                            title={item.title}
                            titleimage={"yaprak.jpg"}
                            username={item.personal !== null ? item.personal.firstname : "notyet"}
                            usersurname={item.personal !== null ? item.personal.lastname : "notyet"}//bir obje props
                            userid={item.personal !== null ? item.personal.id: "notyet"}
                            subtitle={item.subtitle}
                            date={item.createdAt}
                            />
                        ))
                        }
                    </ContentDiv>
                </Flexdiv>
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