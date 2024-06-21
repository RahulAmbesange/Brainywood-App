import React from 'react'
import '../CSS/Courses.css'
import level from './Images/166125452256.png'
import title from './Images/title copy.png'
import brainscience from './Images/level4.png'
import titlecopy from './Images/title copy 1.png'
import vedicmath from './Images/vedic maths.png'
import rubics from './Images/Rubik Cube.png'
import abacus from './Images/abacus.png'
import { Link } from 'react-router-dom'

const courses = () => {
    return (
        <>
            <div className="brainy-container">
                <div className="Our-courses">
                    <div className="research">
                        <h1>Our Courses</h1>
                        <p>
                            Brainywood is an Ed-tech company engaged in research & development in the field of innovative learning and brain<br />
                            science having it’s headquarter in Rajasthan, India.
                        </p>
                    </div>
                </div>
                <div className="search">
                    <div className="srch-btn">
                        <input className="srch" type="search" name=" " placeholder="Search Courses" />
                        <button className="sc-btn">Search</button>
                    </div>

                    <div className="select-btn">
                        <select>
                            <option value="Class">Class 1</option>
                            <option value="Class1">Class 2</option>
                            <option value="Class1">Class 3</option>
                            <option value="Class1">Class 4</option>
                            <option value="Class1">Class 5</option>
                            <option value="Class1">Class 6</option>
                            <option value="Class1">Class 7</option>
                            <option value="Class1">Class 8</option>
                            <option value="Class1">Class 9</option>
                            <option value="Class1">Class 10</option>
                            <option value="Class1">Class 11 Arts</option>
                            <option value="Class1">Class 11 Commerce</option>
                            <option value="Class1">Class 11 Science</option>
                            <option value="Class1">Class 12 Arts</option>
                            <option value="Class1">Class 12 Commerce</option>
                            <option value="Class1">Class 12 Science</option>
                            <option value="Class1">Competition Prep. Students</option>
                            <option value="Class1">Undergraduate Students</option>
                            <option value="Class1">Postgraduate Students</option>
                            <option value="Class1">Others (Franchise,Institutes)</option>
                            <option value="Class1">KG (Kindergarten) </option>
                        </select>
                    </div>
                </div>
                <div className="course">
                    <hr />
                </div>
                <div className="two-btn">
        <div className="skills">
          <Link to="/SkillDevelopment">
            <button>Skill Development</button>
          </Link>
        </div>
        <div className="academy">
          <Link to="/Academic">
            <button>Academics</button>
          </Link>
        </div>
      </div>
                <div className="course">
                    <hr />
                </div>




                <div className="brain-science">
                    <h2>Brain Science (Memory Courses)</h2>
                </div>
                <div className='main-v-container'>


                    {/* <div className="brainywood-science">
                        <div className="youtube-video">
                        <iframe className='you-video' width="560" height="315" src="https://www.youtube.com/embed/tZcFxjfkAoQ?si=B9S7qmQaFxHQlNj7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                            <iframe className='you-video' width="560" height="315" src="https://www.youtube.com/embed/ETn7qNk8wFk?si=18X7pawk9WTeQG4a" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className="youtube-video">
                            <iframe className='you-video' width="560" height="315" src="https://www.youtube.com/embed/0XDmGhKMy0k?si=UEiFDkDEJhhvmNaC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                            <img src={level} alt="" className="level" />
                        </div>

                        <div className="youtube-video">
                            <iframe className='you-video' width="560" height="315" src="https://www.youtube.com/embed/cUTPqyIj9i0?si=wdAWAboo0QEs6tmi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                            <img src={title} alt="" className="level    " />
                        </div>


                        <div className="youtube-video2">
                            <iframe className='you-video' width="560" height="315" src="https://www.youtube.com/embed/PsucNwU1z2Y?si=Pbt-d3SnWKoJ_lB4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                            <img src={brainscience} alt="" className="level" />
                        </div>

                        <div className="youtube-video2">
                            <iframe className='you-video' width="560" height="315" src="https://www.youtube.com/embed/LZYhzPeu8Xw?si=DzTazePWCxIzhTcP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                            <iframe className='you-video' width="560" height="315" src="https://www.youtube.com/embed/pFrtXpI-QWY?si=L5m2kYgqgD_hzwhw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className="youtube-video2">
                            <iframe className='you-video' width="560" height="315" src="https://www.youtube.com/embed/cUTPqyIj9i0?si=7UmYSSK7ACXW34sM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                            <img src={titlecopy} alt="" className="level" />
                        </div>
                    </div> */}



                    <div className="brainywood-science">
                        <div className="youtube-video">
                            <iframe className='you-video' width="560" height="315" src="https://www.youtube.com/embed/tZcFxjfkAoQ?si=B9S7qmQaFxHQlNj7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                            <iframe className='you-video' width="560" height="315" src="https://www.youtube.com/embed/ETn7qNk8wFk?si=18X7pawk9WTeQG4a" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>


                        <div className="youtube-video">
                            <img src={level} alt="" className="level" />
                            <iframe className='you-video' width="560" height="315" src="https://www.youtube.com/embed/0XDmGhKMy0k?si=UEiFDkDEJhhvmNaC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                            {/* <iframe className='you-video' width="560" height="315" src="https://www.youtube.com/embed/0XDmGhKMy0k?si=UEiFDkDEJhhvmNaC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                        </div>

                        <div className="youtube-video">
                            <iframe className='you-video' width="560" height="315" src="https://www.youtube.com/embed/cUTPqyIj9i0?si=wdAWAboo0QEs6tmi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                            {/* <iframe className='you-video' width="560" height="315" src="https://www.youtube.com/embed/cUTPqyIj9i0?si=wdAWAboo0QEs6tmi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

                            <img src={title} alt="" className="level" />
                        </div>

                    </div>

                    <div className="brainywood-science2">
                        <div className="youtube-video2">
                            <iframe className='you-video2' width="560" height="315" src="https://www.youtube.com/embed/PsucNwU1z2Y?si=Pbt-d3SnWKoJ_lB4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                            {/* <iframe className='you-video2' width="560" height="315" src="https://www.youtube.com/embed/PsucNwU1z2Y?si=Pbt-d3SnWKoJ_lB4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

                            <img src={brainscience} alt="" className="level" />
                        </div>

                        <div className="youtube-video2">
                            <iframe className='you-video2' width="560" height="315" src="https://www.youtube.com/embed/LZYhzPeu8Xw?si=DzTazePWCxIzhTcP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                            <iframe className='you-video2' width="560" height="315" src="https://www.youtube.com/embed/pFrtXpI-QWY?si=L5m2kYgqgD_hzwhw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>

                        <div className="youtube-video2">
                            <iframe className='you-video2' width="560" height="315" src="https://www.youtube.com/embed/cUTPqyIj9i0?si=7UmYSSK7ACXW34sM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                            {/* <iframe className='you-video2' width="560" height="315" src="https://www.youtube.com/embed/cUTPqyIj9i0?si=7UmYSSK7ACXW34sM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

                            <img src={titlecopy} alt="" className="level" />

                        </div>

                    </div>


                </div>












                <div className="hr1">
                    <hr />
                </div>

                <div className="brain-science2">
                    <h2>Coding & Programming Courses</h2>
                </div>
                <div className="coding">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/q5qnUQjqtWs?si=mkBKeX-GbyRPDdRw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="hr1">
                    <hr />
                </div>


                <div className="general">
                    <h2>General Knowledge Series</h2>
                </div>
                <div className="general-knowledge">
                    <div className="series" id='vid'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/q5qnUQjqtWs?si=mkBKeX-GbyRPDdRw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                       
                    </div>
                    <div className="series" id='vid'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/sXagQ1qUXYk?si=HSqzet00hSXE4sfc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="hr1">
                    <hr />
                </div>

                <div className="health">
                    <h2>Health & Wellness</h2>
                    <iframe className='hl' width="560" height="315" src="https://www.youtube.com/embed/0v_I0ENBCV0?si=LkzuuwcqOAWUWk9K" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="hr1">
                    <hr />
                </div>

                <div className="health2">
                    <h2>Language Courses</h2>
                    <iframe className='hl' width="560" height="315" src="https://www.youtube.com/embed/xz_GO0PP7NA?si=a9cgVfjnfHSwxQBI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="hr1">
                    <hr />
                </div>

                <div className="ability-courses">
                    <h2>Mental Ability Courses</h2>
                </div>

                <div className="vedic-science">
                    <div className="vedic">
                        <img src={vedicmath} alt="" className="level3" />
                    </div>

                    <div className="vedic">
                        <img src={rubics} alt="" className="level3" />
                    </div>

                </div>
                <div className="abacus">
                    <img src={abacus} alt="" className="level2" />
                </div>
                <div className="hr1">
                    <hr />
                </div>
                <div className="music">
                    <h2>Music</h2>
                    <iframe className='hl' width="560" height="315" src="https://www.youtube.com/embed/WsPz2UjstN4?si=azlFh9MEgCFdr4QZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                <div className="hr1">
                    <hr />
                </div>

                <div className="developement">
                    <h2>Personality Development Courses</h2>
                </div>

                <div className="inteligence">
                    <div className="personality">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/VpF7XlQRYGg?si=9-AHxHqNPoHEcApA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className="personality">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/NQ23XbcvI6M?si=mi1ZWpq0CEpD3Fl6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="hr1">
                    <hr />
                </div>

                <div className="developement">
                    <h2>Presentation Skills Development</h2>
                </div>
                <div className="presentation">
                    <iframe className='hl' width="560" height="315" src="https://www.youtube.com/embed/omsF6__3KEM?si=NUSXU_T9ICsyHibC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="hr1">
                    <hr />
                </div>
            </div>


        </>
    )
}

export default courses;