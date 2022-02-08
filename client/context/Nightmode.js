import React,{createContext,useEffect,useState} from 'react'
export const CreateNightMode = createContext()

const NightmodeContext = ({children})=>{
    const [isnight,setisnight] = useState(false)
    useEffect(()=>{

       var nightvalue = localStorage.getItem("night_mode")
       
       if(nightvalue && nightvalue == "true"){
            setisnight(true)
       }else{
            localStorage.setItem("night_mode",isnight)
       }
        
    },[isnight])
    
    return (
      <CreateNightMode.Provider value={{nightmode:isnight,setisnight:setisnight}}>
          {children}
      </CreateNightMode.Provider>   
    )

}

export default NightmodeContext;