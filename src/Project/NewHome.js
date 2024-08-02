import React, { useEffect, useState } from 'react'
import Header from './Header'
import '../Project/NewHome.css'
import img1 from '../Images/news1.jpg'
import img2 from '../Images/news2.jpg'
import img3 from '../Images/news3.jpg'
import img4 from '../Images/news4.jpg'
import img5 from '../Images/news5.jpg'
import img11 from '../Images/1.webp'
import img21 from '../Images/2.webp'
import img31 from '../Images/3.webp'
import h1 from '../Images/resume.png'
import h2 from '../Images/pie.png'
import h3 from '../Images/f3.png'
import h4 from '../Images/slider.png'
import Footer from './Footer'
import HomeHeader from './HomeHeader'
import SlidingCard1 from '../SlidingCard1/SlidingCard1'
import Jobcard1 from '../Jobcard/Jobcard1'
import Jobcard2 from '../Jobcard/Jobcard2'
import Jobcard3 from '../Jobcard/Jobcard3'
import { useNavigate } from 'react-router-dom'
const NewHome = () => {




const navigate=useNavigate();
const Explore=()=>{
navigate("/Job1");
}
const [myIndex, setMyIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMyIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  const showSlide = (index) => {
    const slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[index].style.display = "block";
  };

  useEffect(() => {
    showSlide(myIndex);
  }, [myIndex]);







  return (
    <div>
<HomeHeader/>
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
        <button style={{height:'40px',width:'250px',borderRadius:'10px',border:'none',backgroundColor:'tomato',color:'white'}} onClick={Explore}>EXPLORE JOBS</button>
        </div><br></br><br></br>
    <span style={{color:'white'}}>Popular Jobs : Designer Developer Web IOS PHP Senior Engineer
</span><br></br><br></br>

</div>

</div>
<div className='Nhpng'>
</div>

</div>


{/*How it works.............*/}

<div style={{height:'600px',width:'1518px'}}><br></br><br></br><br></br>
<center><span style={{fontSize:'35px',fontWeight:'bold'}}>How It Works ?</span></center><br></br>
<center><span style={{color:'grey'}}>job for anyone,anywhere</span></center><br></br><br></br><br></br>
<div style={{display:'grid',gridTemplateColumns:'350px 350px 350px',columnGap:'50px',marginLeft:'170px'}}>

    
    <div style={{height:'350px',borderRadius:'10px'}}>
<img src={h1} alt='' style={{height:'180px',marginLeft:'75px'}}></img>
<br></br>
<br></br>
<center>
<span style={{fontSize:'20px',fontWeight:'bold'}}>Free Resume Assesments</span><br></br><br></br>
<span style={{color:'grey'}}> Employeers on average spennd 31 seconds </span><br></br>
<span style={{color:'grey'}}>scanning resume to identify potential</span><br></br>
<span style={{color:'grey'}}>matches</span>

</center>
    </div>
    <div style={{height:'350px',borderRadius:'10px'}}>

    <img src={h2} alt='' style={{height:'180px',marginLeft:'75px'}}></img>
<br></br>
<br></br>
<center>
<span style={{fontSize:'20px',fontWeight:'bold'}}>Job Fit Scoring</span><br></br><br></br>
<span style={{color:'grey'}}> Our new fit meter shows</span><br></br>
<span style={{color:'grey'}}>you which jobs are most relevant</span><br></br>
<span style={{color:'grey'}}>to your skills and interests</span>

</center>
    </div>
    <div style={{height:'350px',borderRadius:'10px'}}>

<img src={h3} alt='' style={{height:'170px',marginLeft:'80px'}}></img>
<br></br>
<br></br>
<center>
<span style={{fontSize:'20px',fontWeight:'bold'}}>Help Every Step of the Way</span><br></br><br></br>
<span style={{color:'grey'}}> Our Carrer section is full of information </span><br></br>
<span style={{color:'grey'}}>to help you identify</span><br></br>
<span style={{color:'grey'}}>the right fit</span><br></br>

</center>

    </div>
</div>

</div>





{/*Popular Categories */}



<div style={{height:'fitcontent',width:'1520px'}} className='Nhjobcat'>
<div style={{height:'150px'}}><br></br>
 <center>   <span style={{fontSize:'30px',fontWeight:'bold',color:'white',fontFamily:'cursive'}}>POPULAR CATEGORIES</span><br></br>
    <span style={{color:'white'}}>2020 jobs live – 293 added today.</span></center><br></br>
    <button style={{height:'30px',width:'200px',borderRadius:'10px',border:'none',backgroundColor:'tomato',color:'white',marginLeft:'1200px'}} onClick={Explore}>EXPLORE JOBS</button>
</div>

<SlidingCard1/>
<br></br><br></br><br></br><br></br><br></br><br></br>
</div>


{/*Popular Cities */}


<div style={{height:'550px',width:'1520px'}}>
    <br></br>   <br></br>
    <center>
<h1 style={{fontSize:'30px',color:'purple'}}>TRENDING JOBS</h1> </center><br></br>
<button style={{height:'30px',width:'200px',borderRadius:'10px',border:'none',backgroundColor:'tomato',color:'white',marginLeft:'1200px'}} onClick={Explore}>EXPLORE JOBS</button>
<br></br><br></br>
<div style={{display:'grid',gridTemplateColumns:'400px 400px 400px ',columnGap:'40px',marginLeft:'110px',marginTop:'50px'}}>
<Jobcard1/>
<Jobcard2/>
<Jobcard3/>  
<br></br> <br></br>
</div>
</div>

<div className='slide'>


 

<img className="mySlides" src={img11} style={{ width: '1800', height: 400 }} alt="" />
<img className="mySlides" src={img21} style={{ width: '1800',  height: 400}} alt="" />
<img className="mySlides" src={img31} style={{ width: '1800', height: 400 }} alt="" />



</div>
<br></br><br></br>

<div style={{height:'900px',width:'1520px'}} className='NhArticle'>
    <br></br><br></br><br></br>
   <center> <span style={{fontSize:'25px',fontWeight:'bold',color:'white'}}>Recent News Articles</span></center>
   <center> <span style={{color:'white'}}>Fresh job related news content posted each day.</span></center>
<br></br><br></br><br></br>


<div style={{height:'fitcontent',width:'650px', backgroundColor:'white',marginLeft:'90px',borderRadius:'10px'}} >
<img src={img1} style={{marginLeft:'10px',marginTop:'10px',width:'630px',borderRadius:'10px'}}></img><br></br>
<span style={{marginLeft:'20px',color:'grey',}}>March 2,2024</span><br></br>
<span style={{marginLeft:'20px',fontSize:'20px',fontFamily:'revert-layer',fontWeight:'bold'}}>Attract Sales And Profits</span><br></br>
<br></br>
</div>


<div style={{height:'600px',width:'650px',marginTop:'-625px',marginLeft:'790px',display:'grid',gridTemplateColumns:'300px 300px',columnGap:'40px',rowGap:'20px'}} className='NharticleCard'>
    <div style={{backgroundColor:'white',height:'300px',borderRadius:'10px'}} >
        <img src={img2} style={{height:'230px',width:'280px',marginTop:'10px',marginLeft:'11px',borderRadius:'10px'}}></img><br>
        </br>
        <span style={{marginLeft:'20px',color:'grey',}}>March 2,2024</span><br></br>
        <span style={{marginLeft:'20px',fontSize:'15px',fontFamily:'revert-layer',fontWeight:'bold'}}>5 Tips For Your Job Interviews</span><br></br>

    </div>



    <div style={{backgroundColor:'white',height:'300px',borderRadius:'10px'}} >
    <img src={img3} style={{height:'230px',width:'280px',marginTop:'10px',marginLeft:'11px',borderRadius:'10px'}}></img><br>
        </br>
        <span style={{marginLeft:'20px',color:'grey',}}>March 2,2024</span><br></br>
        <span style={{marginLeft:'20px',fontSize:'15px',fontFamily:'revert-layer',fontWeight:'bold'}}>The Evening of The Holiday</span><br></br>

    </div>



    <div style={{backgroundColor:'white',height:'300px',borderRadius:'10px'}}>
    <img src={img4} style={{height:'230px',width:'280px',marginTop:'10px',marginLeft:'11px',borderRadius:'10px'}}></img><br>
        </br>
        <span style={{marginLeft:'20px',color:'grey',}}>March 2,2024</span><br></br>
        <span style={{marginLeft:'20px',fontSize:'15px',fontFamily:'revert-layer',fontWeight:'bold'}}>The Modern Art of Coffee</span><br></br>

    </div>



    <div style={{backgroundColor:'white',height:'300px',borderRadius:'10px'}}>
    <img src={img5} style={{height:'230px',width:'280px',marginTop:'10px',marginLeft:'11px',borderRadius:'10px'}}></img><br>
        </br>
        <span style={{marginLeft:'20px',color:'grey',}}>March 2,2024</span><br></br>
        <span style={{marginLeft:'20px',fontSize:'13px',fontFamily:'revert-layer',fontWeight:'bold'}}>HTML, CSS, JS Developer (1 – 3 Yrs Exp.)</span><br></br>

    </div>
</div>
<br></br><br></br><br></br><br></br><br></br>
</div>
<Footer/>
    </div>
  )
}

export default NewHome