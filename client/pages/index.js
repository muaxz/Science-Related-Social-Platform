import React,{useEffect,useState,useContext,useReducer,useCallback} from 'react'
import {createusercontext} from "../context/Usercontext";
import Trail from "../components/trial";



const Home=()=>{
    console.log("HOME RENDERED")
    return (
       <div>
          Main page!
       </div>
    )
}

export default Home;