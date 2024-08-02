
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Resume1 from './Resume/Resume1';
import Resume2 from './Resume/Resume2';
import Resume3 from './Resume/Resume3';
import Resume4 from './Resume/Resume4';
import Resume5 from './Resume/Resume5';
import IndexPage from './Project/IndexPage';
import Home from './Project/Home';
import Job1 from './Project/Job1';
import JobDescription1 from './Project/JobDescription1';
import JobDescription7 from './Project/JobDescription7';
import JobDescription2 from './Project/JobDescription2';
import JobDescription3 from './Project/JobDescription3';
import JobDescription4 from './Project/JobDescription4';
import JobDescription5 from './Project/JobDescription5';
import JobDescription6 from './Project/JobDescription6';
import JobDescription8 from './Project/JobDescription8';
import JobDescription9 from './Project/JobDescription9';
import JobDescription10 from './Project/JobDescription10';
import Signup from './Login/Signup';
import About from './About/About';
import Page1 from './Page1/Page1';
import Page2 from './Page2/Page2';
import Apply from './Apply/Apply';
import User from './Project/User';
import Template1 from './Resume/Template1';
import Template1A from './ResumeA/Template1A';
import Resume1A from './ResumeA/Resume1A';
import Resume2A from './ResumeA/Resume2A';
import Resume3A from './ResumeA/Resume3A';
import Resume4A from './ResumeA/Resume4A';
import Resume5A from './ResumeA/Resume5A';
import Header from './Project/Header';
import Login from './Login-skct/Login';
import NSignup from './Login-skct/NSignup';
import NewHome from './Project/NewHome';
import Front from './Project/Front';

  const App = () => {
    const [profile, setProfile] = useState({
      name: 'John Doe',
      description: 'Experienced software engineer',
      email: 'john.doe@example.com',
      location: 'City, Country',
      technicalSkills: ['React', 'JavaScript', 'Node.js'],
      softSkills: ['Communication', 'Teamwork', 'Problem Solving'],
    });

    const [resume, setResume] = useState({
      fname: 'John ',
      lname: 'Doe',
      title: 'Full Stack Developer',
      email: 'john.doe@example.com',
      linkedin: 'john-doe',
      github: 'johndoe108',
      skill1: 'skill1',
      skill2: 'skill2',
      skill3: 'skill3',
      skill4: 'skill4',
      skill5: 'skill5',
      edu1: 'B.E.',
      edu2: 'M.E.',
      des1: 'I am passionate about designing digital experiences that are both visually stunning and intuitive, and always strive to create designs that delight and engage users. Demonstrated ability to lead cross-functional teams and deliver high-quality projects on time and within budget. Strong problem-solving skills and a passion for continuous learning and professional development. Seeking opportunities to leverage technical expertise and leadership abilities to drive innovation and contribute to the success of a dynamic organization.',
      cname1: 'XYZ',
      role1: 'Software developer',
      dur1: '1 year',
      cname2: 'XYZ',
      role2: 'Software developer',
      dur2: '1 year',
    });
    
window.Dark=false;
  return (
    <div>
  <BrowserRouter>
  <Routes>
    <Route path='/' element=<IndexPage/> >
    </Route>
    <Route path='/Job1' element=<Job1/>></Route>
    <Route path='/JobDescription1' element=<JobDescription1/>></Route>
    <Route path='/JobDescription2' element=<JobDescription2/>></Route>
    <Route path='/JobDescription3' element=<JobDescription3/>></Route>
    <Route path='/JobDescription4' element=<JobDescription4/>></Route>
    <Route path='/JobDescription5' element=<JobDescription5/>></Route>
    <Route path='/JobDescription6' element=<JobDescription6/>></Route>
    <Route path='/JobDescription7' element=<JobDescription7/>></Route>
    <Route path='/JobDescription8' element=<JobDescription8/>></Route>
    <Route path='/JobDescription9' element=<JobDescription9/>></Route>
    <Route path='/JobDescription10' element=<JobDescription10/>></Route>
    <Route path='/Login' element=<Login/>></Route>
    <Route path='/NSignup' element=<NSignup/>></Route>
    <Route path='/About' element=<About/>></Route>
    <Route path='/Signup' element=<Signup/>></Route>
    <Route path='/Apply' element=<Apply/>></Route>
    <Route path='/User' element=<User/>></Route>
    <Route path='/Header' element=<Header/>></Route>
    <Route path='/Home' element=<NewHome/>></Route>
   
        <Route
          path="/profile"
          element={<Page1 profile={profile} setProfile={setProfile} />}
        />
        <Route
          path="/edit-profile"
          element={<Page2 profile={profile} setProfile={setProfile} />}
        />
<Route
          path="/template1"
          element={<Template1 resume={resume} setResume={setResume} />}
        />
        <Route
          path="/resume1"
          element={<Resume1 resume={resume} setResume={setResume} />}
        />
        <Route
          path="/resume2"
          element={<Resume2  resume={resume} setResume={setResume} />}
        />
        <Route
          path="/resume3"
          element={<Resume3 resume={resume} setResume={setResume} />}
        />
        <Route
          path="/resume4"
          element={<Resume4 resume={resume} setResume={setResume} />}
        />
        <Route
          path="/resume5"
          element={<Resume5 resume={resume} setResume={setResume} />}
        />

<Route
          path="/template1a"
          element={<Template1A resume={resume} setResume={setResume} />}
        />
        <Route
          path="/resume1a"
          element={<Resume1A resume={resume} setResume={setResume} />}
        />
        <Route
          path="/resume2a"
          element={<Resume2A  resume={resume} setResume={setResume} />}
        />
        <Route
          path="/resume3a"
          element={<Resume3A resume={resume} setResume={setResume} />}
        />
        <Route
          path="/resume4a"
          element={<Resume4A resume={resume} setResume={setResume} />}
        />
        <Route
          path="/resume5a"
          element={<Resume5A resume={resume} setResume={setResume} />}
        />
       

  </Routes>
  </BrowserRouter>

    </div>
  )
}

export default App
