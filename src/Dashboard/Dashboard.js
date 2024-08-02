import React from 'react'
import graph from '../Images/graph.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import { faStar } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  return (
    <div> 

<br></br> <br></br>

<span style={{fontSize:'25px',fontWeight:'bolder',marginLeft:'80px'}}>APPLICATION STATISTICS</span>
<br></br><br></br>
<br></br>

        <div style={{height:'200px',width:'1000px',display:'grid',gridTemplateColumns:'240px 240px 240px 240px',columnGap:'30px',marginLeft:'80px'}}>
        <div style={{height:'150px',backgroundColor:'white',borderRadius:'10px',display:'grid',gridTemplateColumns:'100px 120px',columnGap:'0px'}}>
          
          <div style={{height:'80px',marginTop:'30px',marginLeft:'20px',alignItems:'center',justifyContent:'center'}}><br></br>
          <FontAwesomeIcon icon={faSuitcase} style={{fontSize:'60px',marginLeft:'10px',color:'blue'}}/>

          </div>
          <div style={{height:'100px',marginTop:'25px',marginLeft:'20px'}}>
            <span style={{marginLeft:'70px',fontSize:'35px',color:'blue',fontWeight:'bold'}}>1</span><br></br><br></br>
            <span style={{color:'grey'}}>Applied jobs</span>
          </div>
          
        </div>
        <div style={{height:'150px',backgroundColor:'white',borderRadius:'10px',display:'grid',gridTemplateColumns:'100px 120px',columnGap:'0px'}}>
        <div style={{height:'80px',marginTop:'30px',marginLeft:'20px',alignItems:'center',justifyContent:'center'}}><br></br>
        <FontAwesomeIcon icon={faComment} style={{ fontSize: '60px', marginLeft: '10px', color: 'orange' }} />
          </div>
          <div style={{height:'100px',marginTop:'25px',marginLeft:'20px'}}>
            <span style={{marginLeft:'70px',fontSize:'35px',color:'orange',fontWeight:'bold'}}>0</span><br></br><br></br>
            <span style={{color:'grey'}}>Review</span>
          </div>
          
        </div>
        <div style={{height:'150px',backgroundColor:'white',borderRadius:'10px',display:'grid',gridTemplateColumns:'100px 120px',columnGap:'0px'}}>
        <div style={{height:'80px',marginTop:'30px',marginLeft:'20px',alignItems:'center',justifyContent:'center'}}><br></br>
        <FontAwesomeIcon icon={faEye} style={{ fontSize: '60px', marginLeft: '10px', color: 'red' }} />
          </div>
          <div style={{height:'100px',marginTop:'25px',marginLeft:'20px'}}>
            <span style={{marginLeft:'70px',fontSize:'35px',color:'red',fontWeight:'bold'}}>6</span><br></br><br></br>
            <span style={{color:'grey'}}>Views</span>
          </div>
          
        </div> 
        <div style={{height:'150px',backgroundColor:'white',borderRadius:'10px',display:'grid',gridTemplateColumns:'100px 120px',columnGap:'0px'}}>
        <div style={{height:'80px',marginTop:'30px',marginLeft:'20px',alignItems:'center',justifyContent:'center'}}><br></br>
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '60px', marginLeft: '10px', color: 'gold' }} />
          </div>
          <div style={{height:'100px',marginTop:'25px',marginLeft:'20px'}}>
            <span style={{marginLeft:'70px',fontSize:'35px',color:'gold',fontWeight:'bold'}}>0</span><br></br><br></br>
            <span style={{color:'grey'}}>Shortlisted</span>
          </div>
          
        </div>       
         </div>



        <div style={{height:'600px',width:'1000px',display:'grid',gridTemplateColumns:'700px 320px',marginLeft:'80px',columnGap:'30px'}}>
            <div style={{backgroundColor:'white',height:'500px',borderRadius:'10px'}}>
              <br></br>
              <img src={graph} style={{height:'400px'}}></img>
            </div>
            <div style={{backgroundColor:'white',height:'500px',borderRadius:'10px'}}>

<br></br>
                <span style={{marginLeft:'30px',fontSize:'20px',fontWeight:'bold'}}>NOTIFICATIONS</span>
            </div>
        </div>
       


    </div>
  )
}

export default Dashboard