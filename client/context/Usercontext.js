import React,{createContext,useState,useEffect} from 'react'
import {Contextdata} from "../Api/requests";
import router from "next/router"

export const createusercontext=createContext();

const Usercontext=({children})=>{

    const[logged,setlogged]=useState(false);
    const[allowaction,setallowaction]=useState(false);
    const[userdata,setuserdata]=useState({});
    const[draftid,setdraftid]=useState("");
    const[spinner,setspinner]=useState(false);
    
    useEffect(()=>{

        Contextdata({
            setuserdata:setuserdata,
            setlogged:setlogged,
            setspinner:setspinner,
            setallowaction:setallowaction,
            router:router
        })

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
