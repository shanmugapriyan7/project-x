import React, { useState } from 'react';
import '../Login-skct/NSignup.css';
import { useNavigate } from 'react-router-dom';
import img2 from '../Images/loginimageS.webp';
import img3 from '../Images/JS.png';

const NSignup = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Login");
  };

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');

  const handleChangeN = (e) => {
    setName(e.target.value);
  };

  const handleChangeP = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeCP = (e) => {
    setCpassword(e.target.value);
  };

  const handleClick1 = () => {
    if (password.length < 7) {
      alert('Password must be at least 7 characters long.');
      return;
    }

    if (password !== cpassword) {
      alert('Passwords do not match.');
      return;
    }

    // You might want to perform registration logic here before navigating to Home
    // For now, directly navigating to Home
    navigate('/Home');
  };

  return (
    <>
      <div className='Sbo'>
        <br></br><br></br><br></br><br></br><br></br>
        <div className='Sdiv1'>
          <img className='Stech' src={img2} alt='' width={600} height={500}></img>
        </div>
        <div className='Sdiv2'>
          <img src={img3} alt='' width={300} className='Lskctlogo'></img><br></br><br></br>
          <form className='Slogin'>
            <span className='Swel'><b>REGISTER NOW</b></span><br></br>
            <br></br>
            <input onChange={handleChangeN} className='Lin1' placeholder='Name'></input><br></br><br></br>
            <input className='Sin1' placeholder='Password' type='password' onChange={handleChangeP}></input><br></br>
            <br></br>
            <input className='Sin1' placeholder='Confirm Password' type='password' onChange={handleChangeCP}></input><br></br>
            <br></br>
            <button className='Sbtn1' onClick={handleClick1}>Submit </button><br></br><br></br>
            <button className='Sbtn2' onClick={handleClick}>Already Have an Account? Click here</button>
            <br></br>
            <br></br>
          </form>
        </div>
        <br></br><br></br><br></br><br></br>
      </div>
    </>
  );
};

export default NSignup;
