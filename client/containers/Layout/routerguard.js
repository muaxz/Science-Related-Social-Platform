import React, {useContext, useEffect, useState } from 'react'
import {useRouter} from "next/router"
import {createusercontext} from "../../context/Usercontext"

export default function Routerguard({children}){
    //homepage

    const myrouter = useRouter();
    const [controller,setcontroller]=useState(false);
    const {userdata,logged,spinner} = useContext(createusercontext);

    
    console.log(logged);

   
        
       if(spinner){

            if(myrouter.pathname == "/[userıd]/liked" || myrouter.pathname == "/[userıd]/saved"){
                
                if(myrouter.query.userıd == userdata.UserId){
                    
                    setcontroller(true);
        
                }
                else{
                   
                    myrouter.push("/404");
                }
              
            }
            if(myrouter.pathname == "/login"){
                console.log(logged)
                if(userdata.UserId){
                    
                    myrouter.push("/");

                }
                else{

                    setcontroller(true);

                }
                   
            }
            if(myrouter.pathname == "/profile/[username]/editprofile"){

                if(myrouter.query.username == userdata.UserId){
                    
                    setcontroller(true);
        
                }
                else{
                   
                    myrouter.push("/404");
                }

            }
            if(myrouter.pathname == "/Drafts/[userid]"){

                if(myrouter.query.userid == userdata.UserId){
                    
                    setcontroller(true);
        
                }
                else{
                   
                    myrouter.push("/404");
                }

            }
            
      }

 


    return (
        <React.Fragment>
             {controller ? children : null}
        </React.Fragment>
    )
}
