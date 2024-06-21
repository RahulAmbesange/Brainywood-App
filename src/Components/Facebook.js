import React from 'react'
import '../CSS/Facebook.css'

const Facebook = () => {
  return (
    <>

    <div className="MainContainer">
        <div className="FacebookForm">
            <h2 className='Fdata'>Connect with Brainywood on<br/> Facebook</h2>
            <input type='text' className='EmailBox'  placeholder='Email Adress or Phone Number'/>
            <input type='password' className='EmailBox' placeholder='Password'/>
            <button className='EmailBox btnn'>Log in</button>
            <h4 className='Forget'>Forgottent Password?</h4>

            <p className='or'>_or__</p>
        
            <button className='NewAccount'>Create New Account</button>
        </div>
    </div>
    </>
  )
}

export default Facebook