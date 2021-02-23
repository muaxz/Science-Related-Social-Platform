import axios from "axios";

axios.defaults.baseURL="http://localhost:3001";

const Errorhandler=({data,seterrmsg,setwindow})=>{
   if(data.state == "success"){
      return true;
   }
   else{
     seterrmsg(true)
     setwindow(true);
     return false;
   }
}
export const loginreq=async({setlogged,setuserdata,userdata,router,seterrmsg,setbackenderror,setactive})=>{

    try{

      const{data}=await axios.post("/login",{userdata:userdata})
      console.log(data);
      if(data.wrong="WP"){

        setbackenderror("WP")
        setactive(true);

      }
      else if(data.wrong="WE"){

        setbackenderror("WE")
        setactive(true);

      }
      else{
        setlogged(true);
        setuserdata(data.Userdata)
        localStorage.setItem("_TOKEN",data.token);//http cookie only ile store edicez
        router.push("/");
      }

    }catch(err){
        seterrmsg(true)
    }
    
}


export const resigterreq=async({setbackenderror,userdata,setactive,seterrmsg})=>{
    
  try{
    const{data}=await axios.post("/register",{userdata:userdata})
    
    if(data.exist){
        setbackenderror("EXİST")
        setactive(true)
    }
    else{
        //kayıt olmanız başarılı
    }
  }catch(err){
      seterrmsg(true)
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
       return ;
    }
  }catch(err){
      seterrmsg(true)
      console.log("burada")
  }
}

export const Homereq=async({contentdata,seterrmsg,currentdata,setwindow,setcontentdata,order})=>{
  try {

    const{data}=await axios.get(`content/gethome/${order}`,{contentdata:contentdata})
    console.log(data.data);

    if(Errorhandler({data,seterrmsg,setwindow})){

      const Current=[...currentdata];
      const Mydata=[...data.data];
      setcontentdata(Current.concat(Mydata));
    }    
    else{
      return;
    }
  
  } catch (error) {
       seterrmsg(true);
  }
}
