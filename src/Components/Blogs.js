import React from 'react'
import '../CSS/Blogs.css'
import lg from '../Components/Images/br-logo-removebg-preview.png'
import lg2 from '../Components/Images/br-logo2.png'
import lg3 from '../Components/Images/br-logo3.jpg'
import { FaUser } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <div>
            <div className='blog-container'>
                <b>Blogs</b>
            </div>
            <div className='read-more'>
             
                {/* <div className='read-boxes'>
                    <img src={lg} className='lg' />
                    <b className='more-info'>Unleash Your Memory Power with<br></br> the Best Memory Learning App</b>
                    <span className='more-info2'>In today's fast-paced world, having a<br></br> sharp memory is a valuable asset.<br></br> Whether you're a student, a professional,<br></br> or someone who wants to enha...</span>
                    <div className='admin-date'>
                        <div className='admin'><FaUser /><b> Admin</b></div>
                        <div className='date'><SlCalender /><b> July 06, 2023</b></div>
                    </div>
                    <button className='read'><Link to='/brainyone' className='ln'>Read More</Link></button>

                </div> */}
                <div className='read-boxes'>
                    <img src={lg2} className='lg' />
                    <b className='more-info'>India's Best Innovative Platform</b>
                    <span className='more-info2'>In today's rapidly evolving world,innovation has become the cornerstone of progress in every sector. When it comes to education, India has witnes...</span>
                    <div className='admin-date'>
                        <div className='admin'><FaUser /><b> Admin</b></div>
                        <div className='date'><SlCalender /><b> June 27, 2023</b></div>
                    </div>
                    <button className='read'>Read More</button>


                </div>
        
             
                <div className='read-boxes'>
                    <img src={lg} className='lg' />
                    <b className='more-info'>Empowering Education: Exploring India's OTT Learning Platform</b>
                    <span className='more-info2'>In the digital age, India's education landscape has undergone a significant transformation with the rise of Over-the -Top (OTT) learning platforms....</span>
                    <div className='admin-date'>
                        <div className='admin'><FaUser /><b> Admin</b></div>
                        <div className='date'><SlCalender /><b> July 06, 2023</b></div>
                    </div>
                    <button className='read'><Link to='/brainythree' className='ln'>Read More</Link></button>

                </div>
                <div className='read-boxes'>
                    <img src={lg3} className='lg2' />
                    <b className='more-info'>Recollection Skills- TODAY NEED</b>
                    <span className='more-info2'>The important factor to know is that students stress + depression + anxiety + suicidal attempts (lack of recollection) are all related to their academ...</span>
                    <div className='admin-date'>
                        <div className='admin'><FaUser /><b> Admin</b></div>
                        <div className='date'><SlCalender /><b> July 12, 2021</b></div>
                    </div>
                    <button className='read'><Link to='/brainyfour' className='ln'>Read More</Link></button>


                </div>
                </div>
       

        </div>
    )
}

export default Blogs