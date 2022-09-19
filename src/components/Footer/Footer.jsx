import React from "react";

import Facebook from "../../img/facebook11.png";
import LinkedIn from "../../img/linkedin11.png";
import Github from "../../img/github11.png";


import  "./Footer.css";

const Contact = () => {
  return (
    
      <div className="app__contact-container" id="contact">
        <div className="app__contact-container_contacts">
          <p className="app__contact-container_contacts-touch">
            Get in Touch
          </p>
          <h2>Let's create progress together</h2>
          <p>
            For all inquiries, you can contact and message me on any of the
            specified social medias below.
          </p>
          <ul className="app__contact-container_contacts-links">
            <a href="" target="blank">
              <img src={Facebook} alt="" />
            </a>
            <a href="https://github.com/vkaware" target="blank">
              <img src={Github} alt="" />
              
            </a>
            <a
              href="https://www.linkedin.com/in/vaibhav-kaware-893a801ab"
              target="blank"
            >
              <img src={LinkedIn} alt="" />
              
            </a>
          </ul>
          <div className="cont866">
            <h1>Contact</h1>
            <p>vaibhavkaware2@gmail.com</p>
            <p>8668980744</p>
          </div>
        </div>

        <div className="app__contact-container_image">
          <img src="https://erysmozo.vercel.app/assets/connections.5747f591.svg" alt="Cennections" />
        </div>
      </div>
    
  );
};

export default Contact;
