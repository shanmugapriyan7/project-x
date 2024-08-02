import React from 'react'

const Deleteprofile = () => {
  return (
    <div>
        <br></br> <br></br>

            <span style={{fontSize:'25px',fontWeight:'bolder',marginLeft:'80px'}}>DELETE PROFILE</span>
<br></br><br></br>
<br></br>

<div style={{backgroundColor:'white',height:'380px',marginLeft:'80px',width:'1000px',borderRadius:'10px'}} >

    <br></br>
    <br></br>
    <br></br>
<span style={{fontSize:'20px',fontWeight:'bold',marginLeft:'40px'}}>Are you sure! You want to delete your profile.</span><br></br>
<span style={{marginLeft:'40px',color:'grey'}}>This can't be undone!</span><br></br>
<br></br>
<span style={{color:'grey',marginLeft:'40px',}}>Please enter your login Password to confirm:</span><br></br><br></br>
<input placeholder='Password' style={{height:'50px',width:'700px',marginLeft:'40px',backgroundColor:' lightgrey',border:'none',borderRadius:'10px'}}></input><br></br>
<button style={{height:'40px',width:'150px',marginLeft:'40px',marginTop:'20px',color:'white',backgroundColor:'tomato',border:'none',borderRadius:'10px'}}>Delete Profile</button>
</div>
<br></br><br></br><br></br>
    </div>
  )
}

export default Deleteprofile