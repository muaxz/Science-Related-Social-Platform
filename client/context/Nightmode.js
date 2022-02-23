import React,{createContext,useEffect,useState} from 'react'
export const CreateNightMode = createContext()

const NightmodeContext = ({children})=>{

    const [isnight,setisnight] = useState(false)

    const ChangeNight = (stateNight)=>{

      setisnight(stateNight)

      localStorage.setItem("night_mode",stateNight)

    }

    useEffect(()=>{

       var nightvalue = localStorage.getItem("night_mode")

       if(nightvalue){

          if(nightvalue == "true"){
            
             setisnight(true)

          }
           
       }else{

          localStorage.setItem("night_mode","false")

       }
        
    },[])

    return (
      <CreateNightMode.Provider value={{nightmode:isnight,setisnight:ChangeNight}}>
          {children}
      </CreateNightMode.Provider>   
    )

}

export default NightmodeContext;