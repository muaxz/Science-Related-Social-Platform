import React,{useRef,useState,useEffect} from 'react'
import styled from "styled-components";
import {producereq} from "../../Api/Api";
import {Button,Global} from "../../components/styledcomponents/button";
import Window from "../../components/UI/window";
import HTMLparser,{parse} from "node-html-parser"
import Reactparser from "react-html-parser";



const Ckeholder=styled.div`
width:82%;
padding:10px;
margin:auto;
`

const InputHolder=styled.div`
position:relative;
width:80%;
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
padding:7px;
left:-16px;
color:white;
top:73%;
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
padding:10px;
color:white;
z-index:200;
`
const Labeltitle=styled.p`
margin-bottom:7px;
`

const Labelimage=styled.label`
display:block;
padding:8px;
padding-left:40px;
background-color:white;
cursor:pointer;
color:black;
`

export default function MyEditor () {
    const editorRef = useRef()
    const [ editorLoaded, setEditorLoaded ] = useState( false )
    const { CKE, ClassicEditor } = editorRef.current || {}
    const[errormsg,seterror]=useState(false);
    const[windowactive,setwindowactive]=useState(false);
    const[question,setquestion]=useState({
      title:false,
      subtitle:false,
    });
    const [contentpart,setcontentpart]=useState({
      content:"",
      title:"",
      subtitle:"",
      catagories:"",
    });
  
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
       muteted[value]=value == "content" ? editör.getData() : event.target.value;
       setcontentpart(muteted);
       console.log(muteted);
    }

    const Submitpost=()=>{
       producereq({
         contentdata:contentpart,
         seterrmsg:seterror, 
         setwindow:setwindowactive, 
       })
    }
    //ana başlık kısa tutulacak.
    //alt başlık daha uzun tutlabilir.
    return (
      <div style={{display:"flex"}}>
         <Window active={windowactive} type="confirm">İçeriğiniz Editöre Gönderildi.</Window>
        <div style={{flex:1,backgroundColor:"#8a8888",height:"400px",position:"sticky",top:"0px"}}> 
            <InputHolder>
                <p style={{marginBottom:"10px",color:"white"}}>Yazı Türü</p>
                <select onChange={(event)=>changehandler(event,"","catagories")} style={{width:"100%",padding:"8px",border:"none",outline:"none"}} id="cars">
                        <option hidden disabled selected value="Yazı Türü">Yazı Türü...</option>
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
          <InputHolder><Button onClick={Submitpost} width="100px" backcolor="#DE3131" color="white">Gönder</Button></InputHolder>
        </div>
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
                  <Labelimage  for="file">Başlık Fotoğrafı Seç</Labelimage>
                  <Input style={{display:"none"}} id="file" type="file"></Input>
                  <Iconsecure style={{top:"50%",left:"-18px",height:"100%",lineHeight:"25px"}} className="far fa-images"></Iconsecure>
              </InputHolder>
            </div>
            <Ckeholder >
             <Labeltitle>İçerik</Labeltitle>
              {
                  editorLoaded ? (
                      <CKE 
                        config={
                            { 
                              placeholder: "Placeholder text...",
                              //toolbar:['heading', '|', 'bold', 'italic', 'blockQuote', 'link', 'numberedList']
                            }
                          } 
                        editor={ ClassicEditor }
                        onChange={(event,editör)=>changehandler(event,editör,"content")}
                        data={contentpart["content"]}
                      />
                    ) : (
                      <div>Editor loading</div>
                    )
              }
              
          </Ckeholder>
        </Postdiv>
      </div>

    )
}
