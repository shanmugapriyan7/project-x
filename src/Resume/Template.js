import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Template.css';
import img1 from '../Images/template1.png'
import img2 from '../Images/template2.png'
const Template = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/resume1");
};
  const handleClick2 = () => {
  navigate("/resume1A");
};
  return (
    <div>
      <h1 style={{color:'purple',textAlign:'center'}}>Build Your resume</h1>
      <div className='c1-template43' style={{marginTop:'-90px'}}>
        <img src={img1} onClick= {handleClick} className='grid-img1-template43' alt='Image1' />
        <p className='grid1-template43'style={{marginLeft:'300px',fontSize:'20px',color:'purple'}}>Basic</p>
      </div>

      <div className='c2-template43'>
        <img src={img2} onClick= {handleClick2} className='grid-img2-template43' alt='Image2' />
        <p className='grid2-template43' style={{marginLeft:'800px'}}>Classic</p>
      </div>
    </div>
  ); 
}

export default Template;