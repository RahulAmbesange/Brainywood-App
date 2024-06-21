import React from 'react'
import '../CSS/Footer.css'
import Devices from '../Components/Images/download.webp'
import { Link } from 'react-router-dom'




const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="maincontainer">
                <div className="firstcontainer">
                    <Link to='/'><img src={Devices} alt="dsrc" className='device' id="Devicesrc" /></Link>
                    <span className='ftdata'>Quality Education should be Right for all, not<br/> their Privilege.</span>
                     <Link to='/ContactUs'>
                    <button className='contus'>Contact Us</button>
                    </Link>
                </div>

                <div className="MainScClass">
                <div className="secondContainer">
                    <Link to='/career' className='SC'>Career</Link>
                    <Link to='/community' className='SC'>Community</Link>
                    {/* <Link to='/courses' className='SC'>Courses</Link> */}
                    <Link to='/IMTSection' className='SC'>IMT section</Link>
                    <Link to='/DiscussionGroups' className='SC'>Discussion Groups</Link>
                    <Link to='/pricing' className='SC'>pricing</Link>
                </div>
                <div className="thirdContainer">
                    <Link to='/ContactUs' className='SC'>Contact us</Link>
                    {/* <Link to='/franchiseEnquiry' className='SC'>Franchise Enquiry</Link> */}
                    <Link to='/TermsOfUse' className='SC'>Terms of use</Link>
                    <Link to='/Privacy' className='SC'>Privacy policy</Link>
                    <Link to='/RefundPolicy' className='SC'>Refund policy</Link>
                    <Link to='/blogs' className='SC'>Blog</Link>
                    <Link to='/Services' className='SC'>Services</Link>


                </div>
                </div>
                <div className="fourthContainer">
                    <h2>Contact With Us</h2>
                    <div className="socialcontainer">
                    <Link to='/facebook' ><i class="fa-brands fa-facebook" id='icon'></i></Link>
                    <Link to='/instagram' ><i class="fa-brands fa-square-instagram" id='icon'></i></Link>
                    <Link to='/linkedin' ><i class="fa-brands fa-linkedin" id='icon'></i></Link>
                    <Link to='/youtube' ><i class="fa-brands fa-youtube" id='icon'></i></Link>
                    </div>
                    <span>Phone:- +917240077077</span>
                    <span>Email:- crm@brainywoodindia.com |<br /> support@brainywoodindia.com |<br /> vedicbrainsolutions@gmail.com</span>
                    <span>Address:- First floor, 17th,<br /> Badal Textile Market,<br/> PUR ROAD, Bhilwara, Rajasthan, 311001</span>
                    
                    <Link to='/ContactUs'>
                    <button className='contus'>Contact Us</button>
                    </Link>

                    <br />


                </div>


            </div>
            </div>
       
            
            <div className="txtdata">A Venture of Vedic Brain Solutions Pvt. Ltd.</div>
        </div>
    )
}

export default Footer;
