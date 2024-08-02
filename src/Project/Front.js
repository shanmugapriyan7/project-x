import React from 'react'
import '../Project/NewHome.css';
import img1 from '../Images/JSN.png'
import img2 from '../Images/slider.png';
import { useNavigate } from 'react-router-dom';
const Front = () => {

  return (
    <div>
        <div>
        <div style={{height:'700px',width:'1520px',display:'grid',gridTemplateColumns:'820px 600px',columnGap:'100px'}} className='NhTop'>
<div>
<img src={img1} style={{height:'100px',width:'330px',marginTop:'10px',marginLeft:'100px'}}></img>
<div style={{marginTop:'100px',fontSize:'50px',fontWeight:'bold',color:'white',marginLeft:'100px',width:'800px'}}>
<span >There Are 1000+ Postings Here</span><br></br>
<span>For You!</span>
</div>
<br></br>
<div style={{marginLeft:'100px'}}>
    <span style={{color:'white'}}>Find Jobs, Employment & Career Opportunities</span><br></br><br></br>
    <div style={{height:'40px',width:'250px',borderRadius:'10px'}}>
        <button style={{height:'40px',width:'250px',borderRadius:'10px',border:'none',backgroundColor:'tomato',color:'white'}} href='/Login' >Login</button>
        </div><br></br><br></br>
    <span style={{color:'white'}}>Popular Jobs : Designer Developer Web IOS PHP Senior Engineer
</span><br></br><br></br>
<div className='Nhpng' style={{marginLeft:'700px',marginTop:'-500px'}}>
    <img src={img2} height={700}></img>
</div>
</div>

</div>

</div>

    </div>
    </div>
  )
}

export default Front