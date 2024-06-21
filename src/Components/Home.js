import React, { useState, useEffect } from 'react';
import Page1 from './Page1'; // Assuming Page1 component is imported from 'Page1.js'
import Page2 from './Page2'; // Assuming Page2 component is imported from 'Page2.js'
import '../CSS/HomePageSlider.css';
import brainydeom from '../Components/Images/ShakyBitsImg.jpg'
import tick from '../Components/Images/tickImg.png'
import image2 from '../Components/Images/bnImg copy.jpg'
// import React, { useState } from 'react';
// import bomb from '../Images/blob.jpeg'
// import off from '../Images/off.jpeg'
import Brainywood from '../Components/Images/download.webp'
import Videoslider from './Videoslider';


const HomePageSlider = () => {

  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };


  const [activePage, setActivePage] = useState('page1');

  const switchToNextPage = () => {
    setActivePage((prevPage) => (prevPage === 'page1' ? 'page2' : 'page1'));
  };

  const switchToPrevPage = () => {
    setActivePage((prevPage) => (prevPage === 'page1' ? 'page2' : 'page1'));
  };

  useEffect(() => {
    // Automatically switch between pages every 5 seconds
    const intervalId = setInterval(switchToNextPage, 5000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (

    <div className="slider-container">
      <div className="scroll-button left" onClick={switchToPrevPage}>
        {'<'}
      </div>
      <div className="slider-content">
        {activePage === 'page1' && <Page1 />}
        {activePage === 'page2' && <Page2 />}
      </div>
      <div className="scroll-button right" onClick={switchToNextPage}>
        {'>'}
      </div>

      <div className="Secondcontainer">
        <div className="Secondsubcontainer1">
          <iframe src="https://www.youtube.com/embed/54LxZf0eMk0?si=5YRrlpfGfuim2Sgg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='sheranvideo'></iframe>
        </div>

        <div className="secondsubcontainer2">
          <span className='training'>Indias first brain training program</span>

          <h1 className='HomeFirstLearning'>India's best innovative learining platform equipped with brain scienve</h1>

          <p className='braomskills'>India's first brain training programs whivh makes FirstLearning easy, effective, permanent and converts knowledge into skills. Make your studies interesting and Meaningful</p>

          <button className="more">Know More➡️</button>
        </div>
      </div>



      <div className="thirdcontainer">
        <div className="thirdsubcontainer1">

          <div className="training">4th Dimension's of Education</div>

          <h1 className='FirstLearning'>Introduction 4th dimension's of education</h1>


          <p className='braomskills skills2'>Training of Retention and Recollection Skills to make study easy, enjoyable, effective and everlasting. It lays down the ultimate foundation of desired success.</p>

          <div className="sudysolution">
            <div className="Homesl1"><img src={tick} alt="tick" className="ticksrc sr2" /> Complete Study Solution at One Place</div>

            <div className="Homesl1 "><img src={tick} alt="tick" className="ticksrc src2" /> Techniques for Struggling students</div>

            <div className="Homesl1"><img src={tick} alt="tick" className="ticksrc src2" /> Subjects into Audio-Visual Content</div>

            <div className="Homesl1" id='sl5'><img src={tick} alt="tick" className="ticksrc src4" /> Specialised Memory Courses</div>

          </div>
          </div>

          <div className="thirdsubcontainer2">


            <img src={brainydeom} alt="brainydemo" className="brainysrc" />
          </div>
        </div>
        <div />
     

      <div className="FourthContainer">
        <h1 className='cv'>Concept Videos</h1>
        <span className="concept">Training of Retention and Recollection Skills to make study easy, enjoyable, effective and everlasting. It lays down the ultimate foundation of desired success.</span>


        <div className="videoInformation">
          <div className="videoButtons">
            <div className="videobtn1">
              <button className={activeButton === 1 ? 'activeButton ac-btn' : ''} onClick={() => handleButtonClick(1)} id='vdContainer1'>
                4th director eduction
              </button>
            </div>

            <div className="videobtn1">
              <button className={activeButton === 2 ? 'activeButton ac-btn' : ''} onClick={() => handleButtonClick(2)} id='dContainer2'>
                Inventor and their Invention
              </button>
            </div>

            <div className="videobtn1">
              <button className={activeButton === 3 ? 'activeButton ac-btn' : ''} onClick={() => handleButtonClick(3)} id='Container3'>
                Jallianwala Bagh Massacre
              </button>
            </div>


            <div className="videobtn1">
              <button className={activeButton === 4 ? 'activeButton ac-btn' : ''} onClick={() => handleButtonClick(4)} id='dContainer4'>
                Prime Minister of India
              </button>
            </div>

            <div className="videobtn1">
              <button className={activeButton === 5 ? 'activeButton ac-btn' : ''} onClick={() => handleButtonClick(5)} id='dContainer5'>
                Link Method
              </button>
            </div>

            <div className="videobtn1">
              <button className={activeButton === 6 ? 'activeButton ac-btn' : ''} onClick={() => handleButtonClick(6)} id='dContainer6'>
                Diagram Method
              </button>
            </div>
          </div>

          <div className="videoContainer">
            <iframe src="https://www.youtube.com/embed/2fbzk8u0ncc?si=U2WI3radb6wb56Pp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
              className={activeButton === 1 ? 'visible' : 'hidden'} id='vdoContainer1'
            ></iframe>

            <iframe src="https://www.youtube.com/embed/54LxZf0eMk0?si=dbJFtnE4hFoMFJ_L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
              className={activeButton === 2 ? 'visible' : 'hidden'} id='vdoContainer1'
            ></iframe>

            <iframe src="https://www.youtube.com/embed/q5qnUQjqtWs?si=E57nugCQMYaqMW-W" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
              className={activeButton === 3 ? 'visible' : 'hidden'} id='vdoContainer1'
            ></iframe>

            <iframe src="https://www.youtube.com/embed/Vj0J2aeq2zg?si=9RvorMBN5_MepwDJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
              className={activeButton === 4 ? 'visible' : 'hidden'} id='vdoContainer1'
            ></iframe>

            <iframe src="https://www.youtube.com/embed/5TCDUHSeMD4?si=4V2PeC0fcBq9AtCT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
              className={activeButton === 5 ? 'visible' : 'hidden'} id='vdoContainer1'
            ></iframe>

            <iframe src="https://www.youtube.com/embed/qJ2ZzvwwHZA?si=b24BNFPl6RvSdNwL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
              className={activeButton === 6 ? 'visible' : 'hidden'} id='vdoContainer1'
            ></iframe>
          </div>
        </div>

      </div>

      <div className="fifthContainer">
        <div className="frsImgcontainer">
          <img src={image2} alt="Stickimg" className="imgsrc3" />
        </div>

        <div className="Sscontainer">
          <div className="training">A gift which you will open again and again</div>

          <h1 className='FirstLearning'>Gift Yourself the Joy of FirstLearning</h1>

          <div className="listofThree">
            <div className="Homesl1"><img src={tick} alt="tick" className="ticksrc" /> Scientific Approach, Holistic Development, Synchronize</div>

            <div className="Homesl1"><img src={tick} alt="tick" className="ticksrc" /> Left - Right Brain and Develop Audio - Visual Memory</div>

            <div className="Homesl1"><img src={tick} alt="tick" className="ticksrc" /> Explore all courses at One Price.</div>

            <div className="Homeintroducrotyoffer">
              <h2 className='white'>Get Introductory Offer</h2><br />
              <div className="MainContainer">
                <div className="fr">
                  <div className="blueC">10% Off</div>
                </div>
                <div className="sr">
                  <div className="cupancode">
                    Use Coupon Code
                  </div>
                  <div className="joy">joy10</div>
                </div>
              </div>


            </div>

            <div className="orangeContainer">

              <h4>Konw More➡️</h4>
              {/* <div className="whitebtn"></div>
           <img src={bomb} alt="bomb" className="bombsrc" /> */}
            </div>
          </div>




        </div>
      </div>
      {/* <div className="slidebarbutton">
            <h1>Hear more about us from</h1>
            <div className="scbuttons">
              <button className="btn3">Governement & Media</button>
              <button className="btn3">Newspaper</button>
              <button className="btn3">Intellectual Personalities</button>
              <button className="btn3">Bolliwood-Celebs</button>
              <button className="btn3">Students</button>
              <button className="btn3">Parents</button>
              <button className="btn3">Employees</button>
              <button className="btn3">Franchisees</button>
              <button className="btn3">Records & Seminars</button>
            </div>
          </div> */}



      <div className="PopularCourses">
        <h1>Most Popular Courses</h1>
        <div className='all-c'>
          <Videoslider />
        </div>



        <button className="btn4">View all Courses➡️</button>
      </div>



     <div className="main-calender">
      <div className="blueCalendar">
        <img src={Brainywood} alt="" className="Branywoodsrc" />
        <h2 className='footerpage'>Download the BrainyWood App !!</h2>
        <a href="https://play.google.com/store/apps/details?id=your.package.name" target="_blank" rel="noopener noreferrer">
        <img
          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
          alt="Get it on Google Play"
          style={{ width: '150px', margin: '10px', cursor: 'pointer'  }}
        />
         </a>
         
         <button className="button1 btnblue">App Store</button>
      </div>
      </div>

    </div>

  );
};

export default HomePageSlider;