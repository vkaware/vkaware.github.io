import React, { useContext } from "react";
import "./Intro.css";
// import Vector1 from "../../img/Vector1.png";
// import Vector2 from "../../img/Vector2.png";
import myPhoto from "../../img/myPhoto.jpg";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  const gurl ="https://github.com/vkaware";
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
          <span style={{color: "rgb(108, 99, 255)"}}>Vaibhav Kaware</span>
          <span></span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="buttonCont">Contact</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href = {gurl}>
          <img src={github} alt="" />
          </a>
          <a href = 'https://www.linkedin.com/in/vaibhav-kaware-893a801ab'>
          <img src={LinkedIn} alt="" />
          </a>
          {/* <a href ='https://www.instagram.com/invites/contact/?i=1au6ro7ptb0mc&utm_content=1lfsqxx'> 
          <img src={Instagram} alt="" />
          </a> */}
          
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img id="myPhoto" src={myPhoto} alt="" />
        
        
        <motion.img
          className="myEmoje" 
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          className="myEmojeCrown" 
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          // className="floating-div"
        >
          <FloatinDiv className="myEmojeCrown" img={crown} />
        </motion.div>

        {/* animation */}
        <motion.div
        
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          // className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv id="thumbup" img={thumbup}  />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
