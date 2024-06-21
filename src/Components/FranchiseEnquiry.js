import React from 'react'
import '../CSS/FranchiseEnquiry.css'
import { TbPuzzle2 } from "react-icons/tb";
import brainy from './Images/logo-brainy.png'
import founder from './Images/heroimage.png'
import join from './Images/brainywood-video.png'
import minimum from './Images/affordable (1).png'
import { LiaHandHoldingUsdSolid } from "react-icons/lia";
import { LiaUsersSolid } from "react-icons/lia";
import { TbCertificate } from "react-icons/tb";
import signed from './Images/certificate.png'
import profit from './Images/profit.png'
import activity from './Images/support.png'
import plan from './Images/personalized.png'
import office from './Images/management.png'
import one from './Images/i1.png';
import two from './Images/i2.png';
import three from './Images/i3.png';
import four from './Images/i4.png';
import five from './Images/i5.png';
import rone from './Images/review1.png';
import rtwo from './Images/review2.png';
import rthree from './Images/review3.png';
import rfour from './Images/review4.png';
import rfive from './Images/review5.png';
import trust from './Images/trust.png';
import approved from './Images/approved.png';
import book from './Images/open-book.png';
import book1 from './Images/brainsc.png';
import book2 from './Images/videocs.png';
import profile from './Images/profilepic.png';
import person from './Images/founder.png';
import log from './Images/lo.png';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import na from "./Images/news2.png"
import middle from "./Images/seminar.png"
import hindu from "./Images/hinulogo.png"
import stories from "./Images/new4.png"
import new1 from "./Images/new1.png"

// import Flickity from "react-flickity-component";




