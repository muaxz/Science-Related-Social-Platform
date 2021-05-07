import axios from "axios";

axios.defaults.baseURL="http://localhost:3001";



const Errorhandler=({data,seterrmsg,setwindow,setcontextdata,setlogged,setspinner})=>{

   if(data && data.error){
      seterrmsg(true)
      setwindow(true);
      return false;
   }
   else if(data == "Unauthorized"){
      setcontextdata({});
      setlogged(false);
      setspinner(true);
      localStorage.removeItem("TOKEN");
     
   }
   else{
      return true;
   }
   
}

export const loginreq=async({setlogged,setuserdata,userdata,router,seterrmsg,setbackenderror,setactive})=>{

    try{

      const{data}=await axios.post("/login",{userdata:userdata})
      console.log(data);
      if(data.wrong == "WP"){

        setbackenderror("WP")
        setactive(true);

      }
      else if(data.wrong == "WE"){

        setbackenderror("WE")
        setactive(true);

      }
      else{
        setlogged(true);
        setuserdata(data.Userdata)
        localStorage.setItem("TOKEN",data.token);//http cookie only ile store edicez
        router.push("/");
      }

    }catch(err){
        seterrmsg(true)
    }
    
}


export const resigterreq=async({setbackenderror,userdata,setactive,seterrmsg})=>{
    console.log("")
  try{
    const{data}=await axios.post("/register",{userdata:userdata})
    
    if(data.exist){
        setbackenderror("EXİST")
        setactive(true)
    }
    else{
        console.log("Başarılı kayıt")
    }
  }catch(err){
      seterrmsg(true)
      console.log("sorun var");
  }
}

export const producereq=async({contentdata,seterrmsg,setwindow,router})=>{
  try{
    
    const{data}=await axios.post("/content/produce",{contentdata:contentdata})
    
    if(Errorhandler({data,setwindow,seterrmsg})){
        setwindow(true);
        router.push("/profile/content")
        //we route işlemi
    }
    else{ 
       return;
    }

  }catch(err){
      seterrmsg(true)
      console.log("burada")
  }
}

export const Homereq=async({currentdata,seterrmsg,setwindow,setcontentdata,order})=>{
  try {

    const{data}=await axios.get(`content/gethome/${order}`)
    console.log(data.data);

    if(Errorhandler({data,seterrmsg,setwindow})){

      const Current=[...currentdata];
      const Mydata=[...data.data];
      //push metodu bir diziyi bir dizinin içine pushluyor fakat concat elemanları
      setcontentdata(Current.concat(Mydata));
    }    
    else{
      return;
    }
  
  } catch (error) {
       seterrmsg(true);
  }
}


export const Createrelationreq=async(UserId,PostId,attribute,seterrmsg,setwindow)=>{

  try {

    const{data}=await axios.post(`content/createrelation`,{
      UserId:UserId,
      PostId:PostId,
      attribute:attribute
    })

    if(Errorhandler({data,seterrmsg,setwindow})){ 
        //...
    }    
    else{
      return;
    }
  
  } catch (error) {
       seterrmsg(true);
  }

}

export const Contentreq=async({contentId,setcontent,seterrmsg,setwindow})=>{

  try {

    const{data}=await axios.get(`content/${contentId}`);
    
    if(Errorhandler({data,seterrmsg,setwindow})){ 

       setcontent(data.data)
       console.log("buradaaaaaaaa");

    }    
    else if(data == "Unauthroized"){
       //
    }
    else{
      return;
    }
  
  } catch (error) {
       seterrmsg(true);
  }

}

export const Contextdata=async ({Token,setspinner,setcontextdata,seterrmsg,setwindow,setlogged})=>{

  try {

    const {data}=await axios.get(`user/getuserdata`,{
      headers:{
        "authorization":`Bearer ${Token}`,
      }
    });

    if(Errorhandler({data,seterrmsg,setwindow,setcontextdata,setlogged,setspinner})){ 
   
      const mydata={
        Username:data.userdata.firstname,
        Usersurname:data.userdata.usersurname,
        Userrole:data.userdata.role,
        Userimage:data.userdata.imageurl,
     }
  
      setcontextdata(mydata);
      setspinner(true);
      setlogged(true);
      
    }   
    else{
        return;
    }
 

  } catch (err) {
      console.log(err);
  }
}