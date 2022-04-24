import React,{createContext,useEffect,useState} from 'react'

export const CreateUtilContext = createContext()

const NightmodeContext = ({children})=>{
    const [savedWindow,setSavedWindow] = useState(false)
    const [savedWindowText,setSavedWindowText] = useState("")

    useEffect(()=>{
        setTimeout(() => {
            setSavedWindow(false)
        }, 4000);
    },[savedWindow])
    
    return (
      <CreateUtilContext.Provider value={{savedWindow:savedWindow,setSavedWindow:setSavedWindow,savedWindowText:savedWindowText,setSavedWindowText:setSavedWindowText}}>
          {children}
      </CreateUtilContext.Provider>   
    )

}

export default NightmodeContext;