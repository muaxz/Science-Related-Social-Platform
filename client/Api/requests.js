import axios from "axios";
import router from "next/router"


axios.defaults.baseURL="http://localhost:3001";

axios.defaults.withCredentials = true;

axios.interceptors.response.use(function (response) {
  //dont forget to use that checking

  if(typeof window !== "undefined"){

    if(response.headers["csrf-token"] && response.config.method == "post"){
      //only post methods can set the token again 
       localStorage.setItem("csrf-token", response.headers["csrf-token"]) 

    }else if(!localStorage.getItem("csrf-token") && response.config.method == "get" && response.headers["csrf-token"]){
       //setting token once 
       localStorage.setItem("csrf-token", response.headers["csrf-token"]) 

    }

  }
  
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});


axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  if(typeof window !== "undefined"){

    if(localStorage.getItem("csrf-token")){

      config.headers.common["csrf-token"] = localStorage.getItem("csrf-token")
      
    }

  }

  return config;
  
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});






export const Errorhandler=({data,seterrmsg,setwindow,setuserdata,setlogged,setspinner})=>{

   if(data && data.error){

      if(data.state == 404){

          router.push("/404")

      }else if(data.state == 500){

          router.push("/500")

      }else if(data.state == 401){
    
        setuserdata({});
        setlogged(false);
        setspinner(true);
        return false;

      }

      return false;

   }
  
   return true;
}

const RefreshReq = async () =>{
  return await axios.get("/refresh",{},{withCredentials:true})
}

export const loginreq=async({setlogged,setspinner,setuserdata,userdata,router,seterrmsg,setBackendState,setactive})=>{
    

    try{
      
      const {data} =await axios.post("/login",{userdata:userdata})
  
      
      if(data.wrong == "WP"){

        setBackendState("WP")
        setactive(true);

      }
      else if(data.wrong == "WE"){

        setBackendState("WE")
        setactive(true);

      }
      else{
  
        setlogged(true);
        setuserdata(data.Userdata);
        setspinner(true);
        router.push("/");
      }

    }catch(err){
      router.push("/500")
    }
    
}

export const resetPassword = async({token,password,setBackendState,setWindowActive})=>{

  try {

   const {data}  = await axios.post("/resetPassword",{token,password})

   if(data.state == "success"){
      setBackendState("PASSWORD_SAVED")
      setWindowActive(true)
   }


  } catch (error) {

    router.push("/500")

  }

}

export const sendResetEmail = async({email,setBackendState,sendWindowActive})=>{

  try {

   const {data}  = await axios.post("/sendResetEmail",{email:email})

   if(data.state == "success"){
      
      setBackendState("CODESENT")
      sendWindowActive(true)
   }
   console.log(data)

  } catch (error) {

    router.push("/500")

  }

}

export const logout = async({setlogged,setuserdata,router,setspinner})=>{
  
  try {

      const response = await axios.get("/logout")
      localStorage.removeItem("csrf-token")
      setlogged(false)
      setuserdata({})
      router.push("/")

      
  } catch (error) {

    router.push("/500")

  }


}

export const resigterreq=async({setBackendState,userdata,setactive,seterrmsg,setActionType})=>{
   
  try{

    const{data}=await axios.post("/register",{userdata:userdata})
    
    if(data.warning == "exist"){
        setBackendState("EXİST")
        setactive(true)
    }
    else{
       setActionType("Login")
       setBackendState("REGISTERED")
       setactive(true)
    }

  }catch(err){
      seterrmsg(true)
      router.push("/500")
  }
}
//Content produce
export const producereq=async({contentdata,seterrmsg,setwindow,typeofsubmit,draftContentId,currentUserId})=>{

  try{
    
    const{data}=await axios.post("/content/produce",{...contentdata,processtype:typeofsubmit,draftContentId:draftContentId})
    
    if(Errorhandler({data,setwindow,seterrmsg})){
        setwindow(true);
        setTimeout(() => {
          router.push(`/profile/${currentUserId}?name=Post`)
        },2000);
    }
    else{ 
       return;
    }

  }catch(err){
      seterrmsg(true)
      router.push("/500")
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
     
    }
    else{ 
      console.log("falselan");
       return;
    }

  }catch(err){
      seterrmsg(true)
      router.push("/500")
  }

}

