
// Resume4.js
import React, { useState } from 'react';
import './Resume4.css'; // Update CSS file import accordingly
import { useNavigate } from 'react-router-dom';

const Resume4 = ({ resume, setResume }) => {
  const [buildResume, setBuildResume] = useState({ ...resume });
  const navigate = useNavigate();

  const handleSubmit = () => {
    setResume(buildResume);
    navigate('/resume5');
  };
  const handle=()=>{
    navigate('/resume3')
  }

  return (
    <div>
      <header className="header43-resume4">
        <h1 className="website-name43-resume4">jobSpark</h1>
        <button className="signup-button-header43-resume4" onClick={handle}>Back</button>
      </header>
      <div className="hole43-resume4">
        <div className="container43-resume4">
          <div className="form-container43-resume4">
            <form action="#" className="form43-resume4">
              <div className="login-text43-resume4">Create your resume</div>

              <label>How would you describe yourself?</label>
              <input
                type="text"
                placeholder="Enter Skills"
                className="input1-43-resume4"
                value={buildResume.des1}
                onChange={(e) => setBuildResume({ ...buildResume, des1: e.target.value })}
              />

              

              <button onClick={handleSubmit} className="button43-resume4">
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

export default Resume4;