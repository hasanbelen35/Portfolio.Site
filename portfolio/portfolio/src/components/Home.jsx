import React from "react";
import "../componentCSS/Home.css";
import { ReactTyped } from "react-typed";
import { CiLinkedin } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

function Home() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.1, // Trigger when 10% of the element is visible
  });
  return (
    <div ref={ref} className={`fade-in-section ${inView ? "is-visible" : ""}`}>
      <div className="home-div">
        <div className="home-info">
          <div className="info-title">
            <h1>
              Hi, It's <span>Hasan</span>
            </h1>
          </div>
          <div className="info-type-string">
            <h4>I'm a</h4>

            <ReactTyped
              strings={[
                "Web Developer!",
                "UX/UI Designer!",
                "Always Learner",
                "Code Lover :)",
              ]}
              typeSpeed={40}
              backSpeed={50}
              attr="placeholder"
              loop={true}
              style={{ fontSize: "24px", color: "#04fee9", fontWeight: "300" }}
            ></ReactTyped>
            <ReactTyped
              strings={[
                "Web Developer!",
                "UX/UI Designer!",
                "Always Learner",
                "Code Lover :)",
              ]}
              typeSpeed={60}
              style={{ color: "#04fee9", fontWeight: "800" }}
              backSpeed={60}
              loop={true}
            />
          </div>
          <div className="info-paragraph">
            I am a software developer <br /> who improves himself every day and
            enjoys learning new things.
          </div>
          <div className="home-info-icons">
            <a
              href="https://www.linkedin.com/in/hasan-belen-668457318/"
              target="_blank"
            >
              <CiLinkedin />
            </a>
            <a href="https://github.com/hasanbelen35" target="_blank">
              <LuGithub />
            </a>
            <a href="">
              <FaInstagram />
            </a>
            <a href=""></a>
          </div>
          <div className="home-button">
            <a href="">Hire</a>
            <a href="">Contact</a>
          </div>
        </div>
        <div className="home-img"></div>
      </div>
    </div>
  );
}

export default Home;