export const Homereq=async({currentdata,seterrmsg,setwindow,setcontentdata,order,setstopreq,category,paignation,selectionlist,setselection})=>{
 
  try { 
    
    const {data} = await axios.get(`content/gethome/${order}/${category}`)
    
    if(true){
   
    
      if(!data.data.length){

        const selections = {...selectionlist};
        selections[category].stoprequesting = true;
        setselection(selectionlist);
        return;

      }

      if(paignation){

        setcontentdata(prev=>([...prev,...data.data]));

      }else{

        setcontentdata([])
        setcontentdata(data.data)

      }

      return
    }    
  
  } catch (error) {
    console.log("hererere")
  }
}

//between post and user
export const Createrelationreq=async({UserId,PostId,attribute,seterrmsg,setwindow,relationtype,UserIdofcontent,setSavedWindow})=>{

  try {

    const {data} =await axios.post(`content/createrelation`,{
      UserId:UserId,
      PostId:PostId,
      attribute:attribute,
      relationtype:relationtype,
      UserIdofcontent:UserIdofcontent,
    },{withCredentials:true})

    
  
    //if(Errorhandler({data,seterrmsg,setwindow}))
    //return;
    //else
    //return;
    
  
  } catch (error) {
       router.push("/500")
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
    else return
  
  } catch (error){

       router.push("/500")
       
  }

}

export const Commentreq=async({contentId,setactiveproduce,setcomment,seterrmsg,setwindow,last,order,commentlist})=>{

  try {

    const{data}=await axios.get(`comment/${contentId}/${last}/${order}/false`);
    //burada tekrardan bütün yorumlar çekiliyor eklenen en son yorum çekilmeli
    console.log(data)
 
    if(Errorhandler({data,seterrmsg,setwindow})){
      
      var Current=[...commentlist];
      var Mydata=[...data.data];
     

      if(last == "true"){
        const dataSend = Mydata.concat(Current)
        console.log(dataSend)
        setcomment(dataSend);
        
        //push metodu bir diziyi bir dizinin içine pushluyor fakat concat elemanları

      }
      else{

        setcomment(Current.concat(Mydata))
        
      }
       setactiveproduce(false);
    }   

    else if(data == "Unauthroized"){
       //
    }
    else{
      return;
    }
  
  } catch (error){

       router.push("/500");
       
  }

}

export const Contextdata=async ({setspinner,setuserdata,seterrmsg,setwindow,setlogged,setallowaction,router})=>{
 
  try {

    const {data} = await axios.get(`/user/getuserdata`,{withCredentials:true});

    
  
    if(Errorhandler({data,seterrmsg,setwindow,setuserdata,setlogged,setspinner})){ 

      const mydata={ 
        UserId:data.userdata.id,
        Username:data.userdata.firstname,
        Usersurname:data.userdata.lastname,
        Userrole:data.userdata.Role,
        Userimage:data.userdata.mainUrl,
     }
     
      setuserdata(mydata);
      setlogged(true);  
      setallowaction(true);  
      setspinner(true);  
    }   
    else{
        return;
    }
 

  } catch (err) {
    setspinner(true);
    router.push("/500")
    
  }
}

export const Getusercontent=async({UserId,params,setdata,setwindow,seterrmsg,order,setstopscrolling,currentdata})=>{
  
  try {

    const{data}=await axios.get(`content/usercontent/${params}/${UserId}/${order}`);
     console.log(data.data)
    if(Errorhandler({data})){ 
       
       if(!data.data.length){
          setstopscrolling(true);
       } 
        
       setdata([...currentdata,...data.data]);
       
    }    
    else if(data == "Unauthroized"){
       //
    }
    else{
      return;
    }
  
  } catch (error){

    router.push("/500")
       
  }

}

export const UpdateNotificationcount=async({UserId})=>{

   try {
    
      await axios.get(`/notification/update/${UserId}`);

   } catch (error) {
      router.push("/500")
   }

}

