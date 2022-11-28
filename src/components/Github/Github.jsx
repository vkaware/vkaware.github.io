import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./Github.css";
import Statistic from "../../img/statistic.png";







const GitHub = () => {
  const github = {
    margin: "auto",
    border: "3px solid rgb(108, 99, 255)",
    padding: "20px",
    borderRadius: "10px",
  };

  return (
    <div style={{ backgroundColor:"#f1f2ff", marginTop:"-40px"}}>
      <h1
        _hover={{ color: "black" }}
        color="#e9ad35"
        size={["xl","2xl","2xl","3xl"]}
        // mt={[2,5,7,10]}
        mb={[5,5,7,10]}
      >
        Days I Code
      </h1>
      <div w={["90%", "90%","90%","80%"]} style={github} className="github_Calender">
        <GitHubCalendar
          style={{ margin: "auto" }}
          username="vkaware"
          year={new Date().getFullYear()}
        />
      </div>

      <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"50px" ,marginTop:"50px", flexWrap:"wrap"}}>
      <img  id="image1" w={["70%","75%","80%","90%"]} margin="auto" src="https://github-readme-stats.vercel.app/api?username=vkaware&show_icons=true&locale=en" />
          <img
            id="image1"
            w={["70%","75%","80%","90%"]}
            margin="auto"
            src="https://github-readme-streak-stats.herokuapp.com/?user=vkaware&"
          />
      </div>

    </div>
  );
};

export default GitHub;

