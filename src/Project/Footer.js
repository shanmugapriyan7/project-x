import React from 'react'
import '../Project/Footer.css'
import log from '../Images/JS.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <div className='Bjfooter'>
      <br></br> <br></br> <br></br>
      <div style={{height:'fitcontent',width:'1519px' ,display:'grid',gridTemplateColumns:'400px 2px 200px 2px 400px  400px',columnGap:'20px'}} >
    
<div style={{marginLeft:'30px'}}>
<img src={log} width={300} height={50} style={{marginTop:'-8px',marginLeft:'25px'}}/><br></br><br></br>
<span style={{fontSize:'20px',color:'white',fontWeight:'bold',marginLeft:'30px'}}>Call us</span><br></br>
<span style={{fontSize:'20px',color:'white',fontWeight:'bold',marginLeft:'30px'}}>123 456 7890</span><br></br><br></br>
<span style={{fontSize:'20px',color:'white',fontWeight:'bold',marginLeft:'30px'}}>099 xyz Street,qwerty,</span><br></br>
<span style={{fontSize:'20px',color:'white',fontWeight:'bold',marginLeft:'30px'}}>India,Pincode: 987 6543</span><br></br><br></br>
<span style={{fontSize:'20px',color:'white',fontWeight:'bold',marginLeft:'30px'}}>jobspark7@gmail.com</span>

</div>
<div style={{backgroundColor:'white'}}></div>


<div >
  <span style={{fontSize:'20px',color:'white',fontWeight:'bold'}}>Find Jobs</span><br></br><br></br>
  <span style={{fontSize:'17px',color:'white',fontWeight:'bold'}}>Browse Jobs</span><br></br><br></br>
  <span style={{fontSize:'17px',color:'white',fontWeight:'bold'}}>Browse Candidates</span><br></br><br></br>
  <span style={{fontSize:'17px',color:'white',fontWeight:'bold'}}>Candidate Dashboard</span><br></br><br></br>
  <span style={{fontSize:'17px',color:'white',fontWeight:'bold'}}>Job Alerts</span><br></br><br></br>
  <span style={{fontSize:'17px',color:'white',fontWeight:'bold'}}>My Bookmarks</span><br></br><br></br>
</div>

<div style={{backgroundColor:'white'}}></div>


<div >
<span style={{fontSize:'20px',color:'white',fontWeight:'bold'}}>Frequently Asked Questions</span><br></br><br></br>
<div style={{display:'grid',gridTemplateColumns:'200px 200px'}}>
<div >
  <span style={{fontSize:'17px',color:'white',fontWeight:'bold'}}>Site map</span><br></br><br></br>
  <span style={{fontSize:'17px',color:'white',fontWeight:'bold'}}>Terms of use</span><br></br><br></br>
  <span style={{fontSize:'17px',color:'white',fontWeight:'bold'}}>Privacy Center</span><br></br><br></br>
  <span style={{fontSize:'17px',color:'white',fontWeight:'bold'}}>Security Center</span><br></br><br></br>
  <span style={{fontSize:'17px',color:'white',fontWeight:'bold'}}>Accesibility Center</span><br></br><br></br>
</div>


<div >
<span style={{fontSize:'17px',color:'white',fontWeight:'bold'}}>Contact Us</span><br></br><br></br>
  <span style={{fontSize:'17px',color:'white',fontWeight:'bold'}}>About us</span><br></br><br></br>
  <span style={{fontSize:'17px',color:'white',fontWeight:'bold'}}>Terms</span><br></br><br></br>
  <span style={{fontSize:'17px',color:'white',fontWeight:'bold'}}>Packages</span><br></br><br></br>
  <span style={{fontSize:'17px',color:'white',fontWeight:'bold'}}></span><br></br><br></br>
</div>

</div>

</div>
<div >
<span style={{fontSize:'20px',color:'white',fontWeight:'bold'}}>Join Us On</span><br></br><br></br><br></br>
<span style={{fontSize:'17px',color:'white',fontWeight:'bold'}}>We don't send spam so don't worry</span><br></br><br></br>
<div style={{height:'50px',width:'350px',backgroundColor:'white',borderRadius:'10px',display:'grid',gridTemplateColumns:'300px 40px'}}>
  <div>
  <input style={{height:'50px',width:'280px',border:'none',borderRadius:'10px',marginLeft:'20px'}} placeholder='Email...'></input> 
  </div> 
  <div > <FontAwesomeIcon icon={faEnvelope}color="gold" style={{fontSize:'40px'}} />
</div>
</div>

</div>

      </div>
      <hr></hr>
      <br></br>
      <center>
      <div style={{height:'40px',width:'300px'}}>
      <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '30px', color: 'white' }} />
      <FontAwesomeIcon icon={faTimes} style={{ fontSize: '30px', color: 'white',marginLeft:'20px' }} />
      <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '30px', color: 'white' ,marginLeft:'20px'}} />
      <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '30px', color: 'white' ,marginLeft:'20px'}} />
    
      </div>
      </center>
    </div>
  )
}

export default Footer