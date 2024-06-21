import React from 'react'
import Flickity from "react-flickity-component";
import '../CSS/Carousel.css'
import slide1 from '../Components/Images/ajtimes.jpg'
import slide2 from '../Components/Images/social.jpg'
import slide3 from '../Components/Images/ajtk.png'
import slide4 from '../Components/Images/arvind.jpg'
import slide6 from '../Components/Images/ct-times.jpg'
import slide5 from '../Components/Images/launch-event.jpg'
import slide7 from '../Components/Images/manish.jpg'
import slide8 from '../Components/Images/record-event.jpg'
import slide9 from '../Components/Images/shah.jpg'
import slide10 from '../Components/Images/tv.jpg'


const Carousel = () => {
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
                    <b className='aj'>Ajmer Times</b>
                    <span className='ph-info'>Presenting Student Record</span>
                </div>
                <div className='photos'>
                    <img src={slide2} className="slide1" />
                    <b className='aj'>Social Responsibility Aword</b>
                    <span className='ph-info'>Malaysia</span>
                </div>
                <div className='photos'>
                    <img src={slide3} className="slide1" />
                    <b className='aj'>Dilhi Ajjtak</b>
                    <span className='ph-info'>Educating Audience</span>
                </div>

            </div>
                <div className='photos'>
                    <img src={slide4} className="slide1" />
                    <b className='aj'>Arvind Kejariwal</b>
                    <span className='ph-info'>CM of delhi</span>
                </div>
                <div className='photos'>
                    <img src={slide5} className="slide1" />
                    <b className='aj'>CT Times</b>
                    <span className='ph-info'>Breaking World Record</span>
                </div>
                <div className='photos'>
                    <img src={slide6} className="slide1" />
                    <b className='aj'>Launch Event</b>
                    <span className='ph-info'>Addressing Media</span>
                </div>
                <div className='photos'>
                    <img src={slide7} className="slide1" />
                    <b className='aj'>Manish Sisodia</b>
                    <span className='ph-info'>Education Minister Delhi</span>
                </div>
                <div className='photos'>
                    <img src={slide8} className="slide1" />
                    <b className='aj'>Record Event -CT institute</b>
                    <span className='ph-info'>Successfull Record Created</span>
                </div>
                <div className='photos'>
                    <img src={slide9} className="slide1" />
                    <b className='aj'>Naseeruddin Shah</b>
                    <span className='ph-info'>Bollywood Actor</span>
                </div>
                <div className='photos'>
                    <img src={slide10} className="slide1" />
                    <b className='aj'>India TV</b>
                    <span className='ph-info'>Indian News Channel</span>
                </div>
                


        </Flickity>
        
    );
}

export default Carousel