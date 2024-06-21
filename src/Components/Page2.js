import React from 'react'
import '../CSS/Page2.css'
import captcha from '../Components/Images/captch.png'

const AboutUs = () => {
  return (
    <div>
    <div className="containerF">
     <form className='formdata'>
      <span>Please enter the following details</span><br/>
       <input type="text" placeholder='Name' className='fmdata' /><br/>
       <input type="Email" placeholder='Email' className='fmdata' /><br/>
       <input type="Number" placeholder='Mobile Number' className='fmdata'/><br/>
       <input type="text" placeholder='City' className='fmdata'/><br/>
       

             <select className='fmdata fmdata2'>
              <option value="Class">Class</option>
              <option >Class 1</option>
              <option >Class 2</option>
              <option >Class 3</option>
              <option >Class 4</option>
              <option >Class 5</option>
              <option >Class 6</option>
              <option >Class 7</option>
              <option >Class 8</option>
              <option >Class 9</option>
              <option >Class 10</option>
              <option >Class 11Art</option>
              <option >Class 12Commrce</option>
              <option >Class 13Science</option>
              
              
            </select>

       <div className="robot"> 
        <input type="checkbox" className='check' /><div className="Irb">I am not  robot </div><img src={captcha} alt="captcha" className="captchasrc" />
       </div>
        <button className='btn1'>Schedule it for free</button>
     </form>

   
   

     
     

     <div className="OnlineLearning">
        <h1>The future of online learning is here</h1>

        <h2 className='newcorses'>New courses added every month</h2>

        <h2>Students deserve better</h2>
         
        <div className="firstmaincontainer">
        <div className="firstcontainers">
          <span>✅ Stress free education</span>
          <span>✅  Memorise anything</span>
        </div>

        <div className="firstcontainers fs3">
        <span>✅ Holistic development</span>
        <span>✅ Reasonable price</span>
        </div>

        <div className="firstcontainers fst2">
        <span>✅ Scientific approach</span>
        <span className='lst'>✅ Innovative learning</span>
        </div>
        </div>
     </div>
    </div>
    </div>
  )
}

export default AboutUs
