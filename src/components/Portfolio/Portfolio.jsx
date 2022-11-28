import React, { useContext } from "react";
import "./Portfolio.css";

import revv from "../../img/revv.png";
import nykaa from "../../img/nykaa.png";
import plural from "../../img/plural.png";
import tmetric from "../../img/tmetric.png";
import zara from "../../img/zara.png";

import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio">
      {/* heading */}
       {/* <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
        <span>Portfolio</span> */}
        <h1>Recent Projects</h1>

        <div className="port">

          <div className="port1">
            <img src={tmetric} className='port-img'/>
              <div class="layer">
                <h3>TMetric Website</h3>
                  <p>TMetric is time tracking software, that offers time tracking service for 
                    freelancers.</p>
                    <p id="tmet">Tech Stack: ReactJS, ChakraUI, MongoDB</p>
                  <div className="portButt">
                    <a href="https://tmetric-beta.vercel.app/"><button>VIEW SITE</button></a>
                    <a href="https://github.com/IamSanjayGupta/dazzling-measure-5625"><button>VIEW CODE</button></a>
                    
                    
                  </div>
               </div>
          </div>

          <div className="port1">
            <img src={zara} className='port-img'/>
              <div class="layer">
                <h3>Zara Website</h3>
                  <p>Zara is one of the populer online fashion store.</p>
                  <p>Tech Stack: NextJS, TypeScript, ChakraUI</p>
                  <div className="portButt">
                    <a href="https://takeitnow.vercel.app/"><button>VIEW SITE</button></a>
                    <a href="https://github.com/Surya9263/flashy-burst-4121"><button>VIEW CODE</button></a>
                  </div>
               </div>
          </div>

          <div className="port1">
            <img src={plural} className='port-img'/>
              <div class="layer">
                <h3>Plural Website</h3>
                  <p>This website where you gain knowledge of Bonsai Tree</p>
                  <p>Tech Stack: HTML, JavaScript, CSS</p>
                  <div className="portButt">
                    <a href="https://www.pluralsight.com/product/skills?utm_term=&pslp=product-skills&aid=701j0000002BGhXAAW&
                    promo=&utm_source=branded&utm_medium=digital_paid_search_google&utm_campaign=INDIA_Brand_E
                    &utm_content=&cq_cmp=223387038&gclid=CjwKCAjwg5uZBhATEiwAhhRLHgH_sPKXEZx-MGF0UjpuAKLoOYrON5NLHNL7-esVL-iO7q5szb_spBoCem8QAvD_BwE"><button>VIEW SITE</button></a>
                    <a href="https://github.com/yuvrajrajarawal869/pluralsight.com"><button>VIEW CODE</button></a>
                  </div>
               </div>
          </div>

          <div className="port1">
            <img src={tmetric} className='port-img'/>
              <div class="layer">
                <h3>Tmetric Website</h3>
                  <p>TMetric is time tracking software, that offers time tracking service for 
                    freelancers.</p>
                  <p>Tech Stack: ReactJS, JavaScript, CSS</p>
                  <div className="portButt">
                    <a href="https://amazing-daffodil-72806d.netlify.app/index.html"><button>VIEW SITE</button></a>
                    <a href="https://github.com/Shibshankar01/wooden-tongue-937"><button>VIEW CODE</button></a>
                  </div>
               </div>
          </div>

          <div className="port1">
            <img src={revv} className='port-img'/>
              <div class="layer">
                <h3>Bonsai Website</h3>
                  <p>This website where you gain knowledge of Bonsai Tree</p>
                  <p>Tech Stack: ReactJS, JavaScript, CSS</p>
                  <div className="portButt">
                    <a href=""><button>VIEW SITE</button></a>
                    <a href="https://github.com/vkaware/indigo-rail-8253"><button>VIEW CODE</button></a>
                  </div>
               </div>
          </div>

          <div className="port1">
            <img src={nykaa} className='port-img'/>
              <div class="layer">
                <h3>Nykaa Website</h3>
                  <p>Nykaa is one of the populer online fashion store.</p>
                  <p>Tech Stack: HTML, JavaScript, CSS</p>
                  <div className="portButt">
                    <a href="https://mellifluous-gumdrop-aef3b9.netlify.app/"><button>VIEW SITE</button></a>
                    <a href="https://github.com/Anish22prakash/Nykaa"><button>VIEW CODE</button></a>
                  </div>
               </div>
          </div>

          

        </div>

      

    </div>
  );
};

export default Portfolio;
