import React from 'react'
import Flickity from "react-flickity-component";
import '../CSS/MoreAbout.css'
import '../Components/MoreAbout.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import slide1 from '../Components/Images/manish.jpg'
import slide2 from '../Components/Images/media.jpg'
import slide3 from '../Components/Images/india.jpg'
import slide4 from '../Components/Images/abp.jpg'
import slide6 from '../Components/Images/ved.jpg'
import slide5 from '../Components/Images/live-media.jpg'
import Slider from './Slider';

const MoreAbout = () => {
    const flickityOptions = {
        // autoPlay: true,
        autoPlay: 2000, // Set the autoplay interval in milliseconds (2000ms = 2 seconds)
        pauseAutoPlayOnHover: false, // Set to true if you want to pause autoplay on hover
        wrapAround: true, // Set to true for infinite looping
    };
    return (
        <div>
            <div className='about-container'>
                <b className='here'>Hear more about us from</b>

                <div className='tabs2'>
                    <Tabs
                        defaultActiveKey="Government & India"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="home" className='tab-head' title="Government & India">
                        <div className='main-tab'>
                            
                          <Slider/>
                           </div>
                        </Tab>
                        <Tab eventKey="profile" title="Newspapers">
                            <span className='tab-name'>Newspapers</span>
                        </Tab>
                        <Tab eventKey="profile" title="Intellectual Personalities">
                            <span className='tab-name'>Intellectual Personalities</span>
                        </Tab>
                        <Tab eventKey="profile" title="Profile">
                            <span className='tab-name'>Bollywood-Celebs</span>
                        </Tab>
                        <Tab eventKey="profile" title="Students">
                            <span className='tab-name'>Students</span>
                        </Tab>
                        <Tab eventKey="profile" title="Parents">
                            <span className='tab-name'>Parents</span>
                        </Tab>
                        <Tab eventKey="profile" title="Employees">
                            <span className='tab-name'>Employees</span>
                        </Tab>
                        <Tab eventKey="profile" title="Franchisees">
                            <span className='tab-name'>Franchisees</span>
                        </Tab>
                        <Tab eventKey="profile" title="Record & Seminars">
                            <span className='tab-name'>Record & Seminars</span>
                        </Tab>

                    </Tabs>
                </div>

            </div>

        </div>
    )
}

export default MoreAbout