export const Getuserprofilecontent=async({contentdata,setdata,category,UserId,ownerpost,order,paignation})=>{

  try {

    const{data}= await axios.get(`user/getuserprofilecontent/${UserId}/${ownerpost}/${category}/${order}`);
    
    if(Errorhandler({data})){ 
    
       if(paignation){
          setdata([...contentdata,...data.data])
       }
      
    }    
    else if(data == "Unauthroized"){
       //
    }
    else{
      return;
    }
  
  } catch (error){

    router.push("/500")
       
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

    router.push("/500")
       
  }
  
}
//between user and user
export const Createuserrelation=async({UserId,Prevent,FollowedId,checkiffollow})=>{

  try {

    const {data} = await axios.post(`user/createuserrelation`,{
      FollowerId:UserId,
      FollowedId:FollowedId,
      checkiffollow:checkiffollow,
    },{withCredentials:true})
    
    setTimeout(() => {
      Prevent.current = true
    }, 2000);
    

  } catch (error) {
    router.push("/500")
       //seterrmsg(true);
  }

}

export const Notificationreq=async({UserId,setnavdata,order,navdata,lastrow})=>{

  try {
   
    
    const{data}=await axios.get(`notification/getrows/${UserId}/${order}/${lastrow}`);
    const Mycurrentdata=[...navdata];
    const Newdata=data.mydata;
    
    if(lastrow){
     
      setnavdata(Newdata.concat(Mycurrentdata));

    }
    else{
     
      setnavdata(Mycurrentdata.concat(Newdata));
    }
    
    
  
  } catch (error) {
    router.push("/500")
       //seterrmsg(true);
  }

}

export const NotificationCountreq=async({UserId,setcountdata})=>{

  try {
    console.log(UserId);

    const{data}=await axios.get(`notification/getcount/${UserId}`);


    setcountdata(data.data);
 
    

  } catch (error) {
    router.push("/500")
       //seterrmsg(true);
  }

}

export const Getusersforsearchbar=async({inputvalue,setusers,setactive,setnothingfound})=>{

  try {

    const{data}=await axios.get(`user/getusername/${inputvalue}`);

    console.log(data.data)
    
    if(data.data.length == 0){
       setactive("Nothing")
    }
    else{
      setactive("");
      setusers(data.data);
    }  

 
  
  } catch (error) {
     router.push("/500")
       //seterrmsg(true);
  }

}

export const DeletePost = async({PostId,seterrmsg,setwindow})=>{

  try {

    const {data} = await axios.delete(`content/deleteContent/${PostId}`,{withCredentials:true});
    
    if(Errorhandler({data,seterrmsg,setwindow})){ 
       console.log(data.success);   
    }    
    else return;
  
  } catch (error){
     
    router.push("/500")
       
  }

}

export const Commentanswerreq = async({UppercommentId,Answer,UserId,seterrmsg,setwindow,ContentId,MainparentID,setcommentlist,commentlist,actionType})=>{
  
  try {

    if(actionType == "create"){

        var data = await axios.post("comment/produceanswer",{
          CommentId:UppercommentId,
          ContentId:ContentId,
          Message:Answer,
          UserId:UserId,
        });

    }else{

        var data = await axios.post("comment/deleteComment",{
          commentId:UppercommentId
        })

        if(UppercommentId == MainparentID){
          const copyList = [...commentlist]
          const Indexofelement = copyList.findIndex((item)=>item.id == UppercommentId)
          copyList.splice(Indexofelement,1)
          setcommentlist(copyList)
          return;
        }
      
        
    }
    
    
    if(Errorhandler({data,seterrmsg,setwindow})){   
       const onlyOnecomment = await axios.get(`comment/${MainparentID}/false/10/true`)
       const copyofcommentlist = [...commentlist]
       const Indexofelement = copyofcommentlist.findIndex((item)=>item.id == MainparentID)
       copyofcommentlist.splice(Indexofelement,1,onlyOnecomment.data.data[0])
       setcommentlist(copyofcommentlist)
      
    }    
    else{
      return;
    }
  
  } catch (error){
     
    router.push("/500")
       
  }

}

export const UpdateNotificationactive = async ({FollowedId,Prevent,FollowerId,currentactive,seterrmsg,setwindow})=>{

  try {

    const{data}=await axios.get(`user/updateusernot/${FollowerId}/${FollowedId}/${currentactive}`);
    
    if(Errorhandler({data,seterrmsg,setwindow})){ 

       Prevent.current = true
       console.log(data.state);   
    }    
    else{
      return;
    }
  
  } catch (error){
     
    router.push("/500")
       
  }

}//user alert activated or not

