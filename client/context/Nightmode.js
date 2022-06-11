import React,{createContext,useEffect,useState} from 'react'

export const CreateNightMode = createContext()

const NightmodeContext = ({children})=>{

    const [isNight,setisNight] = useState(false)

    const ChangeNight = (stateNight)=>{

      setisNight(stateNight)

      localStorage.setItem("night_mode",stateNight)

    }

    useEffect(()=>{

       var nightvalue = localStorage.getItem("night_mode")

       if(nightvalue){

          if(nightvalue == "true"){
            
             setisNight(true)

          }
           
       }else{

          localStorage.setItem("night_mode","false")

       }
        
    },[])

    return (
      <CreateNightMode.Provider value={{nightmode:isNight,setIsNight:ChangeNight}}>
          {children}
      </CreateNightMode.Provider>   
    )

}

export default NightmodeContext;