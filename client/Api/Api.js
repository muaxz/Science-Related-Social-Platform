import axios from "axios";

axios.defaults.baseURL="http://localhost:3001";

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

export const producereq=async({contentdata,seterrmsg,router})=>{

  try{
    const{data}=await axios.post("/post/produce",{contentdata:contentdata})
    
    if(data.state == "success"){
        setbackenderror("EXİST")
        setactive(true)
    }
    else{ 
        seterrmsg(true);
    }
  }catch(err){
      seterrmsg(true)
  }
}
