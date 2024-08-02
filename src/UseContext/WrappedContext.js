import React  from 'react'
import MyContextProvider from '../UseContext/MyContextProvider'
import ComponentA from '../UseContext/ComponentA'
const WrappedContext = () => {
  return (
    <MyContextProvider>
        <ComponentA/>
    </MyContextProvider>
  )
}

export default WrappedContext