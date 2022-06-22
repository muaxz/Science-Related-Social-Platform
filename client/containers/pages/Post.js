import axios from 'axios';
import React,{useRef,useState,useEffect,useContext,useMemo} from 'react'
import styled from "styled-components";
import {producereq} from "../../Api/requests";
import {Button as Corebutton,TextField,InputAdornment,FormControl,Select,MenuItem,FormHelperText} from "@material-ui/core";
import {Create} from "@material-ui/icons"
import {createusercontext} from "../../context/Usercontext"
import {Button,Global} from "../../components/styledcomponents/Globalstyles";
import Window from "../../components/UI/window";
import Dropzone from "react-dropzone"







/* ckeditor5-image/theme/imagestyle.css */


const Ckeholder=styled.div`
max-width:980px;
padding:10px;
margin-top:10px;
`

const InputHolder=styled.div`
position:relative;
width:90%;
margin:20px auto;
`

const RightPart=styled.div`
display:flex;
height:100%;
flex-direction:column;
flex:3;
background-color:#ccdbfd;
border-top-right-radius:8px;
border-bottom-right-radius:8px;
`

const Exterior=styled.div`
max-width:1300px;
width:100%;
flex-direction:row;
margin:0 auto;
@media (max-width:900px){
width:80%;
}
`

const InnerDiv = styled.div`
display:flex;
margin-top:100px;
margin-bottom:30px;
width:100%;
justify-content:center;
@media (max-width:900px){
  display:block;
}
`
const Leftside=styled.div`
display:flex;
flex-direction:column;
flex:1;
position:sticky;
background-color:#ccdbfd;
border-top-left-radius:8px;
border-bottom-left-radius:8px;
border-right:2px solid lightgrey;
padding:10px;
top:65px;
@media (max-width:900px){
}
`
const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderWidth: 3,
  borderRadius: 2,
  borderColor: '#2196f3',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  cursor:"pointer",
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out',
  width:"100%",
  height:"100px"
};

const focusedStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

