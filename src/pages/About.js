import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
         If you have reached here , means we have helped you to satisfy that stomach of yours but not your curosious mind!
         Pretty well! Recipick is creation of two developers Aishvi (sophmore at IGDTUW) and Siddhi(sophmore at IIT-B).
         We are just two tech-geeks and good friends who feel a lil revamping can make your boring food, yummier!!!
         
        </p>
      </div>
    </div>
  );
}

export default About;
