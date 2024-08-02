import React, { useState, useEffect } from 'react';
import '../Project/Job.css';
import log from '../Images/JS.png';
import img4 from '../Images/edit.png';
import img5 from '../Images/envelope.png';
import img6 from '../Images/jdp.png';
import img7 from '../Images/question.png';
import img8 from '../Images/settings.png';
import img9 from '../Images/log-out.png';
import img14 from '../Images/y2.jpg';
import img15 from '../Images/slider21.png';
import img16 from '../Images/slider2.png';
import imgy0 from '../Images/y0.jpg';
import imgy1 from '../Images/y1.jpg';
import imgy2 from '../Images/y2.jpg';
import imgy3 from '../Images/y3.jpg';
import imgy4 from '../Images/y4.jpg';
import imgy5 from '../Images/y5.jpg';
import imgy6 from '../Images/y6.jpg';
import imgy7 from '../Images/y7.jpg';
import imgy8 from '../Images/y8.jpg';
import imgy9 from '../Images/y9.jpg';
import imgy10 from '../Images/y10.jpg';
import imgy11 from '../Images/y11.jpg';
import imgy12 from '../Images/y12.jpg';
import { useNavigate } from 'react-router-dom';
import Jobcard1 from '../Jobcard/Jobcard1';
import Jobcard2 from '../Jobcard/Jobcard2';
import Jobcard3 from '../Jobcard/Jobcard3';
import Jobcard4 from '../Jobcard/Jobcard4';
import Jobcard5 from '../Jobcard/Jobcard5';
import Jobcard6 from '../Jobcard/Jobcard6';
import Jobcard7 from '../Jobcard/Jobcard7';
import Jobcard8 from '../Jobcard/Jobcard8';
import Jobcard9 from '../Jobcard/Jobcard9';
import Jobcard10 from '../Jobcard/Jobcard10';
import Footer from '../Project/Footer';
import Header from './Header';
const Job1 = () => {
  const [isMenuActive, setMenuActive] = useState(false);
  const [full, setFull] = useState(true);
  const [part, setPart] = useState(true);
  const [intern, setIntern] = useState(true);
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedValuel, setSelectedValuel] = useState('');
  const[cbe,setCbe]=useState(true);
  const[chn,setChn]=useState(true);
  const[ker,setKer]=useState(true);
  const[ban,setBan]=useState(true);
  const menuToggle = () => {
    setMenuActive(!isMenuActive);
  };

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleSelectChange1 = (event) => {
    setSelectedValuel(event.target.value);
  };

  useEffect(() => {
    if (selectedValue === 'Part Time') {
      setPart(true);
      setFull(false);
      setIntern(false);
    } else if (selectedValue === 'Full Time') {
      setPart(false);
      setFull(true);
      setIntern(false);
    } else if (selectedValue === 'Internship') {
      setPart(false);
      setFull(false);
      setIntern(true);
    }
    else if(selectedValue==='Default'){
      setFull(true);
      setIntern(true);
      setPart(true);
    }
  }, [selectedValue]);

  useEffect(() => {
    if (selectedValuel === 'Coimbatore') {
      setCbe(true);
      setChn(false);
      setKer(false);
      setBan(false)
    } else if (selectedValuel === 'Chennai') {
      setCbe(false);
      setChn(true);
      setKer(false);
      setBan(false)
    } else if (selectedValuel === 'Kerala') {
      setCbe(false);
      setChn(false);
      setKer(true);
      setBan(false)
    }
    else if(selectedValuel==='Default'){
      setCbe(true);
      setChn(true);
      setKer(true);
      setBan(true)
    }
    else if(selectedValuel==='Bangalore'){
      setCbe(false);
      setChn(false);
      setKer(false);
      setBan(true)
    }
  }, [selectedValuel]);
  useEffect(() => {
    if (selectedValue === 'Part Time') {
      setPart(true);
      setFull(false);
      setIntern(false);
    } else if (selectedValue === 'Full Time') {
      setPart(false);
      setFull(true);
      setIntern(false);
    } else if (selectedValue === 'Internship') {
      setPart(false);
      setFull(false);
      setIntern(true);
    }
    else if(selectedValue==='Default'){
      setFull(true);
      setIntern(true);
      setPart(true);
    }
  }, [selectedValue]);


  const navigateh = useNavigate();
  const handleClickH = () => {
    navigateh('/Home');
  };

  return (
    <div>

       <Header/>
        
        <div className='jsearch'>
<br></br><br></br><br></br><br></br>
<div style={{width:'1050px',marginTop:'100px'}}>
<span className='shh'>
  
There Are 1000+ Postings Here
</span><br></br>
<span className='shh2'>
  
 For you!
</span>
<h3 style={{color:'white'}} className='st'>Find Jobs, Employment & Career Opportunities</h3>
<br></br>
    <span  className='st'>Popular Categories : Designer Developer Web IOS PHP Senior Engineer</span><br></br><br></br><br></br><br></br>
    <img src={img15} style={{marginLeft:'70px'}}></img>
        </div>
        <div style={{width:'400px',marginLeft:'1100px',marginTop:'-380px' ,height:'600'}}>
          <img src={img16} width={500} style={{marginLeft:'-100px'}}></img>
          

        </div>
        </div>
        <div className='jcontent'>
<br></br><br></br>
<span style={{fontSize:'35px',marginLeft:'100px',color:'purple',fontWeight:'bold'}}>"It's not what you achieve, it's what you overcome. That's what defines your career."</span>
<br></br><br></br><br></br>
<br></br>
<div className='jfil'>
  <ul>
<li><button className='filb'>Filter</button></li>
<li className='jsho'>Showing 1 – 10 of 18 results</li>
<li>
  
  <select className='jsel'  onChange={handleSelectChange}>
<option value="Default">Default</option>
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Internship">Internship</option>
</select></li>



<li><select className='jsel1' onChange={handleSelectChange1}>
<option value="Default">Default</option>
        <option value="Coimbatore">Coimbatore</option>
        <option value="Chennai">Chennai</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Kerala">Kerala</option>
        </select></li>

  </ul>
</div>
<br></br><br></br>
<div class="grid-container">
{full  && cbe && (   
    <Jobcard1/>
    
    )}
{part && chn && (<Jobcard2/>)}

{full && ban && ( <Jobcard3/>)}
{part && cbe && (<Jobcard4/>)}
{full && chn && ( <Jobcard5/>)}
{part && ker && (<Jobcard6/>)}
{part && chn && (<Jobcard7/>)}
{part && cbe && (<Jobcard8/>)}
{part && cbe && (<Jobcard9/>)}
{full && chn &&( <Jobcard10/>)}
</div>
<br>
</br><br></br><br></br><br></br>
<center>
<button className='nextp1'>1</button>
<button className='nextp2'>2</button>
<button className='nextp3'>→</button></center>
      
<br></br><br></br>  </div>
<div className='warning'>
      <br></br>
    <center><b>❌Beware of Scammers </b>We don't charge money for job offers  <br></br></center>
    
    </div>
  
      <Footer/>
    </div>
  )
}

export default Job1