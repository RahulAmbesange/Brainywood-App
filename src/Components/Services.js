import React from 'react'
import '../CSS/Services.css'
import skills from '../Components/Images/search.jpg'
import mottoimg from '../Components/Images/motto.png'
import sbook from '../Components/Images/service-book.png'
import conical from '../Components/Images/conical-service.png'
import cap from '../Components/Images/cap-service.png'
import bell from '../Components/Images/bell-service.png'
import calculate from '../Components/Images/cal-service.png'
import ssearch from '../Components/Images/search-service.png'
import servicegif from '../Components/Images/service-gif.gif'
import medal from '../Components/Images/medal.jpg'
import you from '../Components/Images/you.jpg'
import learn from '../Components/Images/people.jpg'
import hold from '../Components/Images/hold.jpg'
import notes from '../Components/Images/notes.jpg'

const Services = () => {
    return (
        <div>
            <div className='service-container'>
                <b>Services</b>
            </div>
            <div className='service-c2'>
                <div className='bright-future'>
                    <div className='we-teach'>
                        <b className='teachs'>We teach for a bright future</b>
                        <span className='teach-info'>We understand the importance of the success of every child, empowering every child to be successful on time and making every child intelligent in life. Understanding that Indian parent’s hard-earned money must not go wasted and their dreams about their children’s success must come true.

                        </span>
                    </div>
                    <div className='our-motto'>
                        <div className='mt-img'>
                            <img src={mottoimg} className='motto' />
                        </div>
                        <div className='our-mottos'>
                            <b className='our-m'>Our Motto</b>
                            <b className='moto-1'>1:- Better Quality<br></br> Education</b>
                            <b className='moto-1'>2:- Stress-Free Education</b>
                            <b className='moto-1'>3:- Affordable Prices</b>
                        </div>
                    </div>

                </div>
                <div className='courses-develop'>
                    <b className='c-develop'>Our courses Develop</b>
                    <div className='develop-list'>
                        <ul className='courses-list'>
                            <li>Brain Training/Mnemonic Skills</li>
                            <li> Intellectual Development</li>
                            <li> Behavioural Development</li>
                            <li>Linguistic Development</li>
                            <li> General Awareness</li>
                            <li>Managerial Development</li>
                            <li>Health and Fitness Development</li>
                        </ul>
                        <ul className='courses-list'>
                            <li>Emotional Development</li>
                            <li> Kinesthetic Development</li>
                            <li>Social Development</li>
                            <li>Problem Solving Skill</li>
                            <li>Relationship Skills</li>
                            <li> IT Skills and Development</li>
                            <li> Life Skills</li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className='service-c3'>
                <b className='wide-range'>Wide Range of Services</b>
                <span className='all-kind'>For All Kind of Education</span>
                <div className='service-range'>
                    <div className='first-range'>
                        <div className='range1'>
                            <img src={sbook} className='range-img' />
                            <b className='audio-range'>Audio Visual Contents</b>
                        </div>
                        <div className='range1'>
                            <img src={conical} className='range-img' />
                            <b className='audio-range'>Comprehension + Memorisation Experts 24*7</b>
                        </div>
                        <div className='range1'>
                            <img src={cap} className='range-img' />
                            <b className='audio-range'>Audio Visual Contents</b>
                        </div>
                    </div>
                    <div className='first-range'>
                        <div className='range1'>
                            <img src={bell} className='range-img' />
                            <b className='audio-range'>Parents Connect & Reporting</b>
                        </div>
                        <div className='range1'>
                            <img src={calculate} className='range-img' />
                            <b className='audio-range'>Test-Prep Tutors</b>
                        </div>
                        <div className='range1'>
                            <img src={ssearch} className='range-img' />
                            <b className='audio-range'>Personalized Learning Services</b>
                        </div>
                    </div>
                </div>
            </div>
            <div className='service-c4'>
                <iframe className='service-v' src="https://www.youtube.com/embed/DFdCYVYJgDo?si=8iDPPH7YTzkrZkxW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className='service-c5'>
                <b className='service-cycle'>We complete the Education Learning Cycle</b>
                <div className='l-cycle'>
                    <div className='learning-cycle'>
                        <b className='l-head'>Learning Cycle</b>
                        <p className='learn-cycle-info'>It is a process by which knowledge can be converted into a skill and actionable. It completes the learning’s objectives of students and to help to become a behaviour and success attribute in student life. In the learning cycle, a piece of information is fictionalized or processed through some steps and once it gets completed, it is considered to become a skill and intelligence.</p>
                        <p className='learn-cycle-info'>There are 6 skills and steps of the learning cycle but recollection is the most important of all because all the exams are the exams of recollection skills. If the knowledge is being memorized, retained but not recollected on time then it is not appreciated and of no use, so recollection is the most important part of the education system. All the exams belong to recollection skills only. Recollection means the retrieval or recapitulation of the particular information.</p>
                        <p className='learn-cycle-info'>Learning cycle tends to be completed when reading, writing, understanding, memorization and retention are done so as to reach the 6th part i.e. recollection. And once the recollection is performed that is reckoned that knowledge is now a permanent memory and that information has become a skill.
                        </p>
                        <img src={servicegif} className='service-gif' />
                    </div>
                    <div className='Serviceslearning cycle Servicelearn-cc'>
                        <div className='info-c1'>
                            <div className='c1-img'>
                                <img src={skills} className='skill-s' />
                            </div>
                            <div className='c1-info'>
                                <b className='c1-head'>Personalized Learning Services</b>
                                <p className='c1-para'>The practical approach is reading skills. In formal education, if a person has to get any kind of knowledge then the person has to first develop the reading skill. Cognizance helps a child to get any information introduced in the brain.</p>
                            </div>
                        </div>
                        <div className='info-c1'>
                            <div className='c1-img'>
                                <img src={medal} className='skill-s' />
                            </div>
                            <div className='c1-info'>
                                <b className='c1-head'>Writing (Kinesthetic)</b>
                                <p className='c1-para'>Practically known as Kinesthetic skill. A piece of thought can be converted into a script with the help of writing skills. Thus, the child has to learn writing skills so that knowledge in the brain can be written on a paper in an exam.</p>
                            </div>

                        </div>
                        <div className='info-c1'>
                            <div className='c1-img'>
                                <img src={you} className='skill-s' />
                            </div>
                            <div className='c1-info'>
                                <b className='c1-head'>Comprehension</b>
                                <p className='c1-para'>Practically known as understanding. The study content is in information but to have that information understood the person has to realize or comprehend the content and for this reason, teachers are an essential part of education.</p>
                            </div>

                        </div>
                        <div className='info-c1'>
                            <div className='c1-img'>
                                <img src={learn} className='skill-s' />
                            </div>
                            <div className='c1-info'>
                                <b className='c1-head'>Memorization</b>
                                <p className='c1-para'>Once the knowledge is read, written and comprehended the child has so keep that knowledge in a brain in the form of memory and this process is called as memorization wherein child do some exercise by which the knowledge becomes a memory, so for that the child re-read, rewrite or revise the content.</p>
                            </div>

                        </div>
                        <div className='info-c1'>
                            <div className='c1-img'>
                                <img src={hold} className='skill-s' />
                            </div>
                            <div className='c1-info'>
                                <b className='c1-head'>Retention</b>
                                <p className='c1-para'>Once the memory is made it has to retain and the retention skill helps to retain the content in the brain as a memory. Now for these children do the revision.</p>
                            </div>

                        </div>
                        <div className='info-c1'>
                            <div className='c1-img'>
                                <img src={notes} className='skill-s' />
                            </div>
                            <div className='c1-info'>
                                <b className='c1-head'>Personalized Learning Services</b>
                                <p className='c1-para'>The practical approach is reading skills. In formal education, if a person has to get any kind of knowledge then the person has to first develop the reading skill. Cognizance helps a child to get any information introduced in the brain.</p>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Services