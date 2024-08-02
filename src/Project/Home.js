import React, {useContext, useEffect, useState } from 'react';
import '../Project/Home.css'
import i1 from '../Images/Iconb.png'
import i2 from '../Images/iconh.png'
import i3 from '../Images/icona.png'
import i4 from '../Images/iconc.png'
import i5 from '../Images/icone.png'
import i6 from '../Images/iconi.png'
import i7 from '../Images/iconhr.png'
import i8 from '../Images/icons.png'
import i9 from '../Images/iconw.png'
import i10 from '../Images/icong.png'
import i11 from '../Images/res.jpg'
import i12 from '../Images/prep.jpg'
import i13 from '../Images/men.jpg'
import i14 from '../Images/edu.jpg'
import log from '../Images/JS.png'
import img1 from '../Images/1.webp'
import img2 from '../Images/2.webp'
import img3 from '../Images/3.webp'
import img4 from '../Images/edit.png'
import img5 from '../Images/envelope.png'
import img6 from '../Images/man.png'
import img7 from '../Images/question.png'
import img8 from '../Images/settings.png'
import img9 from '../Images/log-out.png'
import img10 from '../Images/12.webp'
import img11 from '../Images/13.webp'
import img12 from '../Images/14.webp'
import img13 from '../Images/15.webp'
import Header from '../Project/Header'
import SlidingCard1 from '../SlidingCard1/SlidingCard1'
import { Navigate, useNavigate } from 'react-router-dom'
import Footer from './Footer';
const Home= () => {


  

  const [myIndex, setMyIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMyIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  const showSlide = (index) => {
    const slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[index].style.display = "block";
  };

  useEffect(() => {
    showSlide(myIndex);
  }, [myIndex]);


    const [isMenuActive, setMenuActive] = useState(false);
  
    const menuToggle = () => {
      setMenuActive(!isMenuActive);
    };

const navigateH=useNavigate();
    const ToJob=()=>{
     navigateH("/Job1")
  }
const navigateA=useNavigate();
    const ToAbout=()=>{
     navigateA("/About")
  }
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  
  return ( 
  <div className='bodh'>
    
   <div className='header1'   onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}> 
      <br></br>
      <ul className='nav1' >
        <li><img src={log} width={300} height={50}></img></li>

<li><button className='na' onClick={ToJob}>JOB</button>

    </li>
<li><button className='na' >RESUME</button>
</li>
<li><button className='na' >PREP</button></li>
<li><button className='na' onClick={ToAbout}>ABOUT</button></li>
<li><button className='na' >LEARN</button></li>
<li> <div className="action">
      <div className="profile" onClick={menuToggle}>
        <img src={img6} alt="Profile Avatar" />
      </div>
      <div className={`menu ${isMenuActive ? 'active' : ''}`}>
        <h3>
          Shanmugapriyan<br/>
          <span>shanmugapriyan@gmail.comzz</span>
        </h3>
        <ul>
          <li>
            <img src={img6} alt="User Icon" />
            <a href="/profile">My profile</a>
          </li>
          <li>
            <img src={img4} alt="Edit Icon" />
            <a href="/User">User DashBoard</a>
          </li>
          <li>
            <img src={img5} alt="Envelope Icon" />
            <a href="#">Inbox</a>
          </li>
          <li>
            <img src={img8} alt="Settings Icon" />
            <a href="#">Setting</a>
          </li>
          <li>
            <img src={img7} alt="Question Icon" />
            <a href="#">Help</a>
          </li>
          <li>
            <img src={img9}alt="Logout Icon" />
            <a href="/">Logout</a>
          </li>
        </ul>
      </div>
      </div></li>

</ul>

   

    </div>
    
    <div className='search'>
      <br></br><br></br><br></br><br></br><br></br><br></br>
    <ul className='si'>
    <li className='ad'>Over 5,00,000+ <br></br>jobs to explore</li>
      <li><input placeholder='Search by job name' className='searchinput'></input></li>
      <li><input placeholder='location' className='searchinput'></input></li>
      <li><input placeholder='Experience' className='searchinput'>
</input></li>
<li><button className='sb'>Search</button></li>
</ul>

    </div>
    <br></br><br></br><br></br><br></br><br></br><br></br>
    <div className='filter'>
      <br></br><br></br>
      <center><h1 style={{color:'purple'}}>"Unlock Your Career Potential: Where Opportunities Meet Aspirations"</h1></center>
      <br></br><br></br>
      <div className='gridc'>
      <div className='c1'> <img className='gri' src={i11} alt=''></img>
    <p className='gridf'>Build your resume</p></div>
     
      <div className='c1'><img className='gri' src={i12} alt=''></img><p className='gridf'>PREPARATION</p></div>
    <div className='c1'><img className='gri' src={i13} alt='' ></img><p className='gridf'> NETWORK</p></div>
    <div className='c1'><img className='gri' src={i14} alt='' ></img><p className='gridf'>LEARN</p></div>
    </div>
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    <div className='slide'>


 

        <img className="mySlides" src={img1} style={{ width: '1800', height: 400 }} alt="" />
        <img className="mySlides" src={img2} style={{ width: '1800',  height: 400}} alt="" />
        <img className="mySlides" src={img3} style={{ width: '1800', height: 400 }} alt="" />
     
      

    </div>
<br></br>
    <center>
<h1 className='pc'>Popular Categories</h1></center>
<br></br>
<div className='category'>
  <div><button className='catb'><img src={i1} className='cicon' alt=''></img>Banking</button></div>
  <div><button className='catb'><img src={i2} className='cicon' alt=''></img>Work From Home</button></div>
  <div><button className='catb'><img src={i7} className='cicon' alt=''></img>HR</button></div>
  <div><button className='catb'><img src={i6} className='cicon' alt=''></img>IT</button></div>
  <div><button className='catb'><img src={i4} className='cicon' alt=''></img>Customer Support</button></div>
  <div><button className='catb'><img src={i10} className='cicon' alt=''></img>Graphic Design</button></div>
  <div><button className='catb'><img src={i9} className='cicon' alt=''></img>Web Development</button></div>
  <div><button className='catb'><img src={i8} className='cicon' alt=''></img>Digital Margetting</button></div>
  <div><button className='catb'><img src={i5} className='cicon' alt=''></img>Event Management</button></div>
  <div><button className='catb'><img src={i3} className='cicon' alt=''></img>Accounting</button></div>
</div>
<br></br><br></br><br></br><br></br><br></br><br></br>

    <div >
<SlidingCard1/>

    </div>
    
    </div>
    
    <div className='warning'>
      <br></br>
    <center><b>❌Beware of Scammers </b>We don't charge money for job offers  </center>
    </div>
   <br></br>
    <Footer/>
    </div>
  )
}

export default Home