import React,{createContext,useState,useEffect} from 'react'
import {Contextdata} from "../Api/Api";

export const createusercontext=createContext();

const Usercontext=({children})=>{

    const[logged,setlogged]=useState(false);
    const[allowaction,setallowaction]=useState(false);
    const[userdata,setuserdata]=useState({});
    const[draftid,setdraftid]=useState("");
    const[spinner,setspinner]=useState(false);
    
    useEffect(()=>{
        
        const token=localStorage.getItem("TOKEN");   
        
        if(token){

            Contextdata({
                Token:token,
                setcontextdata:setuserdata,
                setlogged:setlogged,
                setspinner:setspinner,
                setallowaction:setallowaction,
            })

        }
        else{
            setspinner(true)
        }

    },[]);

    return (
      <createusercontext.Provider
       value={{
           logged:logged,
           allowaction:allowaction,
           setlogged:setlogged,
           userdata:userdata,
           setuserdata:setuserdata,
           spinner:spinner,
           setspinner,setspinner,
           draftid:draftid,
           setdraftid,setdraftid,
       }}
      >
          {children}
      </createusercontext.Provider>
    )
}

export default Usercontext;
