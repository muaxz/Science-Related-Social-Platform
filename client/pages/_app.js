import React from 'react'
import Context from "../context/Usercontext";

const Myapp=({Component})=>{
    return (
        <Context>
            <Component/>
        </Context>
   )
}

export default Myapp;
