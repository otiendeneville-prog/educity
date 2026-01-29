import "./Navbar.css";
import nesh from "../../assets/nesh.jpg";
import { Link, animateScroll } from "react-scroll";
import menu from "../../assets/menu.png";
import { useState } from "react";

const Navbar = () => {
  }
    return (
    <nav className="nav-container">
      <img className="logo" src={nesh} alt="" />

      <ul>
        <Link to="hero-container" smooth={true} duration={500}>
          <a href="#hero-container">Home Page </a>
        </Link>

        <Link to="program" smooth={true} duration={500}>
          <a href="#program">Program </a>
        </Link>

        <Link to="about" smooth={true} duration={500}>
          <a href="#about-us">About Us</a>
        </Link>

        <Link to="campus" smooth={true} duration={500}>
          <a href="#campus">Campus</a>
        </Link>

        <Link to="testimonials" smooth={true} duration={500}>
          {" "}
          <a href="#testimonials">Testimonials</a>
        </Link>

        <Link to="contact" smooth={true} duration={500}>
          <a href="#contact">Contact us</a>
        </Link>s
        <img src={menu} className="menu" onClick="toggleMenu()}" />
      </ul>
    </nav>
  );
};

export default Navbar;

{
  /* <nav className="bg-neutral-primary fixed w-full z-20 top-0 start-0 border-b border-default transition-all duration-300s">
   <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
     <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
         <img src="https://flowbite.com/docs/images/logo.svg" class="h-7" alt="Flowbite Logo" />
         <span class="self-center text-xl text-heading font-semibold whitespace-nowrap">Flowbite</span>
    </a>
    <button data-collapse-toggle="navbar-multi-level-dropdown" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-multi-level-dropdown" aria-expanded="false">

         <span class="sr-only">Open main menu</span>

        
         
          <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/></svg>
      </button>
     <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level-dropdown">
       <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-neutral-primary">
         <li>
            <a href="#" className="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0" aria-current="page">Home</a>
          </li>
          <li>
             <button id="multiLevelDropdownButton" data-dropdown-toggle="multi-dropdown" className="flex items-center justify-between w-full py-2 px-3 rounded font-medium text-heading md:w-auto hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0">
              
                <svg className="w-4 h-4 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
          </button>
              
            
            <div id="multi-dropdown" className=" bg-#8883 z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44">
          
            
                 <ul className="p-2 text-sm text-body font-medium" aria-labelledby="multiLevelDropdownButton">
                   <li>
                     <a href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard</a>
                  </li>
                  <li>
                     <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                      
                       <svg className="h-4 w-4 ms-auto rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/></svg>

                    </button>
                      <div id="doubleDropdown" className="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44">
                         <ul className="p-2 text-sm text-body font-medium" aria-labelledby="dropdownMultiLevelButton">
                           <li>
                            <a href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Overview</a>
                        </li>
                           <li>
                             <a href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">My downloads</a>
                          </li>
                          <li>
                             <a href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Billing</a>
                          </li>
                           <li>
                            <a href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Rewards</a>
                           </li>
                        </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Earnings</a>
                  </li>
                   <li>
                    <a href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Sign out</a>
                  </li>
               </ul>
           </div>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Services</a>
         </li>
         <li>
           <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
 </nav>

 export default Navbar; */
}

//  import { useState } from 'react';
// import { Link } from 'react-scroll';
// import nesh from '../../assets/nesh.jpg';
// import menu_icon from '../../assets/menu.png';

// const Navbar = () => {
//   const [mobileMenu, setMobileMenu] = useState(false);

//   const toggleMenu = () => {
//     setMobileMenu(!mobileMenu);
//   };

//   return (
//     <nav className="fixed top-0 left-0 w-full flex items-center justify-between py-4 px-[10%] bg-[#333] text-white z-50">

//       <img src={nesh} alt="Logo" className="w-13 h-20 cursor-pointer" />

//       <ul className={`
//         fixed top-0 bottom-0 bg-[#212ea0] w-64 pt-20 transition-all duration-500 z-[-1]
//         md:static md:flex md:w-auto md:p-0 md:bg-transparent md:z-auto
//         ${mobileMenu ? 'right-0' : '-right-64'}
//       `}>
//         <li className="list-none my-5 mx-10 md:my-0 md:mx-5">
//           <Link to='hero-container' smooth={true} offset={0} duration={500} className="cursor-pointer hover:text-blue-200">Home Page</Link>
//         </li>
//         <li className="list-none my-5 mx-10 md:my-0 md:mx-5">
//           <Link to='program' smooth={true} offset={-260} duration={500} className="cursor-pointer hover:text-blue-200">Program</Link>
//         </li>
//         <li className="list-none my-5 mx-10 md:my-0 md:mx-5">
//           <Link to='about' smooth={true} offset={-150} duration={500} className="cursor-pointer hover:text-blue-200">About Us</Link>
//         </li>
//         <li className="list-none my-5 mx-10 md:my-0 md:mx-5">
//           <Link to='campus' smooth={true} offset={-260} duration={500} className="cursor-pointer hover:text-blue-200">Campus</Link>
//         </li>
//         <li className="list-none my-5 mx-10 md:my-0 md:mx-5">
//           <Link to='testimonials' smooth={true} offset={-260} duration={500} className="cursor-pointer hover:text-blue-200">Testimonials</Link>
//         </li>
//         <li className="list-none my-5 mx-10 md:my-0 md:mx-5">
//           <Link to='contact' smooth={true} offset={-260} duration={500} className="bg-white text-black py-2 px-6 rounded-full cursor-pointer hover:bg-gray-200">Contact us</Link>
//         </li>
//       </ul>

//       <img
//         src={menu_icon}
//         alt="Menu Icon"
//         className="w-8 md:hidden cursor-pointer"
//         onClick={toggleMenu}
//       />
//     </nav>
//   );
// };

// export default Navbar;
