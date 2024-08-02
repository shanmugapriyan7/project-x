
// Resume3.js
import React, { useState } from 'react';
import './Resume3A.css'; // Update CSS file import accordingly
import { useNavigate } from 'react-router-dom';

const Resume3A = ({ resume, setResume }) => {
  const [buildResume, setBuildResume] = useState({ ...resume });
  const navigate = useNavigate();

  const handleSubmit = () => {
    setResume(buildResume);
    navigate('/resume4a');
  };
  const handle=()=>{
    navigate('/resume2a');
  }

  return (
    <div>
      <header className="header43-resume3">
        <h1 className="website-name43-resume3">JobSpark</h1>
        <button className="signup-button-header43-resume3" onClick={handle}>Back</button>
      </header>
      <div className="hole43-resume3">
        <div className="container43-resume3">
          <div className="form-container43-resume3">
            <form action="#" className="form43-resume3">
              <div className="login-text43-resume3">Create your resume</div>

              <label>Education</label>
              <input
                type="text"
                placeholder="Enter Skills"
                className="input1-43-resume3"
                value={buildResume.edu1}
                onChange={(e) => setBuildResume({ ...buildResume, edu1: e.target.value })}
              />

              <input
                type="text"
                placeholder="Enter Skills"
                className="input2-43-resume3"
                value={buildResume.edu2}
                onChange={(e) => setBuildResume({ ...buildResume, edu2: e.target.value })}
              />

              <button onClick={handleSubmit} className="button43-resume3">
                Next
              </button>
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
  );
};

export default Resume3A;