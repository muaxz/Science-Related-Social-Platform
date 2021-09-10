import React,{useEffect,useState} from 'react'

export default function useScroll(){

    const [bottom,setbottom]=useState(false)

    useEffect(()=>{
    
        //
        document.addEventListener("scroll",(e)=>{
           
            if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {  
                setbottom(true);
                
            }
            else{
                setbottom(false);
               
            }
        })
    
       return ()=> document.removeEventListener("scroll",()=>{
                     window.scrollTo({top:0,behavior:"auto"})
                   })

    },[])

    return {
      bottom:bottom
    }
}
