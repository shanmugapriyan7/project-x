import React, { useState } from 'react';
import "../Login-skct/Loginn.css";
import { useNavigate } from 'react-router-dom';
import img2 from '../Images/loginimage3.jpg';
import img3 from '../Images/JS.png';
import axios from 'axios';

const Login = () => {
  const [name, setName] = useState('');
  const [Password, setPassword] = useState(''); // Add state for password
  const [apidata, setApidata] = useState('');
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/NSignup");
  };

  const handleClickH = () => {
    navigate("/");
  };

  
    const [email, setEmail] = useState('');
    
  
    const handleSignIn = () => {
      // Fetch data from the API
      axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
          // Check if the provided email and password match any user
          const user = response.data.find(user => user.email === name && user.email === Password);
          if (user) {
            // If user is found, navigate to home page
            navigate('/Home');
          } else {
            // If user is not found, display an error or redirect to signup page
            alert('Invalid email or password');
            // navigate('/SignUp');
          }
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  
  
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div className='Lbo'>
        <br></br><br></br><br></br><br></br><br></br>
        <div className='Ldiv1'>
          <img className='Ltech' src={img2} alt='' width={600} height={500}></img>
        </div>
        <div className='Ldiv2'>
          <img src={img3} alt='' width={300} className='Lskctlogo'></img><br></br><br></br>
          <div className='Llogin'>
            <span className='Lwel'><b>Welcome Back</b></span><br></br>
            <span className='Lpls'>Please Sign in to continue</span><br></br><br></br><br></br>
            <input onChange={handleChange} className='Lin1' placeholder='Name' value={name}></input><br></br><br></br>
            <input onChange={handlePasswordChange} className='Lin1' placeholder='Password' type='password' value={Password}></input><br></br><br></br>
            <button className='Lbtn1' onClick={handleSignIn}>Login </button><br></br><br></br>
            <button className='Lbtn2' onClick={handleClick} style={{ cursor: 'pointer' }}>Don't Have an Account? Click Here</button>
            <center>
              <button className='Lbtn2' onClick={handleClickH} style={{ cursor: 'pointer', marginLeft: '-40px' }}>Back</button>
            </center>
            <br></br>
            <br></br>
          </div>
        </div>
        <br></br><br></br><br></br><br></br>
      </div>
    </>
  );
};

export default Login;
