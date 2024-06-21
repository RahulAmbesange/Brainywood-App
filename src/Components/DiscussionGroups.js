import React from 'react'
import '../CSS/DiscussionGroups.css'
import signup from '../Components/Images/signup_left_img.jpg'
import {Link} from 'react-router-dom'

const DiscussionGroups = () => {
  return (
    <>
      <div className="Education">
        <div className="courses">
         <img src={signup} alt="" className="signupsrc" />
        </div>

        <div className="account">
          <div className="current">
            <h1>Login to Continue </h1>
          </div>
          <div className='signin'>
            <h2> Welcome Back!</h2>
          </div>
          <div className="simple-steps">
            <p>Please enter your details</p>

          </div>


          <div className="rdo-btn">
            <div className="radio">
              <input className='rd' id="radio-1" name="radio" type="radio" defaultChecked="" />
              <label htmlFor="radio-1" className="radio-label">
                Email
              </label>
            </div>
            <div className="radio">
              <input id="radio-1" name="radio" type="radio" />
              <label htmlFor="radio-2" className="radio-label">
                Mobile
              </label>
            </div>

          </div>
          <div className="details">
            <div className="email">
              <input className="Enter" type="email" name=" " placeholder="Enter Your E-mail Address" />
            </div>
            <div className="mobileno">
              <input className="Enter" type="password" name="phone " placeholder="Password" />
            </div>

          </div>

         <div className="keep-forgot">          <div className="keep">
              <input type="checkbox" id="vehicle1" name="vehicle1" defaultValue="sign" />
              <label className='keep' htmlFor="vehicle1">Keep me signed in</label>
          </div>

          <div className="forgot">
            <p>Forgot Password ?</p>
          </div>

          </div>

          <div className="lg-btn">
          <div className="otp">
            <button>Login</button>
          </div>
          </div>

          <div className="already">
      <p>
        Already have an account?{' '}
        <Link to="/Register" style={{ color: 'orangered' }}>
          Register
        </Link>
      </p>
    </div>
        </div>
      </div>
    </>
  )
}

export default DiscussionGroups