// About.js

import React from 'react';
import './About.css';
import ShanPic from '../Images/Shanmugapriyan_Pic.jpg';
import WadhuPic from '../Images/Wadhudh_Pic.jpg';
import TharunPic from '../Images/Tharun_Pic.jpg';
import Header from '../Project/Header';

const About = () => {
  const shanLinkedIn = 'https://www.linkedin.com/in/shanmugapriyan-k-8a0917258/';
  const wadhuLinkedIn = 'https://www.linkedin.com/in/wadhudh-kavi-398b74210/';
  const tharunLinkedIn = 'https://www.linkedin.com/in/tharun-shanmugam-b39bb62b2/';

  return (
    
    <div className="container-62">
        <Header/>
      <div className="highlight-container-62">
        <p className="highlight-text-62">
          <span className="highlight-heading-62">JobSpark</span>
          <br />
          <span className="highlight-subtext-62">Passion meets Profession here!</span>
          {/* Add more catchy phrases as needed */}
        </p>
      </div>

      <div className="about-container-62">
        <h2 className="about-heading-62">About Velai.in</h2>
        <p>Welcome to Velai.in, your go-to platform for job searching and career opportunities.</p>

        <h3 className="about-subheading-62">Our Mission</h3>
        <p>Empowering individuals by connecting them with meaningful employment opportunities.</p>

        <h3 className="about-subheading-62">Our Vision</h3>
        <p>Bridging the gap between employers and job seekers to foster a thriving workforce.</p>

        <h3 className="about-subheading-62">Our Values</h3>
        <ul className="about-values-62">
          <li>Commitment to Excellence</li>
          <li>Integrity and Transparency</li>
          <li>Inclusivity and Diversity</li>
          {/* Add more values as needed */}
        </ul>

        <h2 className="about-heading-62">Meet the Team</h2>
        <div className="team-members-62">
          <a href={shanLinkedIn} target="_blank" rel="noopener noreferrer" className="team-member-62">
            <img src={ShanPic} alt="Shanmugapriyan" />
            <p>Shanmugapriyan K<br/> <br/> Head, Technical Wing</p>
          </a>
          <a href={wadhuLinkedIn} target="_blank" rel="noopener noreferrer" className="team-member-62">
            <img src={WadhuPic} alt="Wadhudh" />
            <p>Wadhudh Kavi M J<br/><br/> Head, R&D Wing</p>
          </a>
          <a href={tharunLinkedIn} target="_blank" rel="noopener noreferrer" className="team-member-62">
            <img src={TharunPic} alt="Tharun" />
            <p>Tharun S I<br/><br/> Head, Management Wing</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;