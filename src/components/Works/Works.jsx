import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import express from "../../img/express.png";
import nodejs from "../../img/nodejs.png";
import css from "../../img/css.png";
import Facebook from "../../img/Facebook.png";
import mongodb from "../../img/mongodb1.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            My Experience With 
          </span>
          <span style={{color: "coral"}}>FrameWorks & Libraries</span>
          <spane>
              The main area of my expertise is front-end development, HTML, CSS, JS, & React.<br/>
              Experience in working on multiple Backened platforms like Node, Express, MongoDB, Postman.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="buttonHire">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={css} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={mongodb} alt="" style={{width:"700px"}}/>
          </div>
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={nodejs} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={express} alt="" style={{width:"600px"}} />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
