import React from 'react'
import Flickity from "react-flickity-component";
import '../CSS/Slider.css'
import slide1 from '../Components/Images/manish.jpg'
import slide2 from '../Components/Images/media.jpg'
import slide3 from '../Components/Images/india.jpg'
import slide4 from '../Components/Images/abp.jpg'
import slide6 from '../Components/Images/ved.jpg'
import slide5 from '../Components/Images/live-media.jpg'


const Slider = () => {
    const flickityOptions = {
        // autoPlay: true,
        autoPlay: 2000, // Set the autoplay interval in milliseconds (2000ms = 2 seconds)
        pauseAutoPlayOnHover: false, // Set to true if you want to pause autoplay on hover
        wrapAround: true, // Set to true for infinite looping
    };
    return (
        <div className='slider-section'>
            <Flickity options={flickityOptions} >
                <div className='slider-box'>
                    <div className='sl1'>
                        <img src={slide1} className='slides1' />
                        <b className='gvr'>Manish Sisodia</b>
                        <span className='gvr-info'>Deputy CM & Education Minister<br></br> Of Delhi</span>
                    </div>
                    <div className='info-box'>
                        <span className='inform'>Dr. Vinod Sharma techniques are a practical <br></br>guide on brain science-mnemonics. I hope<br></br> his techniques will be very helpful for<br></br> students to reduce their stress and study<br></br> time. Wish him and branywood all the best<br></br> for future endeavors</span>
                    </div>
                </div>
                <div className='slider-box'>
                    <div className='sl1'>
                        <img src={slide2} className='slides1' />
                        <b className='gvr'>Laounch Event</b>
                        <span className='gvr-info'>Media Coverage</span>
                    </div>
                    <div className='info-box'>
                        <span className='inform'>Dr. Vinod Sharma of Brainywood addressing <br></br> the media at the launch event and presenting the new records</span>
                    </div>
                </div>
                <div className='slider-box'>
                    <div className='sl1'>
                        <img src={slide3} className='slides1' />
                        <b className='gvr'>India TV</b>
                        <span className='gvr-info'>Indian News Channel</span>
                    </div>
                    <div className='info-box'>
                        <span className='inform'>Live Program telecasted on india Tv news <br></br> channel to address the audience how brain<br></br>science helps to improve memory and how one can implement it in day-to-day life.</span>
                    </div>
                </div>
                <div className='slider-box'>
                    <div className='sl1'>
                        <img src={slide4} className='slides1' />
                        <b className='gvr'>ABP News</b>
                        <span className='gvr-info'>Indian News Channel</span>
                    </div>
                    <div className='info-box'>
                        <span className='inform'>Dr. Vinod Sharma of Brainywood being <br></br>awarded the india book of records</span>
                    </div>
                </div>
                <div className='slider-box'>
                    <div className='sl1'>
                        <img src={slide5} className='slides1' />
                        <b className='gvr'>Live MEdia Coverage</b>
                        <span className='gvr-info'>Rajasthan News Channel</span>
                    </div>
                    <div className='info-box'>
                        <span className='inform'>Akshay a student of  Brainywood with Dr.<br></br> Vinod Sharma addressing media and news <br></br> Channels about the national record he <br></br>created and registered his name in india <br></br>book of records</span>
                    </div>
                </div>
                <div className='slider-box'>
                    <div className='sl1'>
                        <img src={slide6} className='slides1' />
                        <b className='gvr'>Live 24</b>
                        <span className='gvr-info'>Indian News Channel</span>
                    </div>
                    <div className='info-box'>
                        <span className='inform'>Dr. Vinod Sharma of Brainywood been<br></br> invited to the studio at Live 24 to discussion<br></br>on the indian education system and how brain science can help students in reducing<br></br>their study stress and can help them to <br></br> achieve their desired success</span>
                    </div>
                </div>
            </Flickity>
        </div>
    );
}

export default Slider