import React from 'react'
import '../CSS/Career.css'
import clogo from '../Components/Images/download.webp'
import { useState } from 'react';

const Career = () => {
    const [email, setEmail] = useState('');

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // You can add logic here for actual account switching, e.g., redirect to a new page or perform authentication.

        // For demonstration purposes, log the email to the console
        // console.log(Switching account for email: ${email});
    };
    // const [name, setName] = useState('');

    // const handleNameChange = (e) => {
    //     setName(e.target.value);
    // };
    
    

    return (
        <div>
            <div className='career-container'>
                <div className='career-logo'>
                    <img src={clogo} className='c-logo' />
                </div>
                <div className='apply-box'>
                    <div className='c-box-content'>
                        <span className='on-teach'>Apply - Online Teaching</span>
                        <span className='all-teach'>We are looking forward for all Teachers.</span>
                        <span className='all-teach'>Please Note:-</span>
                        <span className='all-teach'>The Demo can be in English and Hindi.</span>
                        <span className='all-teach'>The Demo Should be of 10 Minutes.</span>
                    </div>
                    <hr className='c-hr1' />
                    <div className='email-section'>

                        <form onSubmit={handleSubmit}>
                            <label >Enter Your Email Here</label>
                            <button className='switch-ac' type="submit">Switch Account</button>
                            <br></br>

                            <input className='c-email'
                                type="email"
                                // value={email}
                                // onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                        </form>
                    </div>
                    <p className='upload'>The name and photo associated with your Google account will be recorded when you upload<br></br> files and submit this form. Your email is not part of your response.</p>
                    <hr className='c-hr1' />
                    <span className='required-c'>* Indicates required question</span>


                </div>
                <div className='c-name'>
                    <div className="name-form">
                        <form>
                            <label className='lb-name'>
                                Name:
                                <input placeholder='Your answer' className='required1'
                                    type="text"
                                    // value={name}
                                    // onChange={handleNameChange}
                                    required
                                />
                            </label>
                        </form>
                    </div>
                    
                </div>
                <div className='c-name'>
                    <div className="name-form">
                        <form>
                            <label className='lb-name'>
                                Contact:
                                <input placeholder='Your answer' className='required1'
                                    type="number"
                                    // value={name}
                                    // onChange={handleNameChange}
                                    required
                                />
                            </label>
                        </form>
                    </div>
                    
                </div>
                <div className='c-name'>
                    <div className="name-form">
                        <form>
                            <label className='lb-name'>
                                Email:
                                <input placeholder='Your answer' className='required1'
                                    type="email"
                                    // value={name}
                                    // onChange={handleNameChange}
                                    required
                                />
                            </label>
                        </form>
                    </div>
                    
                </div>
                <div className='c-name'>
                    <div className="name-form">
                        <form>
                            <label className='lb-name'>
                                Subject:
                                <input placeholder='Your answer' className='required1'
                                    type="text"
                                    // value={name}
                                    // onChange={handleNameChange}
                                    required
                                />
                            </label>
                        </form>
                    </div>
                    
                </div>
                <div className='c-name'>
                    <div className="name-form">
                        <form>
                            <label className='lb-name'>
                                Class:
                                <input placeholder='Your answer' className='required1'
                                    type="text"
                                    // value={name}
                                    // onChange={handleNameChange}
                                    required
                                />
                            </label>
                        </form>
                    </div>
                    
                </div>
                <div className='c-name'>
                    <div className="name-form">
                        <form>
                            <label className='lb-name'>
                            Link for Demo Video (if Any):
                                <input placeholder='Your answer' className='required1'
                                    type="text"
                                    // value={name}
                                    // onChange={handleNameChange}
                                    required
                                />
                            </label>
                        </form>
                    </div>
                    
                </div>
                <div className='c-name'>
                    <div className="name-form">
                        <form>
                            <label className='lb-name'>
                            Upload a Demo:
                                <input className='required1'
                                    type="file"
                                    // value={name}
                                    // onChange={handleNameChange}
                                    
                                />
                            </label>
                        </form>
                    </div>
                    
                </div><div className='c-name'>
                    <div className="name-form">
                        <form>
                            <label className='lb-name'>
                            Upload a CV:
                                <input className='required1'
                                    type="file"
                                    // value={name}
                                    // onChange={handleNameChange}
                                    
                                />
                            </label>
                        </form>
                    </div>
                    
                </div>
                <div className='c-name2'>
                    <button className='career-submit'>Submit</button>
                    
                </div>
                
                
                
            </div>

        </div>
    )
}

export default Career