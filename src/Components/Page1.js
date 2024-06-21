import React from 'react'
import '../CSS/Page1.css'
import Devices from '../Components/Images/cleanup image.png'


const Home = () => {
  return (
    <div>
        
    <div className="Homecontainer1">
      <div className="page1">
        <h5 className='brainly'>Learning has never been easier</h5>

        <h1>Brainywood App is<br/> Available on all platforms</h1>

        <span className='skill'>Start learning the skills you have always been dreaming of.</span>

        <div className="devices">
           <span><div className="d1">📱</div><br/><div className="fr">Mobile</div> </span> 
            <span><div className="d1">💻</div><br/><div className="fr">Laptop</div></span>
            <span><div className="d1">🖥</div><br/><div className="fr">Desktop</div></span>
        </div>
          
        <div className="buttons">
        <a href="https://play.google.com/store/apps/details?id=your.package.name" target="_blank" rel="noopener noreferrer">
        <img
          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
          alt="Get it on Google Play"
          style={{ width: '150px', margin: '10px', cursor: 'pointer'  }}
        />
         </a>

         <button className="button1">App Store</button>
        
        </div>
    </div>

    <div className="Images">
     <img src={Devices} alt="Devices" className="srcDevices"/>
    </div>
   
    </div>

    </div>
  )
}

export default Home
