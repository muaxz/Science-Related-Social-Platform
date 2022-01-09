import React, { useState,useContext, useEffect , useRef} from 'react'
import styled,{keyframes} from "styled-components";
import {Porfileimage} from "../../styledcomponents/button";
import Navtools from "./Navigationtools";
import useClickoutsie from '../../../hooks/Clikcoutisde';
import {createusercontext} from "../../../context/Usercontext";
import {Button} from "@material-ui/core"
import Link from "next/link";
import {Getusersforsearchbar,logout} from "../../../Api/Api"
import { AccountCircle, Home,Assignment} from '@material-ui/icons';



const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid lightgrey;
  border-right: 2px solid lightgrey;
  border-bottom: 2px solid lightgrey;
  border-left: 2px solid black;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;


const Navbarext=styled.div`
position:fixed;
top:0;
left:0;
width:100%;
height:60px;
padding:5px;
background-color:white;
box-shadow: 0 3px 3px rgba(0,0,0,0.2);
z-index:200;
`
const InnerNavbar=styled.div`
position:relative;
height:100%;
margin:auto;
display:flex;
align-items:center;
max-width:1100px;
width:100%;
justify-content:space-between;
`


const Iconholder=styled.div`
position:relative;
margin-right:10px;
cursor:pointer;
background-color:${({clicked})=>clicked ? "" : ""};
padding:2px;
border-radius:50%;
transition:0.3s;
&:active {
    background-color:#bbdefb;
}
`

const InputHolder=styled.div`
position:relative;
display:${({flex})=>flex};
position:relative;
@media (max-width:850px){
    display:${({flex2})=>flex2};
}
`

const Input=styled.input`
padding:6px;
padding-left:10px;
padding-right:40px;
border:none;
width:100%;
outline:none;
border-radius:3px;
background-color:#E0E0E0;
color:black;
::placeholder {
    color:black;
}
`
const Iconsecure=styled.i`
color:white;
top:50%;
height:100%;
transform:translate(50%,-50%);
`
const Optionwindow=styled.div`
position:absolute;
top:60px;
height:${({fornotify})=>fornotify ? "400px" : ""};
overflow:auto;
padding:8px;
right:0px;
width:350px;
background-color:white;
border-radius:6px;
box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
`
const Inneroption=styled.div`

`

const Searchdiv=styled.div`
padding:10px;
position:absolute;
top:60px;
left:-55px;
width:300px;
height:300px;
background-color:white;
overflow:auto;
border-radius:10px;
box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
&:before {
    position:absolute;
    left:50px;
    top:0;
}
&::-webkit-scrollbar {
    width:30px;
}
&::-webkit-scrollbar:vertical {
    width: 5px;
    }
    
&::-webkit-scrollbar:horizontal {
    height: 12px;
}

&::-webkit-scrollbar-thumb {
    fontsize:10px;
    background-color: rgba(0, 0, 0, .5);
    border-radius:10px;
}
`

const Searchelements=styled.div`
display:flex;
border-radius:5px;
padding:10px;
align-items:center;
margin-bottom:15px;
&:hover {
cursor:pointer;
background-color:#e63946;
color:white;
}
`

