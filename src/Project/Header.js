import React, {useContext, useEffect, useState } from 'react';

import log from '../Images/JS.png'
import img41 from '../Images/edit.png'
import img51 from '../Images/envelope.png'
import img61 from '../Images/man.png'
import img71 from '../Images/question.png'
import img81 from '../Images/settings.png'
import img91 from '../Images/log-out.png'
import '../Project/Header.css'

import { useNavigate } from 'react-router-dom'
const Header = () => {
    const [isMenuActive, setMenuActive] = useState(false);
     



    
    const menuToggle = () => {
      setMenuActive(!isMenuActive);
    };


    const navigateH=useNavigate();
    const ToHome=()=>{
     navigateH("/Home")
  }


    const navigateJ=useNavigate();
    const ToJob=()=>{
     navigateJ("/Job1")
  }
  const navigateR=useNavigate();
  const ToDashboard=()=>{
    navigateR("/User")
  }

  const navigateA=useNavigate();
  const ToAbout=()=>{
    navigateA("/About")
  }
  const navigateL=useNavigate();
  const ToIndex=()=>{
    navigateL("/");
  }
const Theme=()=>{
  window.Dark=!window.Dark;
}
  
  return (
    <div>
        <div className='Aheader1'   style={{width:'1520px'}}
           > 

      <ul className='Anav1'  style={{height:'50px',listStyle:'none',display:'grid',gridTemplateColumns:'750px 100px 100px 100px 100px 100px 100px 100px',columnGap:'30px',marginTop:'20px',
    }}>
        <li><img src={log} width={300} height={50} style={{marginTop:'-8px',marginLeft:'25px'}}></img></li>

<li><button className='Hna' style={{fontSize:'15px',fontWeight:'bolder',width:'100px',height:'30px',border:'none'}} onClick={ToHome} >HOME</button>

    </li>
<li><button className='Hna' style={{fontSize:'15px',fontWeight:'bolder',width:'100px',height:'30px',border:'none'}} onClick={ToJob}>FIND JOB</button>
</li>
<li><button className='Hna' style={{fontSize:'15px',fontWeight:'bolder',width:'100px',height:'30px',border:'none'}} onClick={ToDashboard}>DASHBOARD </button></li>
<li><button className='Hna' style={{fontSize:'15px',fontWeight:'bolder',width:'100px',height:'30px',border:'none'}} onClick={ToAbout}>ABOUT  US</button></li>
<li><button className='Hna' style={{fontSize:'15px',fontWeight:'bolder',width:'100px',height:'30px',border:'none'}} onClick={ToIndex}>LOG OUT</button></li>

<li style={{width:'50px'}}> <div className="action" style={{width:'50px',marginTop:'-10px'}} >
      <div className="profile" onClick={menuToggle}>
        <img src={img61} alt="Profile Avatar" />
      </div>
      <div className={`menu ${isMenuActive ? 'active' : ''}`}>
        <h3>
          Shanmugapriyan<br/>
          <span>shanmugapriyan@gmail.comzz</span>
        </h3>
        <ul>
          <li>
            <img src={img61} alt="User Icon" />
            <a href="#">My profile</a>
          </li>
          <li>
            <img src={img41} alt="Edit Icon" />
            <a href="#">Edit profile</a>
          </li>
          <li>
            <img src={img51} alt="Envelope Icon" />
            <span onClick={Theme}>Inbox</span>
          </li>
          <li>
            <img src={img81} alt="Settings Icon" />
            <a href="#">Setting</a>
          </li>
          <li>
            <img src={img71} alt="Question Icon" />
            <a href="#">Help</a>
          </li>
          <li>
            <img src={img91}alt="Logout Icon" />
            <a href="#">Logout</a>
          </li>
        </ul>
      </div>
      </div></li>

</ul>

   

    </div>
    </div>
  )
}

export default Header