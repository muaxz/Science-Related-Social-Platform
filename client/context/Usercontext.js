import React,{createContext,useState,useEffect} from 'react'
import {Contextdata} from "../Api/Api";

export const createusercontext=createContext();

const Usercontext=({children})=>{

    const[logged,setlogged]=useState(false);
    const[userdata,setuserdata]=useState({});
    const[spinner,setspinner]=useState(false);
    
    useEffect(()=>{
        
        const token=localStorage.getItem("TOKEN");   
        
        Contextdata({
            Token:token,
            setcontextdata:setuserdata,
            setlogged:setlogged,
            setspinner:setspinner,
        })

    },[]);

    return (
      <createusercontext.Provider
       value={{
           logged:logged,
           setlogged:setlogged,
           userdata:userdata,
           setuserdata:setuserdata,
           spinner:spinner,
           setspinner,setspinner
       }}
      >
          {children}
      </createusercontext.Provider>
    )
}

export default Usercontext;
