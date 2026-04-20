import "./styles/Career.css";
import { memo } from "react";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Leadership <span>&</span>
          <br /> Achievements
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Core Team Member</h4>
                <h5>ACM Student Chapter, NIT Trichy</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Coordinating event structure, designing participant workflows, and contributing to the official event platform.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Event Execution Committee</h4>
                <h5>Version'26, NIT Trichy</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Contributed to creating and designing the main event website, translating the fest's identity into a polished live web experience.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>2× Hackathon Participant</h4>
                <h5>Transfinitte'24 & Transfinitte'25</h5>
              </div>
              <h3>2024 - 25</h3>
            </div>
            <p>
              Participated in NIT Trichy's premium hackathons. Built an end-to-end LLM-based document summarization pipeline in 2025.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Career);