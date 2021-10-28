import axios from 'axios';
import React,{useRef,useState,useEffect,useContext} from 'react'
import styled from "styled-components";
import {producereq} from "../../Api/Api";
import {Button as Corebutton} from "@material-ui/core";
import {createusercontext} from "../../context/Usercontext"
import {Button,Global} from "../../components/styledcomponents/button";
import Window from "../../components/UI/window";




const Ckeholder=styled.div`
width:82%;
padding:10px;
margin:auto;
`


const InputHolder=styled.div`
position:relative;
width:90%;
margin:20px auto;
`
const Input=styled.input`
width:100%;
padding:8px;
padding-left:40px;
outline:none;
border:none;
`


const Postdiv=styled.div`
flex:3;
background-color:#E4E8CD;
`

const Iconsecure=styled.i`
position:absolute;
background-color:#329297;
padding:9px;
left:-17px;
color:white;
top:74%;
transform:translate(50%,-50%);
`

const Iconquestion=styled.i`
position:absolute;
cursor:pointer;
color:#630404;
top:70%;
transform:translate(50%,-50%);
right:-15px;
&:hover{
  color:#FE2C2E ;
}
`

const Infowindow=styled.div`
display:${({active})=>active ? "block" : "none"};
position:absolute;
right:10px;
background-color:black;
width:300px;
height:200px;
padding:10px;
color:white;
z-index:200;
`
const Labeltitle=styled.p`
margin-bottom:7px;
`

const Labelimage=styled.label`
display:block;
padding:6px;
padding-left:45px;
background-color:white;
cursor:pointer;
color:black;
`

const Exterior=styled.div`
display:flex;
max-width:1000px;
width:100%;
margin:50px auto;
@media (max-width:900px){
display:block;
width:80%;
}
`
const Leftside=styled.div`
flex:1;
background-color:#8a8888;
position:sticky;
padding:10px;
top:65px;
@media (max-width:900px){
  position:relative;
  top:0;
  }
`

