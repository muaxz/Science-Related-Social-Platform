import React,{useRef,useState,useEffect} from 'react'
import styled from "styled-components";
import {producereq} from "../../Api/Api";
import {Button,Global} from "../../components/styledcomponents/button";
import HTMLparser,{parse} from "node-html-parser"
import Reactparser from "react-html-parser";



const Ckeholder=styled.div`
width:100%;
padding:10px;
`

const InputHolder=styled.div`
width:100%;
border-bottom:1px solid white;
padding:20px;
margin-bottom:20px;
`
const Input=styled.input`
width:100%;
padding:8px;
outline:none;
border:none;
`


const Postdiv=styled.div`
max-width:1200px;
background-color:lightgrey;
margin:20px auto;
`

export default function MyEditor () {
    const editorRef = useRef()
    const [ editorLoaded, setEditorLoaded ] = useState( false )
    const { CKE, ClassicEditor } = editorRef.current || {}
    const[errormsg,seterror]=useState(false);
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
         contentdata:content,
         seterrmsg:seterror,  
       })
    }
    //ana başlık kısa tutulacak.
    //alt başlık daha uzun tutlabilir.
    return (
      <Postdiv>
        
          <Global></Global>
          <div style={{display:"flex"}}>
            <InputHolder>
                <h4 style={{marginBottom:"10px",color:"red"}}>Başlık</h4>
                <Input onChange={(event)=>changehandler(event,"","title")} placeholder="Başlık..."></Input>
            </InputHolder>
            <InputHolder>
                <h4 style={{marginBottom:"10px"}}>Yazı Türü</h4>
                <select style={{width:"100%",padding:"8px",border:"none",outline:"none"}} id="cars">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
            </InputHolder>
            <InputHolder>
            <h4 style={{marginBottom:"10px"}}>Tahmini Yayınlanma Süresi</h4>
                <Input style={{padding:"6px"}}  value="2013-01-08" type="date"  onChange={(event)=>changehandler(event,"","title")} placeholder="Başlık..."></Input>
            </InputHolder>
          </div>
          <InputHolder>
          <h4 style={{marginBottom:"10px",color:"red"}}>Alt Başlık</h4>
              <textarea   onChange={(event)=>changehandler(event,"","subtitle")} style={{padding:"10px",outline:"none",display:"block",border:"none"}} rows="8" cols="60" placeholder="Alt Başlık..."></textarea>
          </InputHolder>
          <Ckeholder >
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
            <div style={{marginTop:"10px"}}>
              <Button onClick={Submitpost} backcolor="red" color="white" hoverback="#A41D31">Submit Post</Button>
            </div>
        </Ckeholder>
        {Reactparser(contentpart["content"])}
      </Postdiv>
    )
}
