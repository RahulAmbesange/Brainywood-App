import React from 'react'
import '../CSS/acemadic.css'
import math from './Images/maths hindi copy.png';
import english from './Images/class1.png'
import science from './Images/evs copy.png'
import apple from './Images/class2.png'

const Academic = () => {
    return (
        <>
            <div className="ed-tech">
                <div className="learning">
                    <div className="field">
                        <h1>
                            Our Courses
                        </h1>
                        <p>Brainywood is an Ed-tech company engaged in research & development in the field of innovative learning and brain<br />
                            science having it’s headquarter in Rajasthan, India.</p>
                    </div>
                </div>
                 <div className="search-btnn">
                    <div className="srch-btn">
                    <input className="srch1" type="search" name=" " placeholder="Search Courses" />
                    <button className="S-btn">Search</button>
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
                 <div className="line-hr">
                    <hr />
                </div>
                <div className="two-btnn">
                    <div className="skill">
                        <button>Skills Developement</button>
                    </div>
                    <div className="academics">
                        <button>Academics</button>
                    </div>
                </div>
                <div className="line-hr">
                    <hr />
                </div>

                <div className="sub">
                    <h2>
                            Mathematics 
                        </h2>
                    </div>
                <div className="math">
                   
                    <div className="maths-hindi">
                       
                        <img src={math} alt="classes" className="class1" />
                    </div>
                    <div className="english">
                    <img src={english} alt="" className="class1" />    
                   </div>   

                </div>
                <div className="hr2">
                    <hr />
                </div>

                <div className="sub-evs">
                    <h2>
                    Science- EVS
                    </h2>
                </div>
                <div className="Evs">
                    <div className="hindi">
                        <img src={science} alt="" className="class1" />
                    </div>
                    <div className="store">
                        <img src={apple} alt="" className="class1" />
                    </div>
                </div>
                <div className="hr2">
                    <hr />
                </div>  

            </div>
        </>
    )
}

export default Academic