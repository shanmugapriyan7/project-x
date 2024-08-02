
import React from 'react';
import { Link } from 'react-router-dom';
import studModel from '../Images/StudModel.png';
import './Page1.css'; // Import the CSS file
import Header from '../Project/Header';

const Page1 = ({ profile }) => {
  return (
<div>
  <Header/>
      <div className='probody' style={{marginTop:'60px'}}>

      <br></br>
        <div className="page-container-62" >
        <center><img
            src={studModel}
            alt="Job Seeker"
            className="dp-image-62"
          /></center>
        <div className="dp-container-62">
         
        </div>
        <center><p className="username-62">{profile.name}</p></center>
        <center><p>{profile.description}</p></center>
        <center>
        <div className="profile-details"><br></br>
        <p >Email: {profile.email}</p><br></br>
        <p>Location: {profile.location}</p><br></br>
        </div>


        <div className="skills-container-62">
          
            <h4>Technical Skills</h4>
            <p>{profile.technicalSkills.join(', ')}</p>
          
          <br/>
          
            <h4>Soft Skills</h4>
            <p>{profile.softSkills.join(', ')}</p>
          
        </div><br></br>
        <button className="edit-profile-button-62" style={{color:'white',border:'none',height:'35px',width:'340px',backgroundColor:'purple',borderRadius:'10px',color:'white'}}>
          <Link to="/edit-profile" style={{textDecoration:'none',color:'white',fontSize:'15px'}}>Edit Profile</Link>

        </button><br></br>
        <button className="edit-profile-button-62" style={{color:'white',border:'none',height:'35px',width:'340px',backgroundColor:'purple',borderRadius:'10px',color:'white',marginTop:'20px'}}>
          <Link to="/User" style={{textDecoration:'none',color:'white',fontSize:'15px'}}>BACK</Link>

        </button></center>
   </div>
    </div></div>

  );
};

export default Page1;