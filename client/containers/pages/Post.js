import axios from 'axios';
import React,{useRef,useState,useEffect,useContext} from 'react'
import styled from "styled-components";
import {producereq} from "../../Api/requests";
import {Button as Corebutton,TextField,InputAdornment,FormControl,Select,MenuItem} from "@material-ui/core";
import {Create} from "@material-ui/icons"
import {createusercontext} from "../../context/Usercontext"
import {Button,Global} from "../../components/styledcomponents/Globalstyles";
import Window from "../../components/UI/window";







/* ckeditor5-image/theme/imagestyle.css */


const Ckeholder=styled.div`
max-width:540;
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

const RightPart=styled.div`
display:flex;
justify-content:center;
flex-direction:column;
flex:3;
background-color:#edf2f4;
border-top-right-radius:8px;
border-bottom-right-radius:8px;
`

const Iconsecure=styled.i`
position:absolute;
background-color:#329297;
padding:9px;
border-top-left-radius:7px;
border-bottom-left-radius:7px;
left:-17px;
color:white;
top:74%;
transform:translate(50%,-50%);
`

const Labelimage=styled.label`
display:block;
padding:10px;
border-radius:6px;
padding-left:45px;
background-color:white;
cursor:pointer;
color:black;
`

const Exterior=styled.div`
display:flex;
max-width:1000px;
width:100%;
margin:100px auto;
@media (max-width:900px){
display:block;
width:80%;
}
`
const Leftside=styled.div`
flex:1;
background-color:#edf2f4;
position:sticky;
border-top-left-radius:8px;
border-bottom-left-radius:8px;
border-right:2px solid lightgrey;
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
    const windowInformRef = useRef("");
    const windowTypeRef = useRef("");
    const [contentpart,setcontentpart] = useState({
      content:"",
      title:"",
      subtitle:"",
      catagory:"",
      UserId:"",
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

        const mutated={...contentpart};
        mutated["UserId"] = userdata.UserId;
        setcontentpart(mutated);

    },[userdata])
    
    useEffect(()=>{
        const {CKEditor}=require( '@ckeditor/ckeditor5-react' )

        editorRef.current = {
            CKE: CKEditor,
            ClassicEditor: require( "ckeditor5-custom-build/build/ckeditor" )
        }

        setEditorLoaded(true)

    }, [])

    useEffect(()=>{
      const editor = document.querySelector("#editor")
      if(editor){
          editorRef.current.ClassicEditor.create(document.querySelector("#editor"),{
            fontFamily: {
              options: [
                  'default',
                  'Ubuntu, Arial, sans-serif',
                  'Ubuntu Mono, Courier New, Courier, monospace'
              ]
          },
          toolbar: [
              'heading', 'bulletedList', 'numberedList', 'fontFamily', 'undo', 'redo'
          ]
        })
      }
    },[editorLoaded])

   
  
    const changeHandler=(event,editör,value)=>{
      
       const mutatedValue ={...contentpart};
       mutatedValue[value] = (value == "content" ? editör.getData() : event.target.value)

       const editorImageElements = document.querySelectorAll("figure")
       editorImageElements.forEach(element => {   
       
          if(element.firstChild.getAttribute('src') == "ERROR"){
             
              element.firstChild.style.display = "none"
              element.childNodes[1].style.display = "none"
          }
          
      });
      
      if(mutatedValue[value].includes("ERROR") || mutatedValue [value].includes(`<figure class="image"><img></figure>`)) return;
        

      setcontentpart(mutatedValue);
      
    }
    //this part is for the title image for the content
    
    const filechange=(event)=>{
       setfile(event.target.files[0])
       setfilename(event.target.files[0].name);
       console.log(event.target.files[0]);
    }
    
    const submitfile=async ()=>{

      const formData=new FormData();

      formData.append("upload",file);
      console.log(formData)
      try{

         await axios.post("/upload",formData);

      }catch(err){

         return console.log("UPLOAD ERRORRRRRRR");
         
      }
      return setuploaded(true);
    }
    
    
    const Submitpost=(typeofsubmit)=>{

        if(typeofsubmit == "Published"){

          windowInformRef.current="Postun Yayinlandi !"

        }
        else{

          windowInformRef.current="Taslak Olarak kaydedildi"
          
        }

        windowTypeRef.current = "confirm"
        
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
        <Window closefunction={()=>setwindowactive(false)} active={windowactive} type={windowTypeRef.current}> {windowInformRef.current} </Window>
        <Leftside> 
              <InputHolder>
                  <FormControl  size="small" fullWidth>
                                        
                                        <Select
                                            onChange={(e)=>changeHandler(e,"","catagory")}
                                            style={{backgroundColor:"white",color:"black"}}
                                            variant="outlined"
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            inputProps={{ 'aria-label': 'Without label' }}
                                            defaultValue="default"
                                        >
                                            <MenuItem selected disabled value="default">
                                                Choose A Topic
                                            </MenuItem>
                                            <MenuItem value="Uzay">Uzay</MenuItem>
                                            <MenuItem value="Metafizik">Metafizik</MenuItem>
                                            <MenuItem value="Felsefe">Felsefe</MenuItem>
                                            <MenuItem value="Biyoloji">Biyoloji</MenuItem>          
                                        </Select>
                                       
                                    </FormControl>
              </InputHolder>
            <InputHolder><Corebutton onClick={()=>Submitpost("Published")}  style={{width:"100%",backgroundColor:"#ef233c",textTransform:"none"}} color="secondary" variant="contained">Post it !</Corebutton></InputHolder>
            <InputHolder><Corebutton onClick={()=>Submitpost("Draft")}   style={{width:"100%",backgroundColor:"#2ec4b6",textTransform:"none"}} color="secondary" variant="contained">Save it as a draft</Corebutton></InputHolder>
        </Leftside>
        <RightPart>
            <Global></Global>
            <div>
                <InputHolder>
                    <TextField  onChange={(e)=>changeHandler(e,"","title")} InputProps={{style:{color:"black"},endAdornment: <InputAdornment position="end"><Create style={{color:"black"}}></Create></InputAdornment>,}} helperText="This field is mandatory for people to have a better general idea about your post." label="Title" size="small" variant="outlined" fullWidth></TextField>
                </InputHolder>
                <InputHolder>
                    <TextField onChange={(e)=>changeHandler(e,"","subtitle")} InputProps={{style:{color:"black"},endAdornment: <InputAdornment position="end"><Create style={{color:"black"}}></Create></InputAdornment>,}} helperText="Optional field" label="Sub Title" size="small" variant="outlined" fullWidth></TextField>
                </InputHolder>
                <InputHolder>
                    <Labelimage  htmlFor="file">Choose an image for title</Labelimage>
                    <Input accept="image/png, image/gif, image/jpeg"  onChange={filechange} formEncType={"multipart/form-data"} style={{display:"none"}} id="file" type="file" name="upload"></Input>
                    <Iconsecure style={{top:"50%",left:"-18px",height:"100%",lineHeight:"20px"}} className="fas fa-images"></Iconsecure>  
                </InputHolder>   
            </div>
            <Ckeholder>
              {
                  editorLoaded ? (
                      <CKE 
                        config={{ 
                              
                              extraPlugins:[uploadPlugin],
                              placeholder: "Start Typing Your ideas ...",
                              //toolbar:['heading', '|', 'bold', 'italic', 'blockQuote', 'link', 'numberedList']
                          }} 
                        onReady={()=> console.log(document.querySelector("#editor"))}
                        onChange={(event,editör)=>changeHandler(event,editör,"content")}
                        value={contentpart.content}
                        data={contentpart["content"]}
                        editor={ClassicEditor}
                       
                      />
                    ) : (
                      <div>Editor loading</div>
                    )
              }
              
          </Ckeholder>
        </RightPart>
      </Exterior>

    )
}
