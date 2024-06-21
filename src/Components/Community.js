import React from 'react'
import Flickity from "react-flickity-component";
import '../CSS/Slider.css'
import '../CSS/MoreAbout.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../CSS/Community.css'

const Community = () => {
    const flickityOptions = {
        // autoPlay: true,
        autoPlay: 2000, // Set the autoplay interval in milliseconds (2000ms = 2 seconds)
        pauseAutoPlayOnHover: false, // Set to true if you want to pause autoplay on hover
        wrapAround: true, // Set to true for infinite looping
    };
    return (
        <div>
            <div className='about-container'>
                <b className='here'>Community</b>

                <div className='tabs2'>
                    <Tabs
                        defaultActiveKey="All"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="All" className='tab-head' title="All">
                            <div className='main-tab'>
                                <div className='value-btn'>
                                    <button className='value'>Share Something Valuable</button>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="Tranding" title="Tranding">
                             <button className='value'>Share Something Valuable</button>
                           
                        </Tab>
                        <Tab eventKey="Challenges" title="Challenges">
                        <button className='value'>Share Something Valuable</button>
                           
                        </Tab>
                        <Tab eventKey="Past-Challenges" title="Past-Challenges">
                        <button className='value'>Share Something Valuable</button>
                        </Tab>




                    </Tabs>
                </div>

            </div>

        </div>
    )
}

export default Community