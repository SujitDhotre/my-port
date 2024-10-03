
import React, { useState, useEffect } from "react";
// import { React } from "react";
import Scrollspy from 'react-scrollspy';
import { Link as ScrollLink } from 'react-scroll';

function NavBar() {

  const [navbarColor, setNavbarColor] = useState("bg-body-tertiary"); // Default background color

  useEffect(() => {
      const handleScroll = () => {
          const currentScrollY = window.scrollY;
          const threshold = 50; // Adjust threshold as needed

          if (currentScrollY > threshold) {
              setNavbarColor("bg-body-secondary navscroll"); // Change to secondary background color
          } else {
              setNavbarColor("bg-body-tertiary"); // Revert to default background color
          }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
          window.removeEventListener("scroll", handleScroll);
      };
  }, []);


    return(
    
        <nav className={`navbar ${navbarColor} fixed-top`}>
        <div className="container-fluid">
        <ScrollLink to="home" smooth={true} duration={500} className="navbar-brand" data-to-scrollspy-id="home">SUJIT DHOTRE</ScrollLink>

          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h2 className="offcanvas-title" id="offcanvasNavbarLabel">Sujit Dhotre</h2>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
            <Scrollspy items={['home', 'project', 'exp', 'skill']} currentClassName="active" className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <ScrollLink to="home" smooth={true} duration={500} className="nav-link" data-to-scrollspy-id="home">Home</ScrollLink>
                            </li>
                            <li className="nav-item">
                                <ScrollLink to="project" smooth={true} duration={500} className="nav-link" data-to-scrollspy-id="project">Project</ScrollLink>
                            </li>
                            <li className="nav-item">
                                <ScrollLink to="exp" smooth={true} duration={500} className="nav-link" data-to-scrollspy-id="exp">Exp</ScrollLink>
                            </li>
                            <li className="nav-item">
                                <ScrollLink to="skill" smooth={true} duration={500} className="nav-link" data-to-scrollspy-id="skill">Skills</ScrollLink>
                            </li>
                        </Scrollspy>
              
            </div>
          </div>
        </div>
      </nav>
    );
}
export default NavBar;