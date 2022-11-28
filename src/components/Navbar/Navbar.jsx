import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import Resume from './resume.pdf';
import vkLogo from "../../img/vkLogo.png";


const navbar = () => {
  return (
    <div className="n-wrapper" >
      {/* left */}
      <div className="n-left">
        <div className="n-name">
          <img src={vkLogo} alt="" />
        </div>
        
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" spy={true} smooth={true}>
                About
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Projects
              </Link>
            </li>
            {/* <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link>
            </li> */}
          </ul>
        </div>
       
        <a href={Resume} download>
          <button className="buttonCont">Resume</button>
        </a>
        
      </div>
    </div>
  );
};

export default navbar;
