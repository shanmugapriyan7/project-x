

import React, {useState} from 'react';
import './Resume1A.css';
import { useNavigate } from 'react-router-dom';
//import Template1 from '../Template/Template1';

const Resume1A = ({ resume, setResume }) => {
  const [buildResume, setBuildResume] = useState({ ...resume });
  const navigate = useNavigate();

  const handleSubmit = () => {
    setResume(buildResume);
    navigate('/resume2a');
  };
  
  const handle=()=>{
    navigate('/User');
  }

  return (
    <div >
      <header class="header43-resume1">
  <h1 class="website-name43-resume1">JobSpark</h1>
  <button class="signup-button-header43-resume1" onClick={handle}>Back</button>
</header>
    <div class="hole43-resume1">
      <div class="container43-resume1">
        <div class="form-container43-resume1">
           <form action="#" class="form43-resume1">
              <div class="login-text43-resume1">Create your resume</div>
              
              <label>First Name</label>
              <input 
              type="text"
              placeholder="Enter First Name" 
              className="input1-43-resume1"
              value={buildResume.fname}
              onChange={(e) => setBuildResume({ ...buildResume, fname: e.target.value })} />

              <label>Last Name </label>
              <input 
              type="text"
              placeholder="Enter Last Name" 
              className="input2-43-resume1"
              value={buildResume.lname}
              onChange={(e) => setBuildResume({ ...buildResume, lname: e.target.value })} />
              
              <label>Title</label>
              <input 
              type="text"
              placeholder="Enter title" 
              className="input6-43-resume1"
              value={buildResume.title}
              onChange={(e) => setBuildResume({ ...buildResume, title: e.target.value })} />

              <label>Email</label>
              <input 
              type="text"
              placeholder="Enter email" 
              className="input3-43-resume1"
              value={buildResume.email}
              onChange={(e) => setBuildResume({ ...buildResume, email: e.target.value })} />

              <label>LinkedIn</label>
              <input 
              type="text"
              placeholder="Enter Linkedin" 
              className="input4-43-resume1"
              value={buildResume.linkedin}
              onChange={(e) => setBuildResume({ ...buildResume, linkedin: e.target.value })} />

              <label>GitHub</label>
              <input 
              type="text"
              placeholder="Enter GitHub" 
              className="input5-43-resume1"
              value={buildResume.github}
              onChange={(e) => setBuildResume({ ...buildResume, github: e.target.value })} />
              
              <button onClick={handleSubmit} className="button43-resume1">Next</button>
           </form>
        </div>
        <div class="login-image43-resume1">
        <h2>Build Your Resume Easily</h2>
  <p>Create a professional-looking resume with our easy-to-use builder.</p>
  <ul>
    <li>Choose from various resume templates</li>
    <li>Add your education, experience, and skills</li>
    <li>Customize the layout and design</li>
    <li>Download or print your resume</li>
  </ul>
  
  <h3>Why Choose Our Resume Builder?</h3>
  <ul>
    <li>Simple and intuitive interface</li>
    <li>Professional templates for different industries</li>
    <li>Real-time preview of your resume</li>
    <li>Option to save and edit your resume anytime</li>
    <li>Secure and confidential</li>
  </ul>
        </div>
      </div>
    </div>
    
    </div>
  )
}


export default Resume1A