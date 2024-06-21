import React, { useState } from 'react';
import Home from './Page1';
import AboutUs from './Page2';

const Scrollpages = () => {
  const [activePage, setActivePage] = useState('home');

  const handleScrollTo = (page) => {
    setActivePage(page);
    document.getElementById(page).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <nav>
        <button onClick={() => handleScrollTo('home')}>Home</button>
        <button onClick={() => handleScrollTo('aboutUs')}>About Us</button>
      </nav>

      <div id="home">
        {activePage === 'home' && <Home />}
      </div>

      <div id="aboutUs">
        {activePage === 'aboutUs' && <AboutUs />}
      </div>
    </div>
  );
};

export default Scrollpages;
