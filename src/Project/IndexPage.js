import React from 'react'
import '../Project/IndexPage.css'
import i1 from '../Images/Iconb.png'
import i2 from '../Images/iconh.png'
import i3 from '../Images/icona.png'
import i4 from '../Images/iconc.png'
import i5 from '../Images/icone.png'
import i6 from '../Images/iconi.png'
import i7 from '../Images/iconhr.png'
import i8 from '../Images/icons.png'
import i9 from '../Images/iconw.png'
import i10 from '../Images/icong.png'
import i11 from '../Images/res.jpg'
import i12 from '../Images/prep.jpg'
import i13 from '../Images/men.jpg'
import i14 from '../Images/edu.jpg'
import log from '../Images/JS.png'
import '../Project/NewHome.css';
import img1 from '../Images/JSN.png'
import img2 from '../Images/slider.png';
import { useNavigate } from 'react-router-dom'
const IndexPage = () => {
  const navigate1=useNavigate()
  const handleClick1=()=>{
    navigate1("/About")
  }
  const navigate2=useNavigate()
  const handleClick2=()=>{
    navigate2("/Login")
  }
  const navigate3=useNavigate()
  const handleClick3=()=>{
    navigate3("/Signup")
  }

  return ( 
   
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
    <button style={{height:'40px',width:'250px',borderRadius:'10px',border:'none',backgroundColor:'tomato',color:'white',cursor:'pointer'}} onClick={handleClick2}>Login</button>
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
  )
}

export default IndexPage