import React from 'react'
import '../CSS/Pricing.css'
import FAQ from './FAQ'

const Pricing = () => {
    return (
        <div>
            <div className='pricing-container1'>
                <b className='price-head'>Pricing</b>
                <span className='price-info'>India’s Most Affordable Education Plan Let quality education reach to all users</span>

            </div>
            <div className='member-container'>
                <b className='member-head'>Our Membership plans</b>
                <div className='member-boxes'>
                    <div className='member-box'>
                        <div className='rg-fee'>
                            <span>IMT Registration Fee<br></br>
                                7 Days Plan</span>
                        </div>
                        <div className='member-rs'>
                            <b className='rs'>Rs.</b><h1 className='rs1' >300</h1>
                        </div>
                        <div className='member-tax'>
                            <b className='tax'>(exclusive of all taxes)</b>
                            <span className='member-info'>Welcome to India's Memory Test- 2023<br></br> Your Chance to Become a Memory<br></br> Champion of India.</span>
                            <button className='view'>View</button>
                        </div>
                    </div>
                    <div className='member-box'>
                        <div className='rg-fee'>
                            <span>Membership Plan One Month<br></br>
30 Days Plan</span>
                        </div>
                        <div className='member-rs'>
                            <b className='rs'>Rs.</b><h1 className='rs1' >2999</h1>
                        </div>
                        <div className='member-tax'>
                            <b className='tax'>(exclusive of all taxes)</b>
                            <span className='member-info'>India's most affordable Education plan is<br></br> just one step away. Pay a one-time set<br></br>-up fee</span>
                            <button className='view'>View</button>
                        </div>
                    </div>

                    <div className='member-box'>
                        <div className='rg-fee'>
                            <span>6 Months Membership Plan<br></br>
180 Days Plan</span>
                        </div>
                        <div className='member-rs'>
                            <b className='rs'>Rs.</b><h1 className='rs1' >14999</h1>
                        </div>
                        <div className='member-tax'>
                            <b className='tax'>(exclusive of all taxes)</b>
                            <span className='member-info'>India's most affordable Education plan is<br></br> just one step away. Pay a one-time set<br></br>-up fee</span>
                            <button className='view'>View</button>
                        </div>
                    </div>

                    <div className='member-box'>
                        <div className='rg-fee'>
                            <span>Membership Plan Yearly<br></br>
365 Days Plan</span>
                        </div>
                        <div className='member-rs'>
                            <b className='rs'>Rs.</b><h1 className='rs1' >24999</h1>
                        </div>
                        <div className='member-tax'>
                            <b className='tax'>(exclusive of all taxes)</b>
                            <span className='member-info'>Welcome to India's Memory Test- 2023<br></br> Your Chance to Become a Memory<br></br> Champion of India.</span>
                            <button className='view'>View</button>
                        </div>
                    </div>


                </div>
                <div className='faq-container'>
                <b className='faq-head'>FAQ'S</b>
                    <FAQ/>
                </div>

            </div>
            
        </div>
    )
}

export default Pricing