import React, { useState } from 'react'
import Header from './Header'
import '../Project/User.css'
import img1 from '../Images/pro.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Deleteprofile from '../Dashboard/Deleteprofile'
import ChangePassword from '../Dashboard/ChangePassword'
import Meetings from '../Dashboard/Meetings'
import Messages from '../Dashboard/Messages'
import JobAlert from '../Dashboard/JobAlert'
import Dashboard from '../Dashboard/Dashboard';
import Page1 from '../Page1/Page1';
import Template from '../Resume/Template';
import { useNavigate } from 'react-router-dom';
const User = () => {
const[count,setCount]=useState(0);
const[dash ,setDash]=useState(true);
const[profile,setProfile]=useState(false);
const[edit,setEdit]=useState(false);
const[resume,setResume]=useState(false);
const[deletep,setDeletep]=useState(false);
const[alertjob,setAlertjob]=useState(false);
const[messagep,setMessagep]=useState(false);
const[changep,setChangep]=useState(false)
const[meetings,setMeetings]=useState(false)

const navigateP=useNavigate();
const profilenav=()=>{
   navigateP("/profile");
}

const dashnav=()=>{
    setMeetings(false);  setDash(true);  setAlertjob(false);setChangep(false);setDeletep(false);setEdit(false);setMessagep(false);setProfile(false); setResume(false);
}

const changepnav=()=>{
    setMeetings(false); setDash(false);  setAlertjob(false);setChangep(true);setDeletep(false);setEdit(false);setMessagep(false);setProfile(false); setResume(false);
}

const deletepnav=()=>{
    setMeetings(false); setDash(false);  setAlertjob(false);setChangep(false);setDeletep(true);setEdit(false);setMessagep(false);setProfile(false); setResume(false);
}
const navigateEP=useNavigate();
const editnav=()=>{
navigateEP("/edit-profile");
}

const message=()=>{
    setMeetings(false);  setDash(false);  setAlertjob(false);setChangep(false);setDeletep(false);setEdit(false);setMessagep(true);setProfile(false); setResume(false);
}

const alertnav=()=>{
    setMeetings(false); setDash(false);  setAlertjob(true);setChangep(false);setDeletep(false);setEdit(false);setMessagep(false);setProfile(false); setResume(false);
}

const resumenav=()=>{
    setMeetings(false); setDash(false);  setAlertjob(false);setChangep(false);setDeletep(false);setEdit(false);setMessagep(false);setProfile(false); setResume(true);
}

const myapplynav=()=>{
    setMeetings(true); setDash(false);  setAlertjob(false);setChangep(false);setDeletep(false);setEdit(false);setMessagep(false);setProfile(false); setResume(false);
}
const navigatelogout=useNavigate();
const logout=()=>{
navigatelogout("/");
}

  return (
    <div>
        <Header/>
<br></br><br></br><br></br><br></br>
        <div style={{height:'610px',width:'350px',display:'flex',position:'fixed' }} className='side12'>
<div style={{overflow:'scroll',overflowX:'hidden'}}>
    <div >

<div style={{height:'150px',display:'grid',gridTemplateColumns:'150px 250px'}}>
    <div>
        <img src={img1} style={{height:'100px',borderRadius:'100px',marginTop:'30px',marginLeft:'30px'}}></img>
        </div><div>
            <br></br><br></br>
            <span style={{fontWeight:'bold',fontSize:'20px',color:'white'}}>Shanmugapriyan </span><br></br>
            <span style={{color:'white'}}>Developer| </span><br></br>
            <span style={{color:'white'}}>Tech Enthusiast </span>
        </div>
</div>
<div ><ul >
    <li><button style={{width:'300px',height:'50px',marginLeft:'25px',border:'none',marginTop:'5px',textAlign:'left'}} onClick={dashnav}> 
      <FontAwesomeIcon icon={faTachometerAlt} style={{fontSize:'25px',marginTop:'10px',marginLeft:'25px'}} /> {" "}User DashBoard</button></li>
    <li><button style={{width:'300px',height:'50px',marginLeft:'25px',border:'none',marginTop:'5px',textAlign:'left'}} onClick={profilenav}>
    <FontAwesomeIcon icon={faUser} style={{fontSize:'25px',marginTop:'10px',marginLeft:'25px'}}/>{" "}My Profile</button></li>
    <li><button style={{width:'300px',height:'50px',marginLeft:'25px',border:'none',marginTop:'5px',textAlign:'left'}} onClick={editnav}>
    <FontAwesomeIcon icon={faEdit}style={{fontSize:'25px',marginTop:'10px',marginLeft:'25px'}}/>{" "}Edit Profile</button></li>
    <li><button style={{width:'300px',height:'50px',marginLeft:'25px',border:'none',marginTop:'5px',textAlign:'left'}} onClick={resumenav}>
    <FontAwesomeIcon icon={faFileAlt} style={{fontSize:'25px',marginTop:'10px',marginLeft:'25px'}}/>{" "}Build Resume</button></li>
    <li><button style={{width:'300px',height:'50px',marginLeft:'25px',border:'none',marginTop:'5px',textAlign:'left'}} onClick={myapplynav}>
    <FontAwesomeIcon icon={faBell} style={{fontSize:'25px',marginTop:'10px',marginLeft:'25px'}}/>{" "}Meetings</button></li>
    <li><button style={{width:'300px',height:'50px',marginLeft:'25px',border:'none',marginTop:'5px',textAlign:'left'}} onClick={alertnav}>
    <FontAwesomeIcon icon={faExclamationTriangle}style={{fontSize:'25px',marginTop:'10px',marginLeft:'25px'}}/>{" "}Alert Jobs</button></li>
    <li><button style={{width:'300px',height:'50px',marginLeft:'25px',border:'none',marginTop:'5px',textAlign:'left'}} onClick={message}>
    <FontAwesomeIcon icon={faEnvelope}style={{fontSize:'25px',marginTop:'10px',marginLeft:'25px'}}/>{" "}Messages</button></li>
    <li><button style={{width:'300px',height:'50px',marginLeft:'25px',border:'none',marginTop:'5px',textAlign:'left'}} onClick={changepnav}>
    <FontAwesomeIcon icon={faLock} style={{fontSize:'25px',marginTop:'10px',marginLeft:'25px'}}/>{" "}Change password</button></li>
    <li><button style={{width:'300px',height:'50px',marginLeft:'25px',border:'none',marginTop:'5px',textAlign:'left'}} onClick={deletepnav}>
    <FontAwesomeIcon icon={faTrash}style={{fontSize:'25px',marginTop:'10px',marginLeft:'25px'}}/>{" "}Delete Profile</button></li>
    <li><button style={{width:'300px',height:'50px',marginLeft:'25px',border:'none',marginTop:'5px',textAlign:'left'}} onClick={logout}>
    <FontAwesomeIcon icon={faSignOutAlt} style={{fontSize:'25px',marginTop:'10px',marginLeft:'25px'}}/>{" "}{" "}
Logout</button></li></ul>
    <br></br> <br></br> <br></br> <br></br> <br></br>
</div>
    </div>
</div>
        </div>
        <div style={{height:'fitcontent',marginLeft:'350px',width:'1170px'}} className='userbody'>
        {dash && (   <Dashboard/>)}
        
        {edit && (   <Dashboard/>)}
        {resume && (   <Template/>)}
        {deletep && (   <Deleteprofile/>)}
        {alertjob && (   <JobAlert/>)}
        {changep && (   <ChangePassword/>)}
        {messagep && (   <Messages/>)}
        {meetings && (   <Meetings/>)}
        

        
        </div>
    </div>
  )
}

export default User