export default function MyEditor({categories,content}){

    const editorRef = useRef()
    const {userdata} = useContext(createusercontext);
    const [ editorLoaded, setEditorLoaded ] = useState( false )
    const { CKE, ClassicEditor } = editorRef.current || {}
    const[errormsg,seterror] = useState(false);
    const[windowactive,setwindowactive] = useState(false);
    const[titleImageSrc,setTitleImageSrc] = useState(content.titleimage || null);
    const windowInformRef = useRef("");
    const windowTypeRef = useRef("");
    const [contentpart,setcontentpart] = useState({
      content:{
        value:content.content || "",
        isValid:true
      },
      title:{
        value:content.title || "",
        isValid:true
      },
      subtitle:{
        value:content.subtitle || "",
        isValid:true
      },
      titlemainUrl:{
        value:content.titleimage || "",
        isValid:true
      },
      catagory:{
        value:content.CategoryId || "",
        isValid:true
      },
      UserId:{
        value:"",
        isValid:true
      },
    });
    
    function uploadAdapter(loader) {
      return {
        upload: () => {
          return new Promise((resolve, reject) => {
            const body = new FormData();
            loader.file.then((file) => {
              body.append("files", file);
              // let headers = new Headers();
              // headers.append("Origin", "http://localhost:3000");
              fetch(`http://localhost:3001/content/uploadContentImage`, {
                method: "post",
                body: body
                // mode: "no-cors"
              })
                .then((res) => res.json())
                .then((res) => {
                    if(res.state){
                        windowInformRef.current = "The size of an image should be the most 4 MB"
                        windowTypeRef.current = "error"
                        setwindowactive(true)
                    }
                    resolve({default:res.url})
                })
                .catch((err) => {
                  reject(err);
                });
            });
          });
        }
      };
    }

    function uploadPlugin(editor) {
      editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
        return uploadAdapter(loader);
      };
    }

    useEffect(()=>{
        //Delete this unecessary
        const mutated={...contentpart};
        mutated["UserId"].value = userdata.UserId;
        setcontentpart(mutated);

    },[userdata])
    
    useEffect(()=>{

        const {CKEditor} = require("@ckeditor/ckeditor5-react")
        
        editorRef.current = {
            CKE: CKEditor,
            ClassicEditor: require( "ckeditor5-custom-build/build/ckeditor" )
        }

        setEditorLoaded(true)
    },[])

    const changeHandler=(event,editör,value)=>{
      
       const mutatedValue ={...contentpart};
       mutatedValue[value].isValid = true;
       mutatedValue[value].value = (value == "content" ? editör.getData() : event.target.value)
      
       const editorImageElements = document.querySelectorAll("figure")
       editorImageElements.forEach(element => {   
       
          if(element.firstChild.getAttribute('src') == "ERROR"){
             
              element.firstChild.style.display = "none"
              element.childNodes[1].style.display = "none"
          }
          
      });
      
      if(mutatedValue[value].value.toString().includes("ERROR") || mutatedValue[value].value.toString().includes(`<figure class="image"><img></figure>`)) return;
        

      setcontentpart(mutatedValue);
      
    }
    //this part is for the title image for the content
    
    function UploadTitleImage(titleFile){
      const fileForm = new FormData();
      fileForm.append("files",titleFile[0])
      axios.post(`http://localhost:3001/content/uploadContentImage`,fileForm).then((res)=>{
        console.log(res.data)
        if(!res.data.uploaded){
          windowInformRef.current = "The size of an image should be the most 4 MB"
          windowTypeRef.current = "error"
          return setwindowactive(true)
        }

        setcontentpart(prev=>{return{...prev,titlemainUrl:{value:res.data.url,isValid:true}}})
        const src = URL.createObjectURL(titleFile[0])
        setTitleImageSrc(src);

      })

      
    }
    
    const InputisValidation=(value)=>{
       var isValid = true;
       const content = {...contentpart}
       Object.keys(contentpart).forEach((key)=>{
            if(contentpart[key].value == "" && key !== "subtitle"){
                content[key].isValid = false;
                setcontentpart(content)
                isValid = false;
            } 
       })

       return isValid;
    }
    
    const Submitpost=(typeofsubmit)=>{

        if(typeofsubmit == "Published"){

          windowInformRef.current="Postun Yayinlandi !"

        }
        else{

          windowInformRef.current="Taslak Olarak kaydedildi"
          
        }

        windowTypeRef.current = "confirm"
        
        
        if(!InputisValidation(contentpart)) return false;

        const dataWillBeSend = {}
        for (const key in contentpart) {
           dataWillBeSend[key] = contentpart[key].value
        }

        producereq({
          contentdata:dataWillBeSend,
          seterrmsg:seterror, 
          typeofsubmit:typeofsubmit,
          setwindow:setwindowactive, 
          draftContentId:content.id
        })
    
    }
    
    
    //ana başlık kısa tutulacak.
    //alt başlık daha uzun tutlabilir.
    return (
      <Exterior>
        <InnerDiv>
            <Window closefunction={()=>setwindowactive(false)} active={windowactive} type={windowTypeRef.current}> {windowInformRef.current} </Window>
            <Leftside> 
                  <InputHolder>
                      <FormControl size="small" fullWidth>               
                          <Select
                              onChange={(e)=>changeHandler(e,"","catagory")}
                              style={{backgroundColor:"white",color:"black"}}
                              variant="outlined"
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              inputProps={{ 'aria-label': 'Without label' }}
                              defaultValue={contentpart["catagory"].value || "default"}
                          >
                              <MenuItem selected disabled value="default">
                                  Choose A Topic
                              </MenuItem>
                              {
                                categories.map((item,index)=>(
                                  <MenuItem key={index} value={item.id}>{item.categoryName}</MenuItem>
                                ))  
                              }     
                          </Select>
                          <FormHelperText style={{color:"red"}}>{!contentpart["catagory"].isValid && "You appear to have forgotton to choose a topic."}</FormHelperText>
                      </FormControl>
                  </InputHolder>
                <InputHolder><Corebutton onClick={()=>Submitpost("Published")}  style={{width:"100%",backgroundColor:"#ef233c",textTransform:"none"}} color="secondary" variant="contained">Post it !</Corebutton></InputHolder>
                <InputHolder><Corebutton onClick={()=>Submitpost("Draft")}   style={{width:"100%",backgroundColor:"#2ec4b6",textTransform:"none"}} color="secondary" variant="contained">Save it as a draft</Corebutton></InputHolder>
                {
                  titleImageSrc != null && 
                ( <div style={{marginTop:"auto",borderRadius:"15px"}}>
                    <div style={{width:"100%",height:"300px",alignSelf:"flex-end"}}>
                          <img  alt='sa' src={titleImageSrc} style={{width:"100%",objectFit:"cover",height:"100%",borderRadius:"15px"}}></img>
                    </div>
                  </div>)
                } 
            </Leftside>
            <RightPart>
                <div>
                    <InputHolder>
                        <TextField value={contentpart["title"].value} error={!contentpart["title"].isValid} onChange={(e)=>changeHandler(e,"","title")} InputProps={{style:{color:"black"},endAdornment: <InputAdornment position="end"><Create style={{color:"black"}}></Create></InputAdornment>,}} helperText="This field is mandatory for people to have a better general idea about your post." label="Title" size="small" variant="outlined" fullWidth></TextField>
                    </InputHolder>
                    <InputHolder>
                        <TextField value={contentpart["subtitle"].value} onChange={(e)=>changeHandler(e,"","subtitle")} InputProps={{style:{color:"black"},endAdornment: <InputAdornment position="end"><Create style={{color:"black"}}></Create></InputAdornment>,}} helperText="Optional field" label="Sub Title" size="small" variant="outlined" fullWidth></TextField>
                    </InputHolder>
                    <InputHolder>
                          <Dropzone  onDrop={UploadTitleImage}>
                            {({getRootProps, getInputProps}) => (
                                <section style={baseStyle}>
                                  <div {...getRootProps()} style={{width:"100%",height:"100%"}}>
                                    <input {...getInputProps()}/>
                                    <p style={{textAlign:"center",margin:"30px auto"}}>Drag 'n' drop some files here, or click to select files<br></br>for the cover image of your post</p>
                                  </div>
                                </section>
                              )}
                          </Dropzone>
                    </InputHolder>   
                </div>
                <Ckeholder>
                  {
                      editorLoaded ? (
                          <CKE 
                            config={{ 
                                  mediaEmbed:{
                                    previewsInData: true
                                  },
                                  extraPlugins:[uploadPlugin],
                                  placeholder: "Start Typing Your ideas"
                                  //toolbar:['heading', '|', 'bold', 'italic', 'blockQuote', 'link', 'numberedList']
                              }} 
                            onChange={(event,editör)=>changeHandler(event,editör,"content")}
                            value={contentpart.content.value}
                            data={contentpart["content"].value}
                            editor={ClassicEditor}
                          />
                        ) : (
                          <div>loading</div>
                        )
                  }
              </Ckeholder>
            </RightPart>
        </InnerDiv>
      </Exterior>
    )
}
