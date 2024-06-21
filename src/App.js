import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs'; // Correct import statement
import IMTSection from './Components/IMTSection';
import Pricing from './Components/Pricing';
import Register from './Components/Register';
import Courses from './Components/Courses';
// import Scrollpages  from './Components/Scrollpages';
import Carousel from './Components/Carousel';
import Carousels from './Components/Carousels';
import Footer from './Components/Footer';
import Videoslider from './Components/Videoslider';
import DiscussionGroups from './Components/DiscussionGroups';
import Community from './Components/Community';
import Blogs from './Components/Blogs'
import TermsOfUse from './Components/TermOfUse';
import ContactUs from './Components/ContactUs';
import Privacy from './Components/Privacy';
import ScrollToTop from './Components/ScrollToTop';
import Facebook from './Components/Facebook';
import Services from './Components/Services';
import Career from './Components/Career';
import RefundPolicy from './Components/RefundPolicy';

import FranchiseEnquiry from './Components/FranchiseEnquiry'
import Academic from './Components/Academic';
import SkillDevelopment from './Components/SkillDevelopment';
import Page2 from "./Components/Page2"
function App() {
  return (
    <>
 
      
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/IMTSection" element={<IMTSection />} />
        <Route path='/carousel' element={<Carousel/>}/>
        <Route path='/carousels' element={<Carousels/>}/>
        <Route  path='/videoslider' element={<Videoslider/>}/>
        <Route path='/discussiongroups' element={<DiscussionGroups/>}></Route>
        <Route path="/login" element={<DiscussionGroups />} /><Route/>
        <Route path="/DiscussionGroups" element={<DiscussionGroups/>}></Route>
        <Route path='/Community' element={<Community/>}></Route>
        <Route path='/Blogs' element={<Blogs/>}></Route>
        <Route path='TermsOfUse' element={<TermsOfUse/>}></Route>
        <Route path='/ContactUs' element={<ContactUs/>}></Route>
        <Route path='/Privacy' element={<Privacy/>}></Route>
        <Route path='/Facebook' element={<Facebook/>}></Route>
        <Route path='/Services' element={<Services/>}></Route>
        <Route path='/Career' element={<Career/>}></Route>
        <Route path='/RefundPolicy' element={<RefundPolicy/>}></Route>
        <Route path='/Academic' element={<Academic/>}></Route>
        <Route path='/SkillDevelopment' element={<SkillDevelopment/>}></Route>
        <Route path='/FranchiseEnquiry' element={<FranchiseEnquiry/>}></Route>


      </Routes>
      <Footer />
     
    </>
  );
}

export default App;
