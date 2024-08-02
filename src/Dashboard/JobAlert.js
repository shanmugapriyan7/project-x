import React from 'react'

const JobAlert = () => {
  return (
    <div>
        
        <br></br> <br></br> <br></br>
        <span style={{marginLeft:'80px',fontSize:'25px',fontWeight:'bolder'}}>JOB ALERT</span>
        <br></br> <br></br> <br></br>
        
        <div style={{height:'150px',width:'1000px',backgroundColor:'white',marginLeft:'80px',borderRadius:'10px'}}>
        <input placeholder='Search' style={{border:'none',height:'50px',width:'200px',backgroundColor:'lightgrey',marginLeft:'40px',marginTop:'20px',borderRadius:'10px'}}></input>
       <span style={{marginLeft:'400px',color:'grey'}}>Sort by :</span>
        <select style={{border:'none',height:'50px',width:'200px',backgroundColor:'lightgrey',marginLeft:'20px',marginTop:'20px',borderRadius:'10px'}}>
    <option value="option1" style={{}}>Default</option>
    <option value="option2">Newest</option>
    <option value="option3">Oldest</option>
</select>
<br></br><br></br>
<span style={{color:'grey',marginLeft:'40px'}}>No job alert found...</span>
        </div>
        <br></br> <br></br> <br></br>
        
    </div>
  )
}

export default JobAlert