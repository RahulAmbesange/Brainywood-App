import React, { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import '../CSS/Navbar.css';
import foot from '../Components/Images/download.webp';
import { NavLink } from "react-router-dom";

function Navbar() {
    const navRef = useRef();
    const [isNavOpen, setIsNavOpen] = useState(false);

    const closeNavbar = () => {
        navRef.current.classList.remove("responsive_nav");
        setIsNavOpen(false);
    };

    const toggleNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
        setIsNavOpen(!isNavOpen);
    };

    return (
        <header>
            <div className="logo-container">
                <NavLink to={"/"} onClick={closeNavbar}><img src={foot} alt="navlogo" className="navlogo" /></NavLink>
            </div>
          
            <div className="menu-icon" onClick={toggleNavbar}>
                {isNavOpen ? <FaTimes className="false"/> : <FaBars className="bar"/>} 
            </div>

            <nav ref={navRef}>
                <NavLink to={"/"} onClick={closeNavbar}>Home</NavLink>
                <NavLink to={"/aboutus"} onClick={closeNavbar}>AboutUs</NavLink>
                {/* <NavLink to={"/courses"} onClick={closeNavbar}>Courses</NavLink> */}
                <NavLink to={"/pricing"} onClick={closeNavbar}>Pricing</NavLink>
                <NavLink to={"/IMTSection"} onClick={closeNavbar}>IMTSection</NavLink>
                {/* <NavLink to={"/register"} onClick={closeNavbar}>Register</NavLink> */}
                <NavLink to={"/DiscussionGroups"} onClick={closeNavbar}><button className="btn10">Login</button></NavLink>
                
                
                
            </nav>
        </header>
    );
}

export default Navbar;