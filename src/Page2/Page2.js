// Page2.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Page2/Page2.css'; // Import the CSS file
import Header from '../Project/Header';

const Page2 = ({ profile, setProfile }) => {
  const [editedProfile, setEditedProfile] = useState({ ...profile });
  const navigate = useNavigate();

  const handleSubmit = () => {
    setProfile(editedProfile);
    navigate('/profile');
  };

  return (
    <div>
      <Header/>
    <div className='editprobody'> <br></br>
         <div className="Edit-Profile-page-container-62" style={{marginTop:'200px'}}>
      <h1 className="Edit-Profile-heading-62">Edit Your Profile</h1>
      <label className="Edit-Profile-label-62">Name:</label>
      <input
        className="Edit-Profile-input-62"
        type="text"
        value={editedProfile.name}
        onChange={(e) => setEditedProfile({ ...editedProfile, name: e.target.value })}
      />
      <label className="Edit-Profile-label-62">Description:</label>
      <input
        className="Edit-Profile-input-62"
        type="text"
        value={editedProfile.description}
        onChange={(e) => setEditedProfile({ ...editedProfile, description: e.target.value })}
      />
      <label className="Edit-Profile-label-62">Email:</label>
      <input
        className="Edit-Profile-input-62"
        type="text"
        value={editedProfile.email}
        onChange={(e) => setEditedProfile({ ...editedProfile, email: e.target.value })}
      />
      <label className="Edit-Profile-label-62">Location:</label>
      <input
        className="Edit-Profile-input-62"
        type="text"
        value={editedProfile.location}
        onChange={(e) => setEditedProfile({ ...editedProfile, location: e.target.value })}
      />
      <label className="Edit-Profile-label-62">Technical Skills (comma-separated):</label>
      <input
        className="Edit-Profile-input-62"
        type="text"
        value={editedProfile.technicalSkills.join(', ')}
        onChange={(e) =>
          setEditedProfile({
            ...editedProfile,
            technicalSkills: e.target.value.split(', '),
          })
        }
      />
      <label className="Edit-Profile-label-62">Soft Skills (comma-separated):</label>
      <input
        className="Edit-Profile-input-62"
        type="text"
        value={editedProfile.softSkills.join(', ')}
        onChange={(e) =>
          setEditedProfile({
            ...editedProfile,
            softSkills: e.target.value.split(', '),
          })
        }
      />
      <button className="Edit-Profile-button-62" onClick={handleSubmit}>
        Save Changes
      </button>
      </div>
      </div>
    </div>
  );
};

export default Page2;