

//Resume2.js
import React, {useState} from 'react'
import './Resume2A.css'; // Update CSS file import accordingly
import { useNavigate } from 'react-router-dom';

const Resume2A = ({ resume, setResume }) => {
  const [buildResume, setBuildResume] = useState({ ...resume });
  const navigate = useNavigate();

  const handleSubmit = () => {
    setResume(buildResume);
    navigate('/resume3a');
  };
  const handle=()=>{
    navigate('/resume1a');
  }

  return (
    <div>
      <header class="header43-resume2">
        <h1 class="website-name43-resume2">JobSpark</h1>
        <button class="signup-button-header43-resume2" onClick={handle}>Back</button>
      </header>
      <div class="hole43-resume2">
        <div class="container43-resume2">
          <div class="form-container43-resume2">
            <form action="#" class="form43-resume2">
              <div class="login-text43-resume2">Create your resume</div>
              
              <label>Skills</label>
              <input 
              type="text"
              placeholder="Enter Skills" 
              className="input1-43-resume2"
              value={buildResume.skill1}
              onChange={(e) => setBuildResume({ ...buildResume, skill1: e.target.value })} />
              
              <input 
              type="text"
              placeholder="Enter Skills" 
              className="input2-43-resume2"
              value={buildResume.skill2}
              onChange={(e) => setBuildResume({ ...buildResume, skill2: e.target.value })} />
              
              <input 
              type="text"
              placeholder="Enter Skills" 
              className="input3-43-resume2"
              value={buildResume.skill3}
              onChange={(e) => setBuildResume({ ...buildResume, skill3: e.target.value })} />
              
              <input 
              type="text"
              placeholder="Enter Skills" 
              className="input4-43-resume2"
              value={buildResume.skill4}
              onChange={(e) => setBuildResume({ ...buildResume, skill4: e.target.value })} />
              
              <input 
              type="text"
              placeholder="Enter Skills" 
              className="input5-43-resume2"
              value={buildResume.skill5}
              onChange={(e) => setBuildResume({ ...buildResume, skill5: e.target.value })} />
              
              <button onClick={handleSubmit} class="button43-resume2">Next</button>
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

export default Resume2A