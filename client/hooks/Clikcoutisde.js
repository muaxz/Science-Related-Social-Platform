import React,{useEffect,useState,useRef} from 'react'

function useClickoutside(){
    
    const ref = useRef();
    const [visible,setvisible]=useState(false);
    console.log("sa")
    const handleclick=(event)=>{  

        if(ref.current && !ref.current.contains(event.target)){
            setvisible(false);
            
            
        }  
        
    }

    useEffect(()=>{

      document.addEventListener("click",handleclick);

      return ()=>{
        document.removeEventListener("click",handleclick);
      }

    },[])

    return {
      visible,
      setvisible,
      ref
    }
}

export default  useClickoutside;