const Fenquiry = () => {
  const youtubeVideoIds = [
    'YULKgLW4IVo',
    'zYkKcZIiAOg',
    'yRV68AAK1nk',
    'B2MK9R5DxMU',
    '0ozbgkW-TnU',
    'SaXa5PfxSs4'
    // '51mNhh80fyw',
    // 'nm_c2KLaZ9A',
    // 'Ny-Fyz4cHjI',
    // 'AA-O01ArMho'
    // 'mYIFsyPQH28',
    // 'iiDj4g1Zl-8',
    // '-bMVyk8-9V8'
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay speed in milliseconds (e.g., 5000ms or 5s)
  };





  return (
    <>
      <div className="franchise">
        <div className="science-company">
          <div className="Award">

            <div className="most-awarded">
              <img src={brainy} alt="" className="franchiselogo" />
            </div>
            <div className="set">
              <div className="investment">
                <h1>
                  With the most Awarded<br/>Brain  Science Company.
                </h1>
                <p>Investment starts with Rs 1 Lakh. </p>
              </div>
              <button className='record'>Yes, i am intrested</button>
            </div>
          </div>
          <div className="asia-books">
            <img src={founder} alt="" className="hr-img" />
          </div>
        </div>
        <div className="opportunity">
          <div className="business">
            <h2>
              Brain Science Business Partner A<br />Unique Education Business<br />Opportunity
            </h2>
          </div>



          <div className='number-info'>
            <div className="source">
              <div className="great">
                <h2 class="f-num text-5xl">01</h2>
                <h5>
                  Great Income
                </h5>
                <p>
                  Unique Business Idea that gives you High Income
                </p>
              </div>
              <div className="brand">
                <h2 class="f-num text-5xl">02</h2>
                <h5>Superfast Returns</h5>
                <p>
                  Build a Business associated with World Renowned Company
                </p>
              </div>
            </div>

            <div className="world">
              <div className="returns">
                <h2 class="f-num text-5xl">03</h2>
                <h5>Good Brand Image</h5>
                <p>
                  Low Investment that gives you Maximum Returns in short span of time
                </p>
              </div>
              <div className="smart">
                <h2 class="f-num text-5xl">04</h2>
                <h5>Smart Work</h5>
                <p>
                  Work Smartly & efficiently with all the assistance & support provided by the company
                </p>
              </div>
            </div>


          </div>



        </div>
        <div className="make-money">
          <div className="want-join">
            <h4>Learn how to make money with Brainywood Franchise Business</h4>
          </div>
          <div className="enquiry">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/YULKgLW4IVo?si=Jn3MInaFak3VqqAG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            {/* <img src={join} alt="" className="brainy-video" /> */}
            
          </div>
          <div className="want">
            <button className='join-btn'>Yes, I want to join</button>
          </div>
        </div>



        <div className="top-features">
          <div className="franchise-plans">
            <h2>
              Top Features Of Franchise Plans
            </h2>
            <p>
              Brainywood Franchise Plans come with<br />extensive support and amazing features
            </p>
          </div>


          <div className="action">

            <div className="start">
              <div className="franchise-box">
                <div className="goal">
                  {/* <img src={minimum} alt="" className="change" /> */}
                  <LiaHandHoldingUsdSolid className="dollar" />
                </div>
                <div className="only">
                  <h5>Affordability</h5>
                  <p>Brainywood Franchise Plans are affordable as it starts with Minimum Investment of Rs.1 Lakh only.</p>
                </div>

              </div>
              <div className="franchise-box">
                <div className="goal goal2">
                  {/* <img src={signed} alt="" className="change" /> */}
                  <TbCertificate className='dollar' />
                </div>
                <div className="only only2">
                  <h5>Certification</h5>
                  <p>Duly Signed Certification by Dr. Vinod Sharma is provided to all the Franchise  Holders.
                  </p>
                </div>
              </div>
              <div className="franchise-box">
                <div className="goal goal3">
                  <img src={profit} alt="" className="change" />
                </div>
                <div className="only only3">
                  <h5>Profit from Day 1</h5>
                  <p>Brainywood Franchise is a Unique Business Idea that yields profit from Day 1 itself!</p>
                </div>
              </div>
            </div>
            <div className="holders">
              <div className="franchise2">
                <div className="goal goal4">
                  <img src={activity} alt="" className="change" />
                </div>
                <div className="interest">
                  <h5>
                    Business Activity Support
                  </h5>
                  <p>To help you kickstart your business and hit the income goals, complete Business Activity Support is provided from the experts.
                  </p>
                </div>
              </div>
              <div className="franchise2">
                <div className="goal ">
                  {/* <img src={plan} alt="" className="change" /> */}
                  <TbPuzzle2 className='dollar' />
                </div>
                <div className="interest">
                  <h5>Personalized Action Plan</h5>
                  <p>As per your Interest, Goal & Investment Budget, our experts provide you a Personalised Action Plan.
                  </p>
                </div>
              </div>
              <div className="franchise2">
                <div className="goal goal2">
                  {/* <img src={office} alt="" className="change" /> */}
                  <LiaUsersSolid className='dollar' />
                </div>
                <div className="interest  interest2">
                  <h5>Complete Office Support</h5>
                  <p>Brainywood provides a complete CRM & Office Support to help you set up a business.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className='Maintestimonial'>
          <div className='Testtext'>
            <span> Testimonial</span>
            {/* <Tabs
              defaultActiveKey="profile"
              id="fill-tab-example"
              className='hedtext' fill >
              <Tab eventKey="home" className='htags' title="Company"> */}
              <h4>Company</h4>
              <div className='companyline'>
                <hr/>
              </div>
                <div className='maincompany'>
                  <div className='submain'>
                    <div className='news'>
                      <div className='n1'>
                        <img src={new1} alt='logo' />
                        <div className='sntext'>
                          <span>www.business-standard.com</span>
                          <span>November 25, 2021</span>
                        </div>
                        <h2><u>Brainywood-a unique Edtech start-up</u></h2>
                        <p>The Rajasthan based Guinness World Record Holder Ed-Tech start-up Brainywood founded by Dr. Vinod Sharma and Dhruv Suwalka.</p>
                      </div>


                      <div className='n2'>
                        <img src={hindu} alt='logo' />
                        <div className='sntext'>
                          <span>www.hindustanmetro.com</span>
                          <span>November 15, 2021</span>
                        </div>
                        <h2><u>Brainywood is India's First 4th Dimension Learning App</u></h2>
                        <p>Indian Ed-tech Industry has been significantly booming post covid. More than 2000+ Ed-Tech start-ups serve the Indian education sector, including Byjus, Vedantu, Unacamedy, Udemy, focusing on digital learning and teaching students of different age groups.</p>
                      </div>
                    </div>

                    <div className='middleimg'>
                      <img src={middle} alt='logo' />
                    </div>

                    <div className='news'>
                      <div className='n1'>
                        <img src={na} alt='logo' />
                        <div className='sntext'>
                          <span>www.entrepreneurstories.com</span>
                          <span>October 25, 2021</span>
                        </div>
                        <h2><u>Learning Of A Different Kind</u></h2>
                        <p>Art of studying workshop on education psychology was held at the Evershine Towers, Vaishali Nagar, Jaipur.</p>
                      </div>


                      <div className='n2' id='imgs'>
                        <img src={stories} alt='logo' />
                        <div className='sntext'>
                          <span>www.hindustanmetro.com</span>
                          <span>November 25, 2021</span>
                        </div>

                        <h2><u>Brainywood-India's First Learning App providing Stress-Free Education</u></h2>
                        <p>The Guinness World Record Holder Ed-tech start-up Brainywood launched its online learning app in the middle of this year’s pandemic. This is India’s first learning app that helps students provide a sharper memory and helps them in creating a stress-free environment.</p>
                      </div>
                    </div>


                  </div>
                </div>
              {/* </Tab> */}
{/* 
              <Tab className='htags' eventKey="profile" title="Students/Schools">
                <div className='vidostyle'>
                  <SlickSlider {...settings}>
                    {youtubeVideoIds.map((videoId, index) => (
                      <div key={index}>
                        <iframe iframe className='vido' width="704" height="360" src={https://www.youtube.com/embed/${videoId}} title={YouTube Video ${index}} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                      </div>
                    ))}
                  </SlickSlider>
                </div>
              </Tab>
              <Tab className='htags' eventKey="longer-tab" title="Franchise">
                <div  className='vidostyle'>
                  <SlickSlider {...settings}>
                    {youtubeVideoIds.map((videoId, index) => (
                      <div key={index} >
                        <iframe className='vido' width="704" height="360" src={https://www.youtube.com/embed/${videoId}} title={YouTube Video ${index}} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                      </div>
                    ))}
                  </SlickSlider>
                </div>
              </Tab> */}

            {/* </Tabs> */}
          </div>


          <div className='testimonialimg'>
            <div className='testimg'>

              <img src={one} alt='logo' />
            </div>

            <div className='testimg'>
              <img src={two} alt='logo' />
            </div>

            <div className='testimg'>
              <img src={three} alt='logo' />
            </div>
            <div className='testimg'>
              <img src={four} alt='logo' />
            </div>
            <div className='testimg'>
              <img src={five} alt='logo' />
            </div>
          </div>
          <div className='rimg'>
            <div className='review'>
              <img src={rone} alt='logo' />
            </div>
            <div className='review'>
              <img src={rtwo} alt='logo' />
            </div>

            <div className='review'>
              <img src={rthree} alt='logo' />
            </div>

          </div>

          <div className='rimg1'>
            <div className='review1'>
              <img src={rfour} alt='logo' />
            </div>
            <div className='review1'>
              <img src={rfive} alt='logo' />
            </div>
          </div>

          <div className='testprisetext'>
            <div className='prisetext'>
              <div className='ptext'>
                <h2>15 Lakh+</h2>
                <span>Audience</span>
              </div>
              <div className='ptext'>
                <h2>2500+</h2>
                <span>Seminars & workshops</span>
              </div>
              <div className='ptext'>
                <h2>70,000+</h2>
                <span>Students trained</span>
              </div>
              <div className='ptext'>
                <h2>4,000+</h2>
                <span>Instructors trained</span>
              </div>
              <div className='ptext'>
                <h2>500+</h2>
                <span>Franchises</span>
              </div>
              <div className='ptext'>
                <h2>16+ Years</h2>
                <span>Experiences</span>
              </div>

            </div>
            <div className='testimg'>
              <div className='trustimg'>
                <img src={trust} alt='logo' />
                <h2>Most Trusted Brand World’s Most Awarded Brain Science Organisation</h2>
              </div>
              <div className='approvedimg'>
                <img src={approved} alt='logo' />
                <h2>Approved By DPIIT, Department Of India, Startup India And I-Initiative</h2>
              </div>

            </div>

          </div>
          <div className='testtext'>
            <span>Congrats, you have unlocked a Brainywood Business Opportunity</span>
          </div>
          <div className='testvideo'>
            <iframe width="892" height="502" className='size' src="https://www.youtube.com/embed/9LjRtFo2jJo" title="landing page new" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

          </div>

          <div className='testbtn'>
            <button type='submit'>Book A Call Now</button>

          </div>
          <div className='mainbgcolor'>
            <div className='bgcolorbl'>
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,256L80,229.3C160,203,320,149,480,149.3C640,149,800,203,960,186.7C1120,171,1280,85,1360,42.7L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> */}
              <div className='regtext'>
                <h2>Register Now and Get</h2>
              </div>
              <div className='textandimg'>
                <img src={book} alt='logo' />
                <span>Best Selling Ebook of Dr. Vinod Sharma</span>
              </div>
              <div className='textandimg' id='red'>
                <img src={book1} alt='logo' />
                <span>Brain Science Business Expert Consultation</span>
              </div>
              <div className='textandimg' id='blue'>
                <img src={book2} alt='logo' />
                <span>Direct Entry to Business Meeting & Live Training of Brainywood Business by Dr. Vinod Sharma</span>
              </div>

            </div>


            <div className='bgcolorwh'>
              <div className='inputes'>
                <div className='threebtn'>
                  <div className='orabtn'>
                    <button type='submit'>GENERAL DETAILS</button>
                  </div>
                  <div className='graybtn'>
                    <button type='submit'>PERSENAL DETAILS</button>
                  </div>
                  <div className='graybtn'>
                    <button type='submit'>INVISMENT DETAILS</button>
                  </div>

                </div>

                <div className='subinput'>
                  <div className='inputext'>
                    <span>Name*</span>
                    <input className='num1' type='name' placeholder='Name' />
                  </div>
                  <div className='inputext'>
                    <span>Email*</span>
                    <input className='num1' type='name' placeholder='plase fill the email id !' />
                  </div>

                </div>

                <div className='intext'>
                  <div className='subtext'>
                    <div className='inputext' id='tx'>
                      <span>City*</span>
                      <input className='num' type='name' placeholder='city' />
                    </div>
                    <div className='inputext' id='tx'>
                      <span>Country*</span>
                      <input className='num' type='name' placeholder='country' />
                    </div>
                  </div>

                  <div className='subtext'>
                    <div className='inputext' id='tx'>
                      <span>Mobile Number*</span>
                      <input className='num' type='name' placeholder='2345324556' />
                    </div>
                    <div className='inputext' id='tx'>
                      <span>WhatsApp Number*</span>
                      <input className='num' type='name' placeholder='8967567656' />
                    </div>
                  </div>
                </div>
                <div className='submittext'>
                  <button type='submit'>Next</button>
                </div>
              </div>
            </div>
          </div>
          <div className='personinfo'>
            <div className='subpersoninfo'>
              <div className='founderinfo'>
                <h2>About the Founder</h2>

                <div className='pimg'>
                  <img src={profile} alt='logo' />
                  <span><b>Dr Vinod Sharma</b> Founder</span>
                </div>
                <div className='belowline'>
                  <hr></hr>
                  <span className='atext'>Author  |  Trained 15 Lakh+ Audience so far</span>
                </div>

                <div className='authortext'>
                  <div className='authorsubtext'>
                    <span className='btext'>Most awarded Brain Science Trainer and Entrepreneur</span>
                    <hr className='middleline'></hr>
                    <span className='btext'>World Best Brain Science Expert and Memory Trainer</span>
                  </div>
                </div>
                <div className='ctext'>
                  <span>World Best Brain Science Expert and Memory Trainer</span>
                </div>
              </div>

              <div className='personimg'>
                <img src={person} alt='logo' />

              </div>
              <div className='companyinfo'>
                <img src={log} alt='logo' />
                <h2>About the Company</h2>
                <hr className='compbelowline'></hr>
                <span>Brainywood is a Guinness World Record Holder Ed-tech Start-up based out of Bhilwara, Ajmer (Rajasthan) that is engaged in research & development in the field of innovative learning and brain science. Its research training programs have benefited more than 5 lakhs families and over 10 lacks audiences across the nation through its seminars, workshops, institutes, and franchise training models. The company has made its presence across the nation through its brain science concept. It is the only organization in the Asia-pacific region which is having all three- Guinness Book of World Records, Asia Book of Records, and India Book of Records registered by its brand name “Brainywood” in the field of brain science.</span>

              </div>
            </div>

          </div>
        </div>


      </div>
    </>
  )
}

export default Fenquiry