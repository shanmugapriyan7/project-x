import React, { useState } from 'react'
import '../Project/Job.css'
import log from '../Images/logo.png'
import img4 from '../Images/edit.png'
import img5 from '../Images/envelope.png'
import img6 from '../Images/jdp.png'
import img7 from '../Images/question.png'
import img8 from '../Images/settings.png'
import img9 from '../Images/log-out.png'
import img14 from '../Images/y2.jpg'
import img15 from '../Images/slider21.png'
import img16 from '../Images/slider2.png'
import imgy0 from '../Images/y0.jpg'
import imgy1 from '../Images/y1.jpg'
import imgy2 from '../Images/y2.jpg'
import imgy3 from '../Images/y3.jpg'
import imgy4 from '../Images/y4.jpg'
import imgy5 from '../Images/y5.jpg'
import imgy6 from '../Images/y6.jpg'
import imgy7 from '../Images/y7.jpg'
import imgy8 from '../Images/y8.jpg'
import imgy9 from '../Images/y9.jpg'
import imgy10 from '../Images/y10.jpg'
import imgy11 from '../Images/y11.jpg'
import imgy12 from '../Images/y12.jpg'
import { useNavigate } from 'react-router-dom'
const Jobcard7 = () => {
  
  const navigate1=useNavigate()
  const handleClick1=()=>{
    navigate1("/JobDescription1")
  }

  const navigate2=useNavigate()
  const handleClick2=()=>{
    navigate2("/JobDescription2")
  }

  const navigate3=useNavigate()
  const handleClick3=()=>{
    navigate3("/JobDescription3")
  }

  const navigate4=useNavigate()
  const handleClick4=()=>{
    navigate4("/JobDescription4")
  }

  const navigate5=useNavigate()
  const handleClick5=()=>{
    navigate5("/JobDescription5")
  }

  const navigate6=useNavigate()
  const handleClick6=()=>{
    navigate6("/JobDescription6")
  }

  const navigate7=useNavigate()
  const handleClick7=()=>{
    navigate7("/JobDescription7")
  }

  const navigate8=useNavigate()
  const handleClick8=()=>{
    navigate8("/JobDescription8")
  }

  const navigate9=useNavigate()
  const handleClick9=()=>{
    navigate9("/JobDescription9")
  }
  const navigate10=useNavigate()
  const handleClick10=()=>{
    navigate10("/JobDescription10")
  }
  const navigateh=useNavigate()
  const handleClickH=()=>{
    navigateh("/Home")
  }
  const navigatel=useNavigate()
  const handleClickl=()=>{
    navigatel("/Home")
  }

  return (
    <div>
         <div class="grid-item" onClick={handleClick7}> <img src={imgy9} ></img>
        <div className='gi'>
        <span >♕ </span>
        <span  >⚡ </span>
        <span  >💾 </span></div>
       <br></br><br></br>
        <span className='ct1'>Product Sales Specialist</span><br></br>
        <span className='ct2'>by Employer 
in Design, Development</span><br></br><br></br>
<button className='cbt1'>Part time</button><button className='cbt2'>Chennai</button><button className='cbt3'>10lpa</button><br></br>
<span className='deadline'>Deadline date: May 18, 2026</span></div> 

    </div>
  )
}

export default Jobcard7