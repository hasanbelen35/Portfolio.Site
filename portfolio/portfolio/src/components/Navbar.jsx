import React from "react";
import "../componentCSS/Navbar.css";
import { NavLink } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";

function Navbar() {
  

  const props = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(100px)" },
    config: { duration: 1000 },
  });
  return (
    <div>
      <animated.div style={props}>
        <div className="nav-container">
          <div className="nav-logo">
            <h2>
              Hasan <span>Belen</span>
            </h2>
          </div>
          <div className="nav-links" >
            <NavLink to="/home" to="/">
              Home
            </NavLink>
            <NavLink to="/education">Education</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to ="/contact" >Contact</NavLink>
          </div>
        </div>
      </animated.div>
    </div>
  );
}

export default Navbar;
