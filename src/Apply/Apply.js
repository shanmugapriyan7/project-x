import React, { useState } from 'react'
import '../Apply/Apply.css'
const Apply = () => {
    const [isApply, setIsApply] = useState(false);
  
    const ApplyJob = () => {
      setIsApply(!isApply);
    };

  return (
    <div>

        <div  style={{height:'695px',width:'1515PX'}} className={`Apply ${isApply ? 'job' : ''}`}>

            <br></br> <br></br> <br></br> <br></br> <br></br>
<div style={{width:'600px',height:'400px',backgroundColor:'yellow',borderRadius:'20px',marginLeft:'400px'}}>
    <center><br></br><br></br><br></br>
   <input style={{width:'300px',height:'40px'}}></input><br></br><br></br>
   <input style={{width:'400px',height:'40px'}}></input><br></br><br></br>
    <button type='file' style={{width:'400px',height:'60px'}}>Upload Resume</button><br></br><br></br>
    <textarea style={{width:'400px',height:'100px'}}></textarea><br></br><br></br>
    <input type='checkbox' style={{marginLeft:'-180px'}}></input>
    <span>
       Terms and conditions Apply </span><br></br><br></br>
   <button style={{width:'400px',height:'40px'}}>APPLY JOB</button><br></br><br></br>
   </center>

</div>
</div>
    </div>
  )
}

export default Apply