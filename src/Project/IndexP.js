import React from 'react'
import '../Project/NewHome.css'

const Index = () => {
  return (
    <div>
        <div style={{height:'900px',width:'1520px',display:'grid',gridTemplateColumns:'820px 600px',columnGap:'100px'}} className='NhTop'>
<div>

<div style={{marginTop:'300px',fontSize:'50px',fontWeight:'bold',color:'white',marginLeft:'100px',width:'800px'}}>
<span >There Are 1000+ Postings Here</span><br></br>
<span>For You!</span>
</div>
<br></br>
<div style={{marginLeft:'100px'}}>
    <span style={{color:'white'}}>Find Jobs, Employment & Career Opportunities</span><br></br><br></br>
    <div style={{height:'40px',width:'250px',borderRadius:'10px'}}>
        <button style={{height:'40px',width:'250px',borderRadius:'10px',border:'none',backgroundColor:'tomato',color:'white'}} >EXPLORE JOBS</button>
        </div><br></br><br></br>
    <span style={{color:'white'}}>Popular Jobs : Designer Developer Web IOS PHP Senior Engineer
</span><br></br><br></br>
<div className='Nhpng1' style={{backgroundImage:'url("../Images/slider.png)'}}>
</div>
</div>

</div>
<div className='Nhpng' style={{backgroundImage:'url("../Images/slider.png)'}}>
</div>
</div>
<div className='Nhpng' style={{backgroundImage:'url("../Images/slider.png)'}}>
</div>
    </div>
  )
}

export default Index