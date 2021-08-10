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
      return false;  
      
   }
   else{
      return true;
   }
   
}

export const loginreq=async({setlogged,setspinner,setuserdata,userdata,router,seterrmsg,setbackenderror,setactive})=>{

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
        setuserdata(data.Userdata);
        setspinner(true);
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

export const Producecommentreq=async ({Message,TakerId,setnumbercom,setwindow,UserId,ContentId,seterrmsg})=>{

  try{
    
    const{data}=await axios.post("/comment/produce",{contentdata:{
      Message:Message,
      UserId:UserId,
      ContentId:ContentId,
      TakerId:TakerId,
    }})
    
    if(Errorhandler({data,seterrmsg})){    
        setnumbercom(prev=>prev+1)
        return;
        //we route işlemi
    }
    else{ 
      console.log("falselan");
       return;
    }

  }catch(err){
      seterrmsg(true)
      console.log("burada")
  }

}

export const Homereq=async({currentdata,setspinner,seterrmsg,setwindow,setcontentdata,order,setstopreq})=>{
  try {

    const{data}=await axios.get(`content/gethome/${order}`)
  
    if(Errorhandler({data,seterrmsg,setwindow})){

      if(data.data.length == 0){
        setstopreq(false)
      }

      const Current=[...currentdata];
      const Mydata=[...data.data];
      //push metodu bir diziyi bir dizinin içine pushluyor fakat concat elemanları
      setcontentdata(Current.concat(Mydata));
      setspinner(false);
    }    
    else{
      return;
    }
  
  } catch (error) {
       seterrmsg(true);
  }
}


export const Createrelationreq=async({UserId,PostId,attribute,seterrmsg,setwindow,relationtype,UserIdofcontent})=>{

  try {

    const{data}=await axios.post(`content/createrelation`,{
      UserId:UserId,
      PostId:PostId,
      attribute:attribute,
      relationtype:relationtype,
      UserIdofcontent:UserIdofcontent,
    })

    if(Errorhandler({data,seterrmsg,setwindow}))
    return;
    else
    return;
    
  
  } catch (error) {
       console.log("relation error")
       //seterrmsg(true);
  }

}


export const Contentreq=async({contentId,setcontent,seterrmsg,setwindow})=>{

  try {

    const{data}=await axios.get(`content/${contentId}`);
    
    if(Errorhandler({data,seterrmsg,setwindow})){ 
      console.log(data.data);
       setcontent(data.data);

       

    }    
    else if(data == "Unauthroized"){
       //
    }
    else{
      return;
    }
  
  } catch (error){

       seterrmsg(true);
       
  }

}

export const Commentreq=async({contentId,setactiveproduce,setcomment,seterrmsg,setwindow})=>{

  try {

    const{data}=await axios.get(`comment/${contentId}`);
    
    if(Errorhandler({data,seterrmsg,setwindow})){ 
       console.log(data.data)
       setcomment(data.data);
       setactiveproduce(false);
    }   

    else if(data == "Unauthroized"){
       //
    }
    else{
      return;
    }
  
  } catch (error){

       seterrmsg(true);
       
  }

}

export const Contextdata=async ({Token,setspinner,setcontextdata,seterrmsg,setwindow,setlogged})=>{
 
  try {

    const {data}=await axios.get(`/user/getuserdata`,{
      headers:{
        "authorization":`Bearer ${Token}`,
      }
    });
  
    if(Errorhandler({data,seterrmsg,setwindow,setcontextdata,setlogged,setspinner})){ 

      const mydata={ 
        UserId:data.userdata.id,
        Username:data.userdata.firstname,
        Usersurname:data.userdata.lastname,
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
    console.log("errorburadaduruyor");
  }
}

export const Getusercontent=async({UserId,params,setdata,setwindow,seterrmsg,order,setstopscrolling,currentdata})=>{
  
  try {

    const{data}=await axios.get(`content/usercontent/${params}/${UserId}/${order}`);
     console.log(data.data)
    if(Errorhandler({data})){ 
       
       if(data.data.length == 0){
          setstopscrolling(true);
       } 
        
       
       const Current=[...currentdata];
       const Mydata=[...data.data];
      //push metodu bir diziyi bi  r dizinin içine pushluyor fakat concat elemanları
       setdata(Current.concat(Mydata));
       
    }    
    else if(data == "Unauthroized"){
       //
    }
    else{
      return;
    }
  
  } catch (error){

       console.log(error);
       
  }

}

export const UpdateNotificationcount=async()=>{

   try {
      await axios.get("/notification/update");

   } catch (error) {
      //
   }

}

export const Getuserprofilecontent=async({setdata,catogery,UserId})=>{

  try {
    const{data}=await axios.get(`content/profilecontent/${catogery}/${UserId}`);

    if(Errorhandler({data})){ 

       setdata(data.data)

    }    
    else if(data == "Unauthroized"){
       //
    }
    else{
      return;
    }
  
  } catch (error){

       console.log(error);
       
  }
}

export const Getuserprofile=async({UserId,setuserdata})=>{

  try {

    const{data}=await axios.get(`user/getuserprofile/${UserId}`);

    console.log(data)
    
    if(Errorhandler({data})){ 

       setuserdata(data.userdata)

    }    
    else if(data == "Unauthroized"){
       //
    }
    else{

      return;

    }
  
  } catch (error){

       console.log(error);
       
  }
  
}

export const Createuserrelation=async({UserId,FollowedId,checkiffollow})=>{

  try {

    const{data}=await axios.post(`user/createuserrelation`,{
      FollowerId:UserId,
      FollowedId:FollowedId,
      checkiffollow:checkiffollow,
    })

    if(Errorhandler({data,seterrmsg,setwindow}))
    return;
    else
    return;

  } catch (error) {
       console.log("relation error")
       //seterrmsg(true);
  }

}

export const Notificationreq=async({UserId,setnavdata,order,navdata})=>{

  try {
    console.log(UserId);

    const{data}=await axios.get(`notification/getrows/${UserId}/${order}`);
    console.log(data.mydata);
    const Mycurrentdata=[...navdata];
    const Newdata=data.mydata;
    setnavdata(Mycurrentdata.concat(Newdata));
    
    

  

  } catch (error) {
       console.log("relation error")
       //seterrmsg(true);
  }

}

export const NotificationCountreq=async({UserId,setcountdata})=>{

  try {
    console.log(UserId);

    const{data}=await axios.get(`notification/getcount/${UserId}`);

    setcountdata(data.data);
 
    console.log(data.mydata);

  } catch (error) {
       console.log("relation error")
       //seterrmsg(true);
  }

}