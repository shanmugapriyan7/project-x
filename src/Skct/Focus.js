import React, { useEffect,useRef } from 'react'

const Focus = () => {
    
    const inputRef=useRef();
    useEffect(()=>{
        inputRef.current.focus();
    },[]);


  return (
    <div>
        <input ref={inputRef} type='password'></input>
    </div>
  )
}

export default Focus