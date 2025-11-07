import React from 'react'
import Navbar from './Comonents/Navbar/Navbar';
import Hero from './Comonents/Hero/Hero';
import Programs from './Comonents/Programs/Programs.jsx';
import About from './Comonents/About/About.jsx';
import Footer from './Comonents/Footer/Footer.jsx';
import Tittle from './Comonents/Tittle/Tittle.jsx';
import Campus from './Comonents/Campus/Campus.jsx';
import Testimonials from './Comonents/Testimonials/Testimonials.jsx';
import Contact from './Comonents/Contact/Contact.jsx';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Tittle subTittle='Our Programs' Tittle='What we offer'/>
      <Programs />
      <About />
      <Tittle subTittle='Gallery' Tittle='Our photos'/>
      <Campus />
      <Tittle subTittle='TESTIMONIALS' Tittle='What students says'/>
      <Testimonials />
      <Tittle subTittle='Contact Us ' Tittle='Get in Touch'/>
      <Contact />
      <Footer />
    
      
    </div>
  )
}

export default App;