export const UpdateProfile = async ({userdata,typeofupdate,setuploading,setsuccesfulupload,userinfo,setuserinfo})=>{
  
  try {
          
          const {data} = await axios.post(`/user/updateprofile/${typeofupdate}`,userdata,{withCredentials:true})
          
          if(!data.state){

             const copy = {...userinfo}
             if(data.EMAIL == "Exist"){
                         
               copy["email"].warning = true
               copy["email"].errormsg = "The email you entered is already available !"

             }
             else if(data.EMAIL == "Password"){

              copy["CurrentPasswordForEmail"].warning = true

             }
             else if(data.SIZE){
                console.log("big image size")
             }else 
             copy["Currentpassword"].warning = true

             setuserinfo(copy)
             
          }else{

              setsuccesfulupload("SUCCESSFUL")
              setTimeout(() => {
                setsuccesfulupload("")
              },3000);

          }

          setuploading(false)

  }catch (error) {

    router.push("/500")
  }
}

export const Editcomment = async({commentID,message,setloading,seteditcomment})=>{

      try {

        const {data} = await axios.post(`/comment/EditComment`,{commentID:commentID,message:message},{withCredentials:true})

        if(data.state == "SUCCESS"){
          setTimeout(() => {
            setloading(false)
            seteditcomment(false)
          }, 1000);
        }

      } catch (error) {
        router.push("/500")
      } 
}

export const Userprofilefollowlist = async({requestType,UserId,SetFollowList,FollowList})=>{

    try {

      const {data} = await axios.get(`/user/getuserprofilefollowlist/${requestType}/${UserId}`)
      console.log(data.data)
      if(!data.data.length){
         
      }
      SetFollowList(data.data)
      

    } catch (error){

      router.push("/500")

    }

}

export const ReportUserReq = async({checkBoxValue,message,ContentId,reportedUserId})=>{

    try {

      const {data} = await axios.post(`/user/reportUser`,{reportedContentId:ContentId,checkBoxValue:checkBoxValue,message:message,reportedUserId:reportedUserId})


    } catch (error) {
      router.push("/500")
    }

}

// MODERATOR STUFF.........................................................

export const checkTheContent= async ({contentID,publicValue,actionType})=>{

    try {
      
      const {data} = await axios.post("/content/checkContent",{contentID:contentID,publicValue:publicValue,actionType:actionType},{withCredentials:true})
      

      console.log(data)

    } catch (error) {
      router.push("/500")
    } 

} 

export const deleteTheReport= async ({reportID})=>{

  try {
    
    const {data} = await axios.post("/content/deleteReport",{reportID:reportID})

    console.log(data)

  } catch (error) {
    router.push("/500")
  }

} 

export const sendReportMessage = async ({TakerId,ContentId,reportMessage})=>{

  try {
    
    const {data} = await axios.post("/notification/sendMessage",{ContentId:ContentId,TakerId:TakerId,reportMessage:reportMessage})

    console.log(data)

  } catch (error) {
    router.push("/500")
  }
}  

export const SearchContentsForMods = async(searchValue,setContent)=>{

    try {
     
      var {data} = await axios.get(`/content/getModContents/${searchValue}/null/0`,{withCredentials:true})
   
      setContent(data.data)

    } catch (error) {
      router.push("/500")
    }

}

export const GetContentsForMods = async ({order,setContent})=>{
   
  try {

    var {data} = await axios.get(`/content/getModContents/Default/null/${order}`,{withCredentials:true})
    
    setContent(prev=>{return [...prev,...data.data]})

  } catch (error) {
    router.push("/500")
  }

}

export const handleCommentLike = async({commentId,actionType})=>{

  try {

    const resp = await axios.post("/comment/handleLike",{commentId,actionType},{withCredentials:true})

    console.log(resp.data)

  } catch (error) {
    router.push("/500")
  }

}

export const editCategory = async(data)=>{

    try {
        const newFormData = new FormData();
        newFormData.append("file",data.blob)
        newFormData.append("name",data.categoryName)
        await axios.post("/content/editCategory",newFormData)

    } catch (error) {
        router.push("/500")
    }

}


