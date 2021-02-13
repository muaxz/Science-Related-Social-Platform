import React,{createContext,useState} from 'react'

export const createusercontext=createContext();

const Usercontext=({children})=>{
    const[logged,setlogged]=useState(false);
    const[userdata,setuserdata]=useState(null);
    return (
      <createusercontext.Provider
       value={{
           logged:logged,
           setlogged:setlogged,
           userdata:userdata,
           setuserdata:setuserdata,
       }}
      >
          {children}
      </createusercontext.Provider>
    )
}

export default Usercontext;
