import React from 'react'
import './Navbar.css'
import nesh from '../../assets/nesh.jpg'
import {Link,animateScroll} from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='container'>
        <img  src={nesh} alt="" className='logo'/>
        <ul>
            <Link to='hero-container' smooth={true} duration={500}><a href="#hero-container">Home Page </a></Link>
            <Link to='program' smooth={true} duration={500}><a href="#program">Program </a></Link>
           <Link to='about' smooth={true} duration={500}><a href="#about-us">About Us</a></Link> 
            <Link to='campus' smooth={true} duration={500}><a href="#campus">Campus</a></Link>
           <Link to='testimonials' smooth={true} duration={500}> <a href="#testimonials">Testimonials</a></Link> 
            <Link to='contact' smooth={true} duration={500}><a href="#contact">Contact us</a></Link>
        </ul>
    </nav>
  )
}
export default Navbar;
