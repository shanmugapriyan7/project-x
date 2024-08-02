import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({ email: '', password: '', mobile: '' });
  const [formErrors, setFormErrors] = useState({ email: '', password: '', mobile: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    if (Object.values(errors).every((error) => error === '')) {
      // Form is valid, handle form submission
      // For example, you can call an API to register the user
      console.log('Form is valid, submitting...');
      
    } else {
      // Form is invalid, update formErrors state
      setFormErrors(errors);
    }
  };

  const validate = (values) => {
    let errors = { email: '', password: '', mobile: '' };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 4) {
      errors.password = 'Password should be at least 4 characters long';
    }

    if (!values.mobile) {
      errors.mobile = 'Mobile number is required';
    } else if (values.mobile.length !== 10) {
      errors.mobile = 'Mobile number should be 10 digits';
    }

    return errors;
  };
    const handleClick = () =>
    {
      navigate("/Login")
      
    }
    const handleClick1 = () => {
      const errors = validate(formValues);
      if (Object.values(errors).some((error) => error !== '')) {
        // Form has errors, update formErrors state
        setFormErrors(errors);
        // Prevent further execution
        return;
      }
  
      // If form is valid, perform login action
      navigate("/Home");
      alert("Successfully Logged in!");
    };

  return (
    <div>
      <header class="header43-signup">
  <h1 class="website-name43-signup">Velai.in</h1>
  <button onClick = {handleClick} class="signup-button-header43-signup">Login</button>
</header>
    <div class="hole43-signup">
      <div class="container43-signup">
        <div class="form-container43-signup signup-container43-signup">
           <form action="#" class="form43-signup">
              <div class="login-text43-signup">Create your account</div>
              <div class="social-container43-signup">
                <a href = "https://www.foundit.in/rio/login" class="facebook-login143-signup"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70" height="32" viewBox="0 0 48 48">
                <path fill="#3F51B5" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path>
                <path fill="#FFF" d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"></path>
                </svg></a>

                <a href = "#" class="linkedin-login143-signup"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70" height="32" viewBox="0 0 48 48">
                <path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"></path>
                <path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path>
                <path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path>
                <path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
                </svg></a>

                <a href = "#" class="google-login143-signup"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70" height="32" viewBox="0 0 48 48">
                <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                <path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                <path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                <path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                </svg></a>
              </div>
              
              <label>Email ID</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email ID"
                className="input1-43-signup"
                value={formValues.email}
                onChange={handleChange}
              />
              <p className="error-message-signup">{formErrors.email}</p>

              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your Password"
                className="input2-43-signup"
                value={formValues.password}
                onChange={handleChange}
              />
              <p className="error-message-signup">{formErrors.password}</p>

              <label>Mobile Number</label>
              <input
                type="number"
                name="mobile"
                placeholder="Enter your Mobile Number"
                className="input3-43-signup"
                value={formValues.mobile}
                onChange={handleChange}
              />
              <p className="error-message-signup">{formErrors.mobile}</p>


              <button onClick={handleClick1} class="button43-signup">Continue</button>
           </form>
        </div>
        <div>
          <img src= "https://png.pngtree.com/png-vector/20220330/ourmid/pngtree-online-recruitment-concept-with-a-businessman-holds-big-magnifier-searching-for-png-image_4520229.png" class= "login-image43-signup"></img>
          
        </div>
      </div>
    </div>
    </div>
  )
}

export default Signup;