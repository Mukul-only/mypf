import "./styles/About.css";
import { memo } from "react";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I'm Mukul, a Master of Computer Applications (MCA) student at the National Institute of Technology, Tiruchirappalli.<br/><br/>
          I love building things that live at the intersection of clean engineering and smart algorithms. Whether it's crafting low-latency real-time systems or training ML models to understand human preferences — I'm driven by the challenge of making complex ideas work elegantly.
        </p>
      </div>
    </div>
  );
};

export default memo(About);