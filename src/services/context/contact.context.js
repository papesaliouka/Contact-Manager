import React,{createContext} from 'react'

export const ContactContext = createContext();


export const ContactContextProvider = ({children})=>{
  return(
    <ContactContext.Provider
      value={{}}
    >
      {children}
    </ContactContext.Provider>
  );
}

