import React from 'react'
import '../CSS/ContactUs.css'
import map from '../Components/Images/map (1).png'
import { FaPhone } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";
import Recaptche from '../Components/Images/captch-removebg-preview.png'

const ContactUs = () => {
    const handleClick = () => {
        // Your click event logic goes here
        document.write('Thanks for submitting!!!!');
      };
    return (
        <div>
            <div className='contact-c1'>
                <b>Contact Us</b>
            </div>
            <div className='contact-c2'>
                <img src={map} className='map' />
            </div>
            <div className='contact-c3'>
                <b className='get-in'>Get In Touch</b>
                <div className='get-boxes'>
                      <div className="get-container">
                    <div className='get1'>
                        <FaPhone className='phone-icon' />

                        <div className='get-info'>
                            <b className='customer'>Phone</b>
                            <span className='support'>FOR CUSTOMER SUPPORT<br></br>
                                ENQUIRY: +917240077077</span>
                            <span className='support'>FOR FRANCHISE PARTNER<br></br>
                                ENQUIRY: +919680096454</span>
                        </div>
                    </div>
                    </div>
                    <div className='get1'>
                        <TfiEmail className='email-icon' />

                        <div className='get-info'>
                            <b className='customer'>EMAIL</b>
                            <a href='crm@brainywoodindia.com |' className='support2'>crm@brainywoodindia.com |</a>
                            <a href='support@brainywoodindia.com |' className='support2'>support@brainywoodindia.com |</a>
                            <a href='vedicbrainsolutions@gmail.com|' className='support2'>vedicbrainsolutions@gmail.com |</a>



                        </div>
                    </div>
                    <div className='get1'>
                        <FaLocationDot className='loc-icon' />

                        <div className='get-info'>
                            <b className='customer'>ADDRESS</b>
                            <span className='support'>NEAR 9 NO. PETROL PUMP, NASIRABAD ROAD,<br></br> GOPALGANJ, NAGRA, AJMER(305001)<br></br>

                                HO- 17, FIRST FLOOR BADAL TEXTILE MARKET<br></br> BHILWARA, 311001</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className='contact-c4'>
                <div className='form-c'>
                    <b className='send send-msg'>Send Us A Massage</b>
                    <div className='all-content'>
                        <div className='form-content'>
                            <label className='lb-name'>Your Name</label>
                            <input type='text' id='name' placeholder='' required />
                            <label className='lb-name' >Phone Number</label>
                            <input type='text' id='name' placeholder='' required />
                            <label className='lb-name'>Email</label>
                            <input type='text' id='name' placeholder='' required />
                        </div>
                        <div className='required'>
                            <label className='lb-name'>Massage</label>
                            <textarea type="text" id='massage' placeholder=''></textarea>
                        </div>
                    </div>
                    <div className="Contactrobotclass">
                        <input type="checkbox" id="checkbox" />
                        <span className='Contactrobot'>I am not robot</span>
                        <img src={Recaptche} className='Contactrecaptcha' />
                    </div>
                </div>
                <button id='sub-btn' onClick={handleClick}>Submit</button>

            </div>

        </div>
    )
}

export default ContactUs