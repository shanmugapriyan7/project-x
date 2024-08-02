import React from 'react'

const ChangePassword = () => {
  return (
    <div>
        <br></br> <br></br> <br></br>
        <span style={{fontSize:'25px',fontWeight:'bolder',marginLeft:'80px'}}>Change Password</span> <br></br> <br></br> <br></br>
        <div style={{backgroundColor:'white',marginLeft:'80px',width:'1000px',height:'400px',borderRadius:'20px'}}> <br></br>
            <span style={{fontSize:'20px',fontWeight:'bold',color:'grey',marginLeft:'40px'}}>Old Password :</span><br></br>
            <input style={{height:'40px',width:'700px',marginLeft:'40px',border:'none',borderRadius:'10px',backgroundColor:'lightgrey',marginTop:'20px'}}></input><br></br><br></br>
            <span style={{fontSize:'20px',fontWeight:'bold',color:'grey',marginLeft:'40px'}}>New Password :</span><br></br>
            <input style={{height:'40px',width:'700px',marginLeft:'40px',border:'none',borderRadius:'10px',backgroundColor:'lightgrey',marginTop:'20px'}}></input><br></br><br></br>
            <span style={{fontSize:'20px',fontWeight:'bold',color:'grey',marginLeft:'40px'}}>Conform Password :</span><br></br>
            <input style={{height:'40px',width:'700px',marginLeft:'40px',border:'none',borderRadius:'10px',backgroundColor:'lightgrey',marginTop:'20px'}}></input>< br></br><br></br>
            <button style={{backgroundColor:'green',height:'40px',width:'200px',color:'white',border:'none',borderRadius:'10px',marginLeft:'40px'}}>Save Changes</button>
        </div>
        <br></br> <br></br> <br></br> <br></br>
    </div>
  )
}

export default ChangePassword