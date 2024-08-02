import React, { useContext, useState } from 'react'
import MyContext from '../UseContext/MyContext';
const ComponentA = () => {
  const [color,setColor]=useState("red");
    const {myValue,setMyValue}=useContext(MyContext);
    const changevalue=()=>{
        setMyValue("new value")
    }
    const changecolor=()=>{
        setColor("green")
    }
  return (
  <div>
    <p style={{color:color}}>Value from context : </p>
   <button onClick={changevalue}>change value </button>
   <button onClick={changecolor}>change value </button>
    </div>
  )
}

export default ComponentA