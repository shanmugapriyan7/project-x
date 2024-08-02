import React, { useState } from 'react';
import Footer from './Footer';
import '../Project/JobDescription.css';
import img1 from '../Images/1.webp';
import img2 from '../Images/y2.jpg';
import img3 from '../Images/Location.png';
import img4 from '../Images/g4.jpg';
import img5 from '../Images/g2.jpg';
import img6 from '../Images/g3.jpg';
import img7 from '../Images/thumb.jpg';
import log from '../Images/jdp.png'
import img41 from '../Images/edit.png'
import img51 from '../Images/envelope.png'
import img61 from '../Images/user.png'
import img71 from '../Images/question.png'
import img81 from '../Images/settings.png'
import img91 from '../Images/log-out.png'
import {
  FaCalendar,
  FaGraduationCap,
  FaHourglass,
  FaMale,
  FaMapMarkerAlt,
  FaMoneyBill,
  FaUserTie,
} from 'react-icons/fa';
import Warning from './Warning';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const JobDescription1 = () => {
  const[read,setRead]=useState(true);
  const [dark,setDark]=useState(false);
  const[Acolor,setAcolor]=useState("rgba(1, 80, 171, 0.848)")
  const[count,setCount]=useState(0);

  const DarkTheme=()=>{
    setDark(!dark);
    setRead(!read)
  }
  const [isMenuActive, setMenuActive] = useState(false);
  
  const menuToggle = () => {
    setMenuActive(!isMenuActive);
  };
  const navigateb=useNavigate()
  const handleClickb=()=>{
    navigateb("/Job1")
  }
  const[apply,setApply]=useState("Apply")
 
  
  const navigatel=useNavigate();
    const ToAboutl=()=>{
     navigatel("/")
  }

  const [isApply, setIsApply] = useState(false);
  
  const ApplyJob = () => {
    setIsApply(true);
    setCount(count+1);
    if (count>1){
      alert("Application already submitted");
      setIsApply(false);
    }
  };
  
  const ApplyJob2 = () => {
    if(count===1){
    alert("Application applied Successfully")
    setIsApply(false);
    setAcolor("grey");
    setApply("Applied");
    }
    
  };


  const ApplyJobBack=()=>{
    setIsApply(false);
    setCount(0);
  }


  return (
    <div>
  
<Header/>
<br></br><br></br><br></br>  <div  style={{height:'695px',width:'1515PX',marginTop:'-50px'}} className={`Apply ${isApply ? 'job' : ''}`}>
           <div style={{width:'600px',height:'280px',borderRadius:'20px',marginLeft:'500px'}}className={`Apply2 ${isApply ? 'job2' : ''}`} >
<button style={{width:'50px',height:'50px',borderRadius:'50px',fontSize:'22px',border:'none',color:'purple',backgroundColor:'white'}} onClick={ApplyJobBack}>&#x2190; </button>
    <center>
    <br></br><br></br>
    <h1>Your details and resume will shared with a Company!</h1><br></br><br></br>
   
   <button style={{width:'500px',height:'40px',borderRadius:'10px'}} onClick={ApplyJob2} className='Apply-btn'  >Click here to Confirm</button><br></br><br></br>
   </center>

</div>
</div>
     
      <div style={{ width: '1000px', height: '2200px' }} className={`jdc ${dark?'Djdc':''}`}>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div style={{ height: '120px', width: '120px', marginLeft: '100px' }}>
          <img src={img2} height={120} alt="job"  style={{borderRadius:'15px'}}/>
        </div>
        <div
          style={{
            height: '120px',
            width: '500px',
            marginLeft: '240px',
            marginTop: '-120px',
          }}
          className={`jdname ${dark ? 'Djdname':''}`}
        ><br></br>
          <span style={{ fontSize: '25px', fontWeight: 'bold' }} className={`jdt ${dark ? 'Djdt':''}`}>
          Junior Graphic Designer (Web)
          </span>
          <br></br>
          <span style={{ color: 'grey', marginLeft: '0px' }}> Design, Development </span>
          <span style={{ color: 'grey', marginLeft: '20px' }}>Chennai</span>
          <span style={{ color: 'grey', marginLeft: '20px' }}>May 3,2024</span>
          <span style={{ color: 'grey', marginLeft: '20px' }}>
            $450-$500/ month{' '}
          </span>
          <br></br>
          <button
            style={{
              backgroundColor: 'rgba(65, 214, 255, 0.675)',
              color: 'rgba(0, 0, 124, 0.671)',
              height: '30px',
              width: '110px',
            }}
          >
            Full Time
          </button>
          <button
            style={{
              height: '30px',
              width: '110px',
              marginLeft: '30px',
            }}
          >
            Urgent
          </button>
        </div>
        <br></br>
        <div style={{ height: 'fitcontent', marginLeft: '100px' }}>
          <br></br>
          <br></br>
          <span
            style={{
              fontSize: '22px',
              fontFamily: 'monospace',
              fontWeight: 'bold',
              
            }}className={`jdt ${dark ? 'Djdt':''}`}
          >
            Job Description
          </span>
          <br></br>
          <br></br>
          <br></br>
          <span style={{ color: 'grey' }}>
            As a Product Designer, you will work within a Product Delivery Team
            fused with UX, engineering, product, and data talent. You will help
            the team design beautiful interfaces that solve business challenges
            for our clients. We work with a number of Tier 1 banks on building
            web-based applications for AML, KYC, and Sanctions List management
            workflows. This role is ideal if you are looking to segue your
            career into the FinTech or Big Data arenas.
          </span>
          <br></br>
          <br></br>
          <br></br>
          <span
            style={{
              fontSize: '22px',
              fontFamily: 'monospace',
              fontWeight: 'bold',
             
            }}className={`jdt ${dark ? 'Djdt':''}`}
          >
            Key Responsibilities

          </span>
          <br></br>
          <br></br>
          <ul style={{ color: 'grey' }}>
            <li>
              Be involved in every step of the product design cycle from
              discovery to developer handoff and user acceptance testing.
            </li>
            <br></br>
            <li>
              Work with BAs, product managers and tech teams to lead the Product
              Design
            </li>
            <br></br>
            <li>
              Maintain quality of the design process and ensure that when
              designs are translated into code they accurately reflect the
              design specifications.
            </li>
            <br></br>
            <li>
              Accurately estimate design tickets during planning sessions.
            </li>
            <br></br>
            <li>
              Contribute to sketching sessions involving non-designersCreate,
              iterate and maintain UI deliverables including sketch files, style
              guides, high fidelity prototypes, micro interaction specifications
              and pattern libraries.
            </li>
            <br></br>
            <li>
              Ensure design choices are data led by identifying assumptions to
              test each sprint, and work with the analysts in your team to plan
              moderated usability test sessions.
            </li>
            <br></br>
            <li>
              Design pixel perfect responsive UI’s and understand that adopting
              common interface patterns is better for UX than reinventing the
              wheel
            </li>
            <br></br>
            <li>Present your work to the wider business at Show & Tell sessions.</li>
            <br></br>
          </ul>
          <br></br>
          <br></br>
          <span
            style={{
              fontSize: '22px',
              fontFamily: 'monospace',
              fontWeight: 'bold',
              
            }}className={`jdt ${dark ? 'Djdt':''}`}
          >
            Skill & Experience
          </span>
          <br></br>
          <br></br>
          <ul style={{ color: 'grey' }}>
            <li>You have at least 3 years’ experience working as a Product Designer.</li>
            <br></br>
            <li>You have experience using Sketch and InVision or Framer X</li>
            <br></br>
            <li>You have some previous experience working in an agile environment – Think two-week sprints.</li>
            <br></br>
            <li>You are familiar using Jira and Confluence in your workflow</li>
            <br></br>
          </ul>
          <br></br>
          <br></br>
          <br></br>
          <span
            style={{
              fontSize: '22px',
              fontFamily: 'monospace',
              fontWeight: 'bold',
              
            }}className={`jdt ${dark ? 'Djdt':''}`}
          >
            Share this post:{' '}
          </span>
          <button style={{ backgroundColor: 'blue' }} className='jdsb'>
            facebook
          </button>
          <button style={{ backgroundColor: 'pink' }} className='jdsb'>
            Twitter
          </button>
          <button style={{ backgroundColor: 'red' }} className='jdsb'>
            Pinterest
          </button>
          <br></br>
          <br></br>
          <br></br>
          <span
            style={{
              fontSize: '22px',
              fontFamily: 'monospace',
              fontWeight: 'bold',
              
            }}className={`jdt ${dark ? 'Djdt':''}`}
          >
            Location
          </span>
          <br></br>
          <br></br>
          <img src={img3} width={810} height={400} style={{ marginLeft: '30px' }} alt="location" />
          <br></br>
          <br></br>
          <span
            style={{
              fontSize: '22px',
              fontFamily: 'monospace',
              fontWeight: 'bold',
              
            }}className={`jdt ${dark ? 'Djdt':''}`}
          >
            Photos
          </span>
          <br></br>
          <br></br>
          <img src={img4} width={180} height={180} style={{ marginLeft: '30px' }} alt="photo" />
          <img src={img5} width={180} height={180} style={{ marginLeft: '30px' }} alt="photo" />
          <img src={img6} width={180} height={180} style={{ marginLeft: '30px' }} alt="photo" />
          <img src={img7} width={180} height={180} style={{ marginLeft: '30px' }} alt="photo" />
          <br></br>
          <br></br>
          <span
            style={{
              fontSize: '22px',
              fontFamily: 'monospace',
              fontWeight: 'bold',
             
            }}className={`jdt ${dark ? 'Djdt':''}`}
          >
            Video
          </span>
          <br></br>
          <br></br>
          <iframe
            style={{ marginLeft: '30px' }}
            width="810"
            height="500"
            src="https://www.youtube.com/embed/7e90gBu4pas"
            title="Working at Envato"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <br></br>
          <br></br>
          
        </div>
      </div>
      <div
        style={{
          height: '2900px',
          width: '519px',
          marginLeft: '1000px',
          marginTop: '-2200px',
          
        }}  className={`jdc ${dark ? 'Djdc':''}`}
      >
       
        <br></br><br></br> <br></br><br></br>
        <center>
          <span style={{ fontSize: '18px' }} className={`jdt ${dark ? 'Djdt':''}`}>Application ends: May 19, 2026</span>
          <br></br>
          <br></br>
          <button
            style={{ height: '50px', width: '400px' ,backgroundColor:Acolor}}
            className='jdaply'
            onClick={ApplyJob}
          >
            {apply}
          </button>
        </center>
        <br></br>
        <br></br>
        <div
          style={{
            height: '600px',
            width: '410px',
            marginLeft: '50px',
            borderRadius: '5px',
          }}
          className={`jdcu ${dark ? 'Djdcu':''}`}
        >
          <div style={{ height: '600px', width: '70px',textAlign:'center' }} className={`jdic ${dark ? 'Djdic':''}`}>
            <br></br>
            <ul style={{ listStyle: 'none', fontSize: '30px' ,marginTop:'10px'}}>
              <li > <FaCalendar /></li><br></br>
              <li>   <FaMapMarkerAlt /></li><br></br>
              <li>   <FaMoneyBill /></li><br></br>
              <li>    <FaHourglass /></li><br></br>
              <li><FaUserTie /></li><br></br>
              <li>    <FaMale /></li><br></br>
              <li>   <FaGraduationCap /></li><br></br>
            </ul>
          </div>
          <div
            style={{
              height: '600px',
              width: '200px',
              marginLeft: '70px',
              marginTop: '-600px',
            }}   
          >
            <br></br>
            <ul style={{ listStyle: 'none' }}><br></br>
              <li style={{ marginTop: '-10px',fontWeight:'bold' }}>Date Posted</li>
              <li>May 3, 2021</li><br></br>
              <li style={{ marginTop: '15px' ,fontWeight:'bold'}}>Location</li>
              <li>Chennai</li><br></br><br></br>
              <li style={{ marginTop: '5px',fontWeight:'bold' }}>Offered Salary:</li>
              <li >$450 - $500 / month</li><br></br>
              <li style={{ marginTop: '10px' ,fontWeight:'bold'}}>Expiration date</li>
              <li>mar 5,2024</li><br></br><br></br>
              <li style={{ marginTop: '5px' ,fontWeight:'bold'}}>Experience</li>
              <li>2 Years</li><br></br><br></br>
              <li style={{ marginTop: '-5px',fontWeight:'bold' }}>Gender</li>
              <li>Male</li><br></br>
              <li style={{ marginTop: '10px' ,fontWeight:'bold'}}>Qualification</li>
              <li>Associate Degree</li><br></br>
            </ul>
          </div>
        </div><br></br>
        <br></br>
        <div
          style={{
            height: '120px',
            width: '410px',
            marginLeft: '50px',
            borderRadius: '5px',
          }}
          className={`jdcu ${dark ? 'Djdcu':''}`}
        >
          <br></br>
          <span
            style={{
              fontSize: '20px',
              fontFamily: 'monospace',
              fontWeight: 'bold',
              marginLeft: '30px',
            }}
          >
            JOB SKILLS
          </span>
          <br></br>
          <br></br>
          <button
            style={{
            
              border: 'none',
              height: '30px',
              width: '100px',
              marginLeft: '20px',
              borderRadius: '10px',
            }}
          >
            JAVA
          </button>
          <button
            style={{
       
              border: 'none',
              height: '30px',
              width: '100px',
              marginLeft: '20px',
              borderRadius: '10px',
            }}
          >
            PHYTHON
          </button>
          <button
            style={{
              border: 'none',
              height: '30px',
              width: '100px',
              marginLeft: '20px',
              borderRadius: '10px',
            }}
          >
            C++
          </button>
        </div><br></br>
        <br></br>
        <div
          style={{
            height: '500px',
            width: '410px',
            marginLeft: '50px',
            borderRadius: '5px',
          }}
          className={`jdcu ${dark ? 'Djdcu':''}`}
        >
          <br></br>
          <span
            style={{
              fontSize: '20px',
              fontFamily: 'monospace',
              fontWeight: 'bold',
              marginLeft: '30px',
            }}
          >
            Contact Company
          </span>
          <br></br>
          <br></br>
          <input
            style={{
              height: '40px',
              width: '350px',
              marginLeft: '30px',
              border: 'none',
              borderRadius: '5px',
            }}
            placeholder='Name'
          ></input>
          <br></br>
          <br></br>
          <input
            style={{
              height: '40px',
              width: '350px',
              marginLeft: '30px',
              border: 'none',
              borderRadius: '5px',
            }}
            placeholder='Email id'
          ></input>
          <br></br>
          <br></br>
          <input
            style={{
              height: '40px',
              width: '350px',
              marginLeft: '30px',
              border: 'none',
              borderRadius: '5px',
            }}
            placeholder='Phone'
          ></input>
          <br></br>
          <br></br>
          <textarea
            style={{
              height: '150px',
              width: '350px',
              marginLeft: '30px',
              border: 'none',
              borderRadius: '5px',
            }}
            placeholder='Message...'
          ></textarea>
          <br></br>
          <br></br>
          <button
            style={{
              height: '40px',
              width: '355px',
              marginLeft: '30px',
              border: 'none',
              borderRadius: '5px',
              color: 'white',
              backgroundColor: 'Blue',
            }}
          >
            SEND
          </button>
        </div>
        <br></br>
        <br></br>
      </div>
      
      <div  className={`jwarning ${dark ? 'Dwarning':''}`} style={{marginTop:'-100px'}}>
      <br></br>
    <center><b>❌Beware of Scammers </b>We don't charge money for job offers  </center>
    </div><br></br>
    
<Footer/>

    </div>
  );
};

export default JobDescription1;
