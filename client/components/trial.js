import React,{useEffect,useState,useContext,useReducer} from 'react'
import {createusercontext} from "../context/Usercontext";

export default function Trial() {
    const {setlogged,logged}=useContext(createusercontext);
    console.log("Trial Rendered");
    return (
        <div>
            <div>
                <button onClick={()=>setlogged("changed")}>change logged</button>
                <h2>{logged}</h2>
            </div>
         
        </div>
    )
}
