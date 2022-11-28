import React from "react";

import linkedin from "../../img/linkedin.png";
import github from "../../img/github.png";
import gmail from "../../img/gmail.png";
import telephone from "../../img/telephone.png";
import  "./Footer.css";

const Contact = () => {
  return (
    <div id="outerdiv">
      <div className="app__contact-container" id="contact">
        <div className="app__contact-container_contacts">
          <p className="app__contact-container_contacts-touch" style={{color: "rgb(108, 99, 255)"}}>
            Get in Touch
          </p>
          <h2 id="h2">Let's create progress together</h2>
          <p id="p">
            For all inquiries, you can contact and message me on any of the
            specified social medias below.
          </p>
          
          
        </div>

        

        <div className="app__contact-container_image">
          <img src="https://erysmozo.vercel.app/assets/connections.5747f591.svg" alt="Cennections" />
        </div>
      </div>
    
    <ul className="app__contact-container_contacts-links">
            
            <div id="footimg">
            <a href="https://github.com/vkaware" target="blank">
              <img src={github} alt="" />
            </a>
              <h3>vkaware</h3>
              
            </div>
            <div id="footimg">
            <a
              href="https://www.linkedin.com/in/vaibhav-kaware-893a801ab"
              target="blank"
            >
              <img src={linkedin} alt="" />
            </a>
              <h3>Vaibhav Kaware</h3>
            </div>
            
            <div id="footimg">
            <a href="" target="blank">
              <img src={telephone} alt="" />
            </a>
              <h3>8668980744</h3>
            </div>

            <div id="footimg">
            <a href="" target="blank">
              <img src={gmail} alt="" />
            </a>
              <h3>vaibhavkaware2@gmail.com</h3>
            </div>
            
          </ul>

      </div>
  );
};

export default Contact;
