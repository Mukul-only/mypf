import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { memo } from "react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "EmojiACM",
    category: "Real-Time Multiplayer",
    tools: "React, Node.js, Socket.io, MongoDB, JWT",
    image: "/images/emoji.png",
    link: "https://github.com/Mukul-only",
    gradient: "work-gradient-1"
  },
  {
    title: "Travel Recommendation",
    category: "Machine Learning",
    tools: "Python, Scikit-Learn, Decision Tree, KNN",
    image: "/images/travel_recommendation.png",
    link: "https://github.com/Mukul-only",
    gradient: "work-gradient-2"
  },
  {
    title: "LLM Docs Summarization",
    category: "NLP / Automation",
    tools: "LLM, Python, Telegram API, Automation",
    image: "/images/lm_document.png",
    link: "https://github.com/Mukul-only",
    gradient: "work-gradient-3"
  }
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const workContainer = document.querySelector(".work-container");
      if (!box.length || !workContainer) return;
      
      const rectLeft = workContainer.getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number = parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(Work);