//ToDo 
export default function Navigation({Data,Count,Reloadfunc,Update}){
 

    const {logged,spinner,userdata,setspinner,setuserdata,setlogged} = useContext(createusercontext);
    const {ref,visible,setvisible} = useClickoutsie();
    const {ref:ref2,visible:visible2,setvisible:setvisible2} = useClickoutsie();
    //burada değişken isimi değiştirerek kullanabilrsin
    const [inputvalue,setinputvalue] = useState("");
    const [usersforsearch,setusersforsearch]=useState([]);
    const [searchactive,setsearchactive]=useState("");
    const  Myref = useRef();
    const [ordernumber,setordernumber]=useState(10);
    const [Iconumber,setıconnumber] = useState(0);
    const [Iconobject,setIconobject] = useState({
        1:{
          className:"fas fa-plus",
          onoff:false,
          lineheight:'36px',
          short:"plus"
          
        },
        2:{
          className:"fas fa-bell",
          onoff:false,
          lineheight:'33px',
          short:"bell",
          Oncerequested:false,
        },
        3:{
          className:"fas fa-sort-down",
          onoff:false,
          lineheight:'30px',
          short:"down"

        },
    })
    
    console.log(usersforsearch)
    useEffect(()=>{
      //Todo only input lenth
      if(!visible2)
      setinputvalue("");
      setsearchactive("");

    },[visible2])

    const Logout=()=>{
        logout({
            setlogged:setlogged,
            setuserdata:setuserdata,
            setspinner:setspinner
        })
    }

    const Keyupfunction=()=>{

       console.log(inputvalue)
       if(inputvalue !== ""){
            setsearchactive("Loading");
            Getusersforsearchbar({
                inputvalue:inputvalue,
                setusers:setusersforsearch,
                setactive:setsearchactive,
            })
       }

    }

    const ScrolltoBottom=()=>{

        if(Myref.current.scrollTop + Myref.current.offsetHeight >= Myref.current.scrollHeight){
            Reloadfunc(ordernumber+Data.length);
        }

    }

    const Changehandler=(e)=>{
         setvisible2(true);
         setinputvalue(e.target.value);
    }

    const Iconselect=(iconnumber)=>{
      
        const myobject={...Iconobject};

        Object.keys(myobject).forEach(key =>{
            if(iconnumber !== key){
                myobject[key].onoff=false;
            }
           
        });

        if(myobject[iconnumber].onoff){

            myobject[iconnumber].onoff=false;
            setıconnumber(0);

        }
        else{

            myobject[iconnumber].onoff=true;
            setıconnumber(iconnumber);

        }
       
        setIconobject(myobject); 
        setvisible(true);
        
    }

    const Iconclick=(item,shortname)=>{
        //burada sadece bilidirim kutusu kapalıyken istek atıyoruz 2 kez degil
        if(shortname == "bell" && Iconobject[item].onoff == false)
        {
            Update();
        }
        
    
        Iconselect(item);
    }
    
    var searchtype="";
    
    if(searchactive == "Loading"){
        searchtype=<div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}}><Spinner></Spinner></div> 
    }
    else if(searchactive == "Nothing"){
        searchtype=<div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}}>Sonuç Bulunamadı.</div> 
    }

    return (
        <Navbarext>
            <InnerNavbar>   
               <InputHolder flex={"block"}>
                    <Link href="/">
                        <div style={{display:"flex",alignItems:"center",cursor:"pointer"}}>
                            <Porfileimage profile="https://evrimagaci.org/public/images/logo/v3.svg?v=1" width="40px" height="40px"/>
                            <div style={{marginLeft:"10px",paddingRight:"10px",borderRight:"1px solid black"}}><span>Evrim Ağacı</span></div>
                            <div style={{marginLeft:"10px",display:"flex",alignItems:"center"}}><Home style={{fontSize:"30px",color:"#c9184a"}}></Home></div>
                        </div>
                    </Link>
                </InputHolder>
               <InputHolder  ref={ref2} flex2={"none"} flex={false}>
                    <Input onKeyUp={Keyupfunction} value={inputvalue} onChange={Changehandler} placeholder="Ara"></Input>
                    {
                        inputvalue.length <= 0 ?
                        <div style={{position:"absolute",right:"15px",top:"10px",width:"20px"}}>
                           <Iconsecure className="fas fa-search"></Iconsecure>
                        </div>
                        :
                        <div onClick={()=>setvisible2(false)} style={{position:"absolute",right:"11px",top:"12px",width:"20px",cursor:"pointer"}}>
                           <Iconsecure className="fas fa-times"></Iconsecure>
                        </div>
                    } 
                    
                    {
                        inputvalue.length > 0 && visible2 == true &&

                        <Searchdiv>
                            
                            {
                                searchactive.length > 0 
                                
                                ? 
                                
                                <React.Fragment>{searchtype}</React.Fragment>

                                :
            
                                usersforsearch.map((item)=>{
                                   
                                    return(<Searchelements onClick={()=>setinputvalue("")}>
                                            <Link href={{
                                                pathname:`/profile/${item.id}`,
                                                query:{name:"Post"}
                                                }}>

                                                <div style={{display:"flex"}}>
                                                    <div>
                                                        <Porfileimage profile="/black.jpg" width="45px" height="45px"/>
                                                    </div>
                                                    <div style={{paddingLeft:"10px"}}>
                                                        <p style={{fontWeight:"600"}}>{item.firstname+" "+item.lastname}</p>
                                                        <p style={{color:"lightgray",fontSize:"15px"}}>İnşaat Mühendisi</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </Searchelements>)
                                })
                            }
                        </Searchdiv>
                    }
                </InputHolder>
                {  
                   !spinner 

                   ? 
                   
                    <Spinner></Spinner>
                   
                   :

                   !logged 
                   
                   ? 

                   <InputHolder>
                        <Link  href="/login">
                         <Button variant="contained" style={{marginRight:"10px",textTransform:"capitalize"}} endIcon={<AccountCircle style={{fontSize:"25px"}}></AccountCircle>}>
                           Giriş Yap
                         </Button>
                       </Link>
                       <Button variant="contained"  style={{textTransform:"capitalize"}} endIcon={<Assignment style={{color:"white",borderRadius:"50%",fontSize:"25px"}}></Assignment>} color="secondary">Kayıt Ol</Button>
                   </InputHolder>

                   :

                    <InputHolder  flex2={"flex"} ref={ref} flex={"flex"}>
                        {
                            Object.keys(Iconobject).map((item)=>{
                                return (
                                    <Iconholder clicked={Iconobject[item].onoff} onClick={()=>Iconclick(item,Iconobject[item].short)}>
                                        <span style={{display:"block",backgroundColor:"#F0F0F0",borderRadius:"50%",width:"35px",height:"35px",textAlign:"center",lineHeight:Iconobject[item].lineheight}}>
                                            <i className={Iconobject[item].className} style={{color:Count > 0 && Iconobject[item].short == "bell" ? "#d90429" : ""}}></i>
                                            {
                                                Iconobject[item].short == "bell" && Count > 0 ?
                                                (<span style={{position:"absolute",fontSize:"12px",top:"-5px",right:"-5px",width:"20px",display:"block",height:"20px",textAlign:"center",lineHeight:"20px",backgroundColor:"#d90429",color:"white",borderRadius:"50%"}}>{Count}</span>) : null
                                            }
                                        </span>
                                    </Iconholder>
                                )
                            })
                            
                        }

                         <Link href={{
                            pathname:`/profile/${userdata.UserId}`,
                            query:{name:"Post"}
                            }}> 
                           <Porfileimage width="35px" height="35px" profile="/car.jpg"/>
                         </Link>
                         
                        {
                        
                            Iconumber !== 0 && visible == true ?
                            <Optionwindow onScroll={ScrolltoBottom} ref={Myref} fornotify={Iconobject["2"].onoff}>
                                <Inneroption>
                                    <Navtools Logout={Logout} Navdata={Data} optnumber={Iconumber}></Navtools>
                                </Inneroption>
                            </Optionwindow> : null
                        }  
                        
                    </InputHolder>
                }
               
               
            </InnerNavbar>
        </Navbarext>
    )
}
