import React, { useState } from 'react'
import MyContext from '../UseContext/MyContext';
const MyContextProvider = ({children}) => {

    const[myValue,setMyValue]=useState("red");
  return (
   <MyContext.Provider value={{myValue,setMyValue}}>
    {children}
   </MyContext.Provider>
  );
};

export default MyContextProvider;