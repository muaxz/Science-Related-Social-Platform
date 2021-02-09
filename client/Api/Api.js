import axios from "axios";

axios.defaults.baseURL="http://localhost:3001";

export const loginreq=async({setlogged,setuserdata,setwrongpass,setwrongemail,userdata,router,seterrmsg})=>{

    try{

      const{data}=await axios.post("/login",{userdata:userdata})

      if(data.wrong="WP"){

        setwrongpass(true)

      }
      else if(data.wrong="WE"){

        setwrongemail(false)

      }
      else{
        setlogged(true);
        setuserdata(data.Userdata)
        localStorage.setItem("_TOKEN",data.token);
        router.push("/");
      }

    }catch(err){
        seterrmsg(true)
    }
    
}


export const resigterreq=()=>{

}