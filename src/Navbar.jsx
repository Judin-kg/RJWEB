// import React, { useState } from "react";
// import "./Navbar.css";
// import logo from "../src/assets/logo.png"; // your logo path

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   return (
//     <>
//       <nav className="navbar">
//         <div className="navbar-left">
//           <img src={logo} alt="logo" className="logo" />
//           <h1 className="brand">
//             RJ ATLAS <span>DIGITAL AI & Services</span>
//           </h1>
//         </div>

//         <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
//           <li><a href="#home" onClick={closeMenu} className="active">Home</a></li>
//           <li><a href="#aboutus" onClick={closeMenu}>About Us</a></li>
//           <li><a href="#ailab" onClick={closeMenu}>AILab</a></li>
//           <li><a href="#exploreus" onClick={closeMenu}>Explore Us</a></li>
//           <li>
//             <a href="#contact" className="contact-btn" onClick={closeMenu}>
//               Contact
//               <span className="shine"></span>
//             </a>
//           </li>
//         </ul>

//         {/* Hamburger button */}
//         <div className={`hamburger ${menuOpen ? "toggle" : ""}`} onClick={toggleMenu}>
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       </nav>

//       {/* Overlay for mobile menu */}
//       <div className={`overlay ${menuOpen ? "active" : ""}`} onClick={closeMenu}></div>
//     </>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import "./Navbar.css";
import logo from "../src/assets/logo.png"; // your logo path

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        {/* Left Side Logo */}
        <div className="navbar-left">
          <img src={logo} alt="logo" className="logo" />
          <h1 className="brand">
            RJ ATLAS <span>DIGITAL AI & Services</span>
          </h1>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a href="#home" onClick={closeMenu} className="active">Home</a></li>
          <li><a href="#aboutus" onClick={closeMenu}>About Us</a></li>
          <li><a href="#ailab" onClick={closeMenu}>AILab</a></li>
          <li><a href="#exploreus" onClick={closeMenu}>Explore Us</a></li>
          <li>
            <a href="#contact" className="contact-btn" onClick={closeMenu}>
              Contact
              <span className="shine"></span>
            </a>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div className={`hamburger ${menuOpen ? "toggle" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Overlay for mobile */}
      <div className={`overlay ${menuOpen ? "active" : ""}`} onClick={closeMenu}></div>
    </>
  );
};

export default Navbar;