export default function MyEditor (){

    const editorRef = useRef()
    const {userdata} = useContext(createusercontext);
    const [ editorLoaded, setEditorLoaded ] = useState( false )
    const { CKE, ClassicEditor } = editorRef.current || {}
    const[errormsg,seterror] = useState(false);
    const[windowactive,setwindowactive] = useState(false);
    const[question,setquestion] = useState({
      title:false,
      subtitle:false,
    });
    const[file,setfile] = useState();
    const[filename,setfilename] = useState("");
    const[uploaded,setuploaded] = useState(false);
    const textref=useRef("");
    const [contentpart,setcontentpart] = useState({
      content:"",
      title:"",
      subtitle:"",
      catagories:"",
      UserId:"",
    });
    

    useEffect(()=>{

        const mutated={...contentpart};
        mutated["UserId"] = userdata.UserId;
        setcontentpart(mutated);

    },[userdata])
    
    useEffect(()=>{
        const {CKEditor}=require( '@ckeditor/ckeditor5-react' )
        editorRef.current = {
            CKE: CKEditor,
            ClassicEditor: require( '@ckeditor/ckeditor5-build-classic' )
        }
      setEditorLoaded(true)
    }, [])
  
    const changehandler=(event,editör,value)=>{
       const muteted={...contentpart};
       muteted[value]= value == "content" ? editör.getData() : event.target.value;
       setcontentpart(muteted);
       console.log(muteted);
    }

    const filechange=(event)=>{
       setfile(event.target.files[0])
       setfilename(event.target.files[0].name);
       console.log(event.target.files[0].name);
    }
    
    const submitfile=async ()=>{

      const formData=new FormData();

      formData.append("upload",file);

      try{

         await axios.post("/upload",formData);

      }catch(err){

         return console.log("UPLOAD ERRORRRRRRR");
         
      }
      return setuploaded(true);
    }
    
    const Submitpost=(typeofsubmit)=>{

        if(typeofsubmit == "Waiting"){
          textref.current="Postun Editöre Gönderildi"
        }
        else{
          textref.current="Taslak Olarak kaydedildi"
        }
        
        producereq({
          contentdata:contentpart,
          seterrmsg:seterror, 
          typeofsubmit:typeofsubmit,
          setwindow:setwindowactive, 
        })
    
    }
    
    
    //ana başlık kısa tutulacak.
    //alt başlık daha uzun tutlabilir.
    
    return (
      <Exterior>
        <Window closefunction={()=>setwindowactive(false)} active={windowactive} type="confirm"> {textref.current} </Window>
        <Leftside> 
              <InputHolder>
                  <p style={{marginBottom:"10px",color:"white"}}>Yazı Türü</p>
                  <select value={contentpart.catagories} onChange={(event)=>changehandler(event,"","catagories")} style={{width:"100%",padding:"8px",border:"none",outline:"none"}} id="cars">
                          <option hidden value="Yazı Türü">Yazı Türü...</option>
                          <option value="Felsefe">Felsefe</option>
                          <option value="Uzay">Uzay</option>
                          <option value="Metafizik">Metafizik</option>
                          <option value="Biyoloji">Biyoloji</option>
                  </select>
              </InputHolder>
              <InputHolder>
                  <p style={{marginBottom:"10px",color:"white"}}>Tahmini Yayınlanma Süresi</p>
                  <Input style={{padding:"6px"}}  value="2013-01-08" type="date"  onChange={(event)=>changehandler(event,"","title")} placeholder="Başlık..."></Input>
              </InputHolder>
            <InputHolder><Corebutton onClick={()=>Submitpost("Waiting")}  style={{width:"100%",backgroundColor:"#ef233c",textTransform:"capitalize"}} color="secondary" variant="contained">Gönder</Corebutton></InputHolder>
            <InputHolder><Corebutton onClick={()=>Submitpost("Draft")}   style={{width:"100%",backgroundColor:"#2ec4b6",textTransform:"capitalize"}} color="secondary" variant="contained">Taslak Olarak Sakla</Corebutton></InputHolder>
        </Leftside>
        <Postdiv>
            <Global></Global>
            <div>
              <InputHolder>
                  <Labeltitle>Başlık</Labeltitle>
                  <Iconsecure className="fas fa-pen"></Iconsecure>
                  <Infowindow active={question["title"]}>Başlık kısmı için kelimelerin ilk harfleri büyük olmak zorunda !</Infowindow>
                  <Iconquestion onMouseLeave={()=>setquestion(prev=>{return{...prev,title:false}})} onMouseOver={()=>setquestion(prev=>{return{...prev,title:true}})} className="fas fa-question-circle"></Iconquestion>
                  <Input id="title" onChange={(event)=>changehandler(event,"","title")} placeholder="Başlık..."></Input>
              </InputHolder>
              <InputHolder>
                  <Labeltitle>Alt Başlık</Labeltitle>
                  <Iconsecure className="fas fa-pen"></Iconsecure>
                  <Infowindow  active={question["subtitle"]}>Alt başlık kısmını normal başlık kısmından daha uzun tutabilirsiniz ve harf büyüklüğüne dikkat etmenize gerek yoktur.</Infowindow>
                  <Iconquestion onMouseLeave={()=>setquestion(prev=>{return{...prev,subtitle:false}})} onMouseOver={()=>setquestion(prev=>{return{...prev,subtitle:true}})} className="fas fa-question-circle"></Iconquestion>
                  <Input onChange={(event)=>changehandler(event,"","subtitle")} placeholder="Alt Başlık..."></Input>
              </InputHolder>
              <InputHolder>
                  <Labelimage  htmlFor="file">Başlık Fotoğrafı Seç</Labelimage>
                  <Input onChange={filechange} style={{display:"none"}} id="file" type="file" name="upload"></Input>
                  <Iconsecure style={{top:"50%",left:"-18px",height:"100%",lineHeight:"20px"}} className="fas fa-images"></Iconsecure>  
              </InputHolder>
              <InputHolder>
                <Button onClick={submitfile} backcolor="blue" color="white">Upload</Button>
              </InputHolder>    
              <div>
                {
                   uploaded ? <img src={`${filename}`}></img> : null
                }
              </div>
            </div>
            <Ckeholder >
             <Labeltitle>İçerik</Labeltitle>
              {
                  editorLoaded ? (
                      <CKE 
                        config={
                            { 
                              ckfinder:{
                                 uploadUrl:"http://localhost:3001/upload"
                              },
                              placeholder: "Placeholder text...",
                              //toolbar:['heading', '|', 'bold', 'italic', 'blockQuote', 'link', 'numberedList']
                            }
                          } 
                        editor={ClassicEditor}
                        onInit={(editor) => {
                          //
                        }}
                        onChange={(event,editör)=>changehandler(event,editör,"content")}
                        data={contentpart["content"]}
                       
                      />
                    ) : (
                      <div>Editor loading</div>
                    )
              }
              
          </Ckeholder>
        </Postdiv>
      </Exterior>

    )
}
