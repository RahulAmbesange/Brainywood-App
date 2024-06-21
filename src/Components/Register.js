import React from 'react'
import '../CSS/Register.css'
import signup from '../Components/Images/signup_left_img.jpg'
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <>
      <div className="Education">
        <div className="courses">
            <img src={signup} alt="" className="RegisterForm" />
        </div>

        <div className="account">
            <div className="current">
                <h1>Let’s Create Your Account</h1>
            </div>
            <div className='signin'>
           <p> Enter Your Mobile Number and Email to Sign up/Sign in to your<br/>Brainywood account.</p>
            </div>
            <div className="simple-steps1">
                <p>Register yourself for Free in 3 Simple Steps</p>

                </div>
                <div className="hr-line">
                <span>Step 1</span>
                <div className="line">
                <hr />  
                </div>
                </div>
            
            <div className="details">
            <div className="email">
            <input className="Enter" type="email" name=" " placeholder="Enter Your E-mail Address" />
            </div>
            <div className="mobileno">
            <input className="Enter" type="number" name="phone " placeholder="Enter Your Mobile Number" />
            </div>
            

            <div className="otp">
                <button>Get OTP</button>
            </div>
            </div>
            <div className="already">
      <p>
        Already have an account?{' '}
        <Link to="/DiscussionGroups" style={{ color: 'orangered' }}>
          Login
        </Link>
      </p>
    </div>

        </div>
        </div>  
    </>
  )
}

export default Register;

