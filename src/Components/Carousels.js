import React from 'react'
import Flickity from "react-flickity-component";
import '../CSS/Carousel.css'
import slide1 from '../Components/Images/asia.jpg'
import slide2 from '../Components/Images/best.jpg'
import slide3 from '../Components/Images/book.jpg'
import slide4 from '../Components/Images/top.jpg'
import slide6 from '../Components/Images/rajasthan.jpg'
import slide5 from '../Components/Images/mind.jpg'
import slide7 from '../Components/Images/live.png'
import slide8 from '../Components/Images/dainik.jpg'
import slide9 from '../Components/Images/indiabook.jpg'
import slide10 from '../Components/Images/indiatime.jpg'


const Carousels = () => {
    const flickityOptions = {
        autoPlay: 2000,
        pauseAutoPlayOnHover: false,
        wrapAround: true,
        groupCells: true, // Enable groupCells option
    };
    return (
        <Flickity options={flickityOptions} data-flickity='{ "groupCells": true }' >

            <div className="carousel-group">
                <div className='photos'>
                    <img src={slide1} className="slide1" />
                    <b className='aj'>Asia Book of Record</b>
                    <span className='ph-info'>Record Holder</span>
                </div>
                <div className='photos'>
                    <img src={slide2} className="slide1" />
                    <b className='aj'>Best Mnemonic Trainer A...</b>
                    <span className='ph-info'>India Book of Records</span>
                </div>
                <div className='photos'>
                    <img src={slide3} className="slide1" />
                    <b className='aj'>Guinness Book of World R...</b>
                    <span className='ph-info'>Record Holder</span>
                </div>

            </div>
                <div className='photos'>
                    <img src={slide4} className="slide1" />
                    <b className='aj'>Top 100 Delegate</b>
                    <span className='ph-info'>World Stage Ceremony</span>
                </div>
                <div className='photos'>
                    <img src={slide5} className="slide1" />
                    <b className='aj'>Rajsthan Patrika</b>
                    <span className='ph-info'>Indian Newspaper</span>
                </div>
                <div className='photos'>
                    <img src={slide6} className="slide1" />
                    <b className='aj'>Mind IT Column</b>
                    <span className='ph-info'>Rajsthan Patrika</span>
                </div>
                <div className='photos'>
                    <img src={slide7} className="slide1" />
                    <b className='aj'>Live 24</b>
                    <span className='ph-info'>India News Channel</span>
                </div>
                <div className='photos'>
                    <img src={slide8} className="slide1" />
                    <b className='aj'>Dainik Bhaskar</b>
                    <span className='ph-info'>Indian Newspaper</span>
                </div>
                <div className='photos'>
                    <img src={slide9} className="slide1" />
                    <b className='aj'>India Book of Record</b>
                    <span className='ph-info'>Record Holder</span>
                </div>
                <div className='photos'>
                    <img src={slide10} className="slide1" />
                    <b className='aj'>Times of India</b>
                    <span className='ph-info'>Indian Newspaper</span>
                </div>
                


        </Flickity>
        
    );
}

export default Carousels