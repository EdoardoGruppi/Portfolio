import React from "react";
import "./HomePage.css";
import Typical from "react-typical";

export default function HomePage() {
  return (
    <div className="profile">
      <div className="profile-container">
        <div className="profile-details">
          <div className="colz-icon">
            <a href="https://www.facebook.com/edoardo.gruppi">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="https://www.linkedin.com/in/edoardogruppi">
              <i className="fa fa-linkedin-square"></i>
            </a>
            <a href="https://github.com/EdoardoGruppi">
              <i className="fa fa-github"></i>
            </a>
            <a href="mailto:edoardogruppi@gmail.com">
              <i className="fa fa-envelope"></i>
            </a>
          </div>
          <span className="upper-text">
            Hello, I am <span className="highlighted-text">Edoardo</span>
          </span>
          <span className="title">
            <Typical
              loop={Infinity}
              steps={[
                "Enthusiastic Developer 🔥",
                1500,
                "Software Engineer 🎓",
                1500,
                "AI Passionate 💣",
                1500,
                "Fast Learner ⚡",
                1500,
              ]}
            />
          </span>
          <span className="lower-text">
            Knack of building applications with front end and back end
            operations.
          </span>
          <div className="profile-options">
            <button className="btn">Hire Me</button>
            <a href="Resume.pdf" download="Edoardo Gruppi Resume.pdf">
              <button className="btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
