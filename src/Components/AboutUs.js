import React from 'react'
import '../CSS/AboutUs.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FaCircle } from "react-icons/fa";
import search1 from '../Components/Images/search.jpg'
import { GiMedal } from "react-icons/gi";
import medal from '../Components/Images/medal.jpg'
import you from '../Components/Images/you.jpg'
import people from '../Components/Images/people.jpg'
import spk from  '../Components/Images/spk.jpg'
import hold from '../Components/Images/hold.jpg'
import earth from '../Components/Images/blob1.jpg'
import note from '../Components/Images/notes.jpg'
import Carousel from './Carousel';
import Carousels from './Carousels';

const About = () => {
    return (
        <div>
            
            <div className='aboutcontainer1'>
                <h1 className='welcome'>Welcome to New Era of Learning</h1>
                <div className='learn1'>
                    <div className='dot'>
                    <FaCircle className='circle' /> Stress Free Education
                    </div>
                    <div className='dot'>
                    <FaCircle className='circle' /> Brain Science Learning
                    </div>
                    <div className='dot'>
                    <FaCircle className='circle' /> Quality Learning
                    </div>
                </div>

            </div>
            <div className='aboutcontainer2'>
                <b className='process-head'>Brainywood's Process</b>
                <div className='tab-section'>
                    <Tabs
                        defaultActiveKey="org"
                        id="justify-tab-example"
                        className="mb-3 tb"
                        justify
                    >
                        <Tab eventKey="org" title="Organization">
                            <div className='orgn-info'>
                                <b className='or'>Organization</b>
                                <span className='org-info info1'>Vedic Brain Solutions Private Limited is an Ed-tech company engaged in research & development in the field of innovative learning and brain science. Its research training programs<br></br> have benefited more than 5 lakhs families and over 10 lacks audiences across the nation through its seminars, workshops, institutes, and franchise training models. The company has<br></br> made its presence across the nation through its brain science concept. It is the only organization in the Asia-pacific region which is having all three Guinness Book of World Records,<br></br> Asia Book of Records, and India Book of Records registered by its brand name “Brainywood” in the field of brain science.</span>
                            </div>
                        </Tab>
                        <Tab eventKey="vs" title="Vision">
                            <div className='orgn-info'>
                                <b className='or'>Vision</b>
                                <span className='org-info info2'>“Reforming and empowering education system to make learning process complete with the help of 4th dimension of education– Science of Recollection and reducing the education<br></br> expenses of parents, reducing the study time, removing the study stress of students and making every child intelligent in order to make children asset to the nation eventually. Giving<br></br> scientific approach in studies and making education meaningful for students.”</span>
                            </div>
                        </Tab>
                        <Tab eventKey="ms" title="Mission">
                            <div className='orgn-info'>
                                <b className='or'>Mision</b>
                                <span className='org-info info3'>“Brainywood primarily mission is to reduce the suicidal and stress of Indian students by 50% in the next 5 years i.e. by 2025.  Our mission is to train 1 lakh teachers and 10<br></br> lakh students on brain science equipped education by 2025 and making 1 Crore students and parents aware of the importance of all 4 dimensions of education.</span>
                            </div>
                        </Tab>
                        <Tab eventKey="pro" title="Process">
                            <div className='orgn-info info4'>
                                <b className='or'>Process</b>
                                <span className='org-info'>Brainywood programs are based on educational psychology to give psychological solutions to students in order to enjoy the studies and exams. Students usually forget the content<br></br> even after memorizing so many times. Brainywood deal with removing the habit of forgetting by converting the study content into permanent memory with the help of imagination<br></br> and association. Brainywood gives student’s new and proven techniques of mnemonic science based on educational psychology, especially skilling students on memorization<br></br> retention and recollection. By which students, enjoy the syllabus, memorize faster and recollect the content exams accurately. Brainywood helps students in converting the study<br></br> content in visuals to memorize fast and helps to reduce the study time. We use the theory of imagination and association which enables students to make study interesting,<br></br> increasing concentration, learning effectively and most importantly it gives permanent memory for students so students do not forget the content not only till exams but till so long<br></br> in life.

                                    Brainywood completes the education learning cycle – Reading, writing, understanding, memorization, retention and finally Recollection.</span>
                            </div>
                        </Tab>

                    </Tabs>
                </div>
            </div>
       
            <div className='container4'>
                <div className='interest'>
                    <b className='in'>Interesting Facts</b>
                    <div className='in-facts'>
                        <div className='facts'>
                            <img src={search1} className='medal'/>
                            <b className='sr'>14 Years</b>
                            <span className='rs-info'>Of Research & Development</span>

                        </div>
                        <div className='facts'>
                           <img src={medal} className='medal'/>
                            <b className='sr'>Rated #1</b>
                            <span className='rs-info'>In Brain Science</span>

                        </div>
                        <div className='facts'>
                            <img src={you} className='medal'/>
                            <b className='sr'>10 Lakh+</b>
                            <span className='rs-info'>Audience Trained</span>
                        </div>
                        <div className='facts'>
                          <img src={people} className='medal'/>
                            <b className='sr'>2000+</b>
                            <span className='rs-info'>Seminars & Workshops</span>

                        </div>
                    </div>
                    <div className='in-facts'>
                        <div className='facts'>
                           <img src={spk} className='medal'/>
                            <b className='sr'>6000+</b>
                            <span className='rs-info'>Students Trained At Centers</span>

                        </div>
                        <div className='facts'>
                            <img src={hold} className='medal'/>
                            <b className='sr'>World Records Holder</b>
                            <span className='rs-info'>Guinness, Asia & India Book</span>

                        </div>
                        <div className='facts'>
                           <img src={earth} className='medal'/>
                            <b className='sr'>International Awarded</b>
                            <span className='rs-info'>Renowned Memory Expert Organisation</span>

                        </div>
                        <div className='facts'>
                            <img src={note} className='medal'/>
                            <b className='sr'>50+ Articles</b>
                            <span className='rs-info'>Published As Cover Stories in Leading Newspapers</span>

                        </div>
                    </div>
                </div>
            </div>
            <div className='container5'>
                <b className='our'>Our Portfolio</b>
                <Carousel/>
                <div className='about-sl'>
                <Carousels/>
                </div>
           
  


            </div>
        </div>
    )
}

export default About