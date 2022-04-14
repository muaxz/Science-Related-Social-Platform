import React,{createContext,useEffect,useState} from 'react'

export const CreateUtilContext = createContext()

const NightmodeContext = ({children})=>{
    const [savedWindow,setSavedWindow] = useState(false)
    return (
      <CreateUtilContext.Provider value={{savedWindow:savedWindow,setSavedWindow:setSavedWindow}}>
          {children}
      </CreateUtilContext.Provider>   
    )

}

export default NightmodeContext;