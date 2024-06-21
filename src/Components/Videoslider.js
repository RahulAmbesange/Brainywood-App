import React from 'react'
import Flickity from "react-flickity-component";
import '../CSS/Videoslider.css'



const Videoslider = () => {
    const flickityOptions = {
        autoPlay: true,
        autoPlay: 3000, // Set the autoplay interval in milliseconds (2000ms = 2 seconds)
        pauseAutoPlayOnHover: false, // Set to true if you want to pause autoplay on hover
        wrapAround: true, // Set to true for infinite looping
    };
    return (
        <div className='v-slider'>
          <Flickity options={flickityOptions} >
            <div className='sls1'>
            <iframe src="https://www.youtube.com/embed/54LxZf0eMk0?si=5YRrlpfGfuim2Sgg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='v-slide'></iframe>
            <iframe  src="https://www.youtube.com/embed/qJ2ZzvwwHZA?si=b24BNFPl6RvSdNwL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='v-slide'
        
        ></iframe>               
            </div>
            <div className='sls1'>
            <iframe  src="https://www.youtube.com/embed/5TCDUHSeMD4?si=4V2PeC0fcBq9AtCT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
         className='v-slide'
        ></iframe>
         <iframe  src="https://www.youtube.com/embed/Vj0J2aeq2zg?si=9RvorMBN5_MepwDJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
          className='v-slide'
        ></iframe>
                              
            </div>
            <div className='sls1'>
            <iframe  src="https://www.youtube.com/embed/q5qnUQjqtWs?si=E57nugCQMYaqMW-W" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
        className='v-slide'
        ></iframe>
        <iframe  src="https://www.youtube.com/embed/54LxZf0eMk0?si=dbJFtnE4hFoMFJ_L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
        className='v-slide'
        ></iframe>

                              
            </div>
          
        </Flickity>
        </div>
    );
}

export default Videoslider