import React from 'react';
import '../SlidingCard1/SlidingCard1.css'; // Import your styles
import { useNavigate } from 'react-router-dom';

const AnimatedFlexCards = () => {
  
const navigate=useNavigate();
const Explore=()=>{
navigate("/Job1");
}




  return (
    <div className="wrapper">
      <div className="container">
        <input type="radio" name="slide" id="c1" defaultChecked className="slideinput" />
        <label htmlFor="c1" className="card">
          <div className="row">
            <div className="icon">1</div>
            <div className="description">
              <h4 onClick={Explore}>Accounting / Finance</h4>
              <p>(1 open position)</p>
            </div>
          </div>
        </label>

        <input type="radio" name="slide" id="c2" className="slideinput" />
        <label htmlFor="c2" className="card" >
          <div className="row">
            <div className="icon">2</div>
            <div className="description">
              <h4 onClick={Explore}>Marketing</h4>
              <p>(5 open positions)</p>
            </div>
          </div>
        </label>

        <input type="radio" name="slide" id="c3" className="slideinput" />
        <label htmlFor="c3" className="card" >
          <div className="row">
            <div className="icon">3</div>
            <div className="description">
              <h4 onClick={Explore}>Design</h4>
              <p>(7 open positions)</p>
            </div>
          </div>
        </label>

        <input type="radio" name="slide" id="c4" className="slideinput" />
        <label htmlFor="c4" className="card" >
          <div className="row">
            <div className="icon">4</div>
            <div className="description">
              <h4 onClick={Explore}>Development</h4>
              <p>(6 open positions)</p>
            </div>
          </div>
        </label>

        {/* New Cards */}
        <input type="radio" name="slide" id="c5" className="slideinput" />
        <label htmlFor="c5" className="card" >
          <div className="row">
            <div className="icon">5</div>
            <div className="description">
              <h4 onClick={Explore}>Project Management</h4>
              <p>(1 open project)</p>
            </div>
          </div>
        </label>

        <input type="radio" name="slide" id="c6" className="slideinput" />
        <label htmlFor="c6" className="card" >
          <div className="row">
            <div className="icon">6</div>
            <div className="description">
              <h4 onClick={Explore}>Customer Service</h4>
              <p>(4 open positions)</p>
            </div>
          </div>
        </label>

        {/* Two More Additional Cards */}
        <input type="radio" name="slide" id="c7" className="slideinput" />
        <label htmlFor="c7" className="card" >
                    <div className="row">
            <div className="icon">7</div>
            <div className="description">
              <h4 onClick={Explore}>Health and Care</h4>
              <p>(6 open positions)</p>
            </div>
          </div>
        </label>

        <input type="radio" name="slide" id="c8" className="slideinput" />
        <label htmlFor="c8" className="card">
          <div className="row">
            <div className="icon">8</div>
            <div className="description">
              <h4 onClick={Explore}>Automotive Jobs</h4>
              <p>(5 open positions)</p>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default AnimatedFlexCards;
