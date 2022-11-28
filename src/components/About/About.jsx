import { useContext } from "react";
import { themeContext } from "../../Context";
import "./About.css";



const About = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(
        <div className="aboutMain" id="about">
            
                <div className="aboutInfo" >
                <span className="aboutA"  style={{color: "rgb(108, 99, 255)"}}>About</span>
                <p className="about1">⚡I enjoy developing websites and a keen interest in solving problems and coming up with effective solutions.</p>
                <p className="about1">⚡Enjoy building responsive websites (frontend) using ReactJS, Bootstrap, ChkraUI etc.</p>
                <p className="about1">⚡Experience in working on multiple Backened platforms like Node, Express, MongoDB</p>
                </div>
                <div className="aboutImg" id="hero-main-img">
                    <img src="https://portfolio-m-sehrawat.vercel.app/developerActivity.svg" alt="aboutImg" />
                </div>
            
        </div>
    )
}


export default About;