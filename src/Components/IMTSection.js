import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../CSS/IMTSection.css'

const IMTSection = () => {
  return (
    <div>
      <div className='imt-container'>
        <b className='imt-head'>IMT Courses</b>
        <span className='imt-info1'>Brainywood is an Ed-tech company engaged in research & development in the field of innovative learning and brain<br></br>
          science having it’s headquarter in Rajasthan, India.</span>

      </div>
      <hr className='hr-section' />
      <div className='text-slider'>
        <div className='pin'>
          <b className='pin-emoji'>📌</b>

        </div>
        <div className='it-text'>
          <marquee><span className='text1-s'>welcome to India's Memory Test. Participate Now and Win the Tit</span></marquee>
        </div>

      </div>
      <hr className='hr-section' />
      <div className='imt-info'>
        <span className='imt1'>Welcome to <b className='imt-b'> India's Memory Test- 2024</b><br></br>Your Chance to Become a<b className='imt-b'>Memory King of India.</b></span>
      </div>
      <div className='imt-info'>
        <b className='imt-b'>What are the steps?</b>
        <span className='imt1'>Step 1:- Pay the IMT Registration Fee.</span>
      </div>
      <div className='imt-info'>
        <span className='imt1'>Step 2:- Complete the IMT Training- Double Your Memory Course. - The questions coming in the IMT - Level 1 will be asked from this course.</span>
      </div>
      <div className='imt-info'>
        <span className='imt1'>Step 3:- Once the IMT Fee is been paid, the test will appear automatically in the IMT Test Section on the test date. You will get notified at least 5 days before the test date by the examination<br></br> committee.</span>
      </div>
      <hr className='hr-section' />
      <div className='imt-tabs'>

        <Tabs
          defaultActiveKey="IMT"
          id="uncontrolled-tab-example"
          className="mb-3 imt-sec"
        >
          <Tab eventKey="IMT" title="IMT Training">
            <div className='imt-subinfo'>

              <span className='imt-text'> IMT Course not available!
              </span>
            </div>

          </Tab>

          <Tab eventKey="IMT Test" title="IMT Test">
            <div className='imt-subinfo'>
              <span className='imt-text'>Once the IMT Fee is been paid, the test will appear automatically here on the test date. You will get notified at least 5 days before the test date by the examination committee.
              </span>
            </div>

          </Tab>

        </Tabs>





      </div>
      <hr className='hr-section' />

    </div>
  )
}

export default IMTSection