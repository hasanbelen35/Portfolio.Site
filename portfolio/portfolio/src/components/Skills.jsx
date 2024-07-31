import { Container, Row, Col } from "reactstrap";
import { motion } from 'framer-motion';
import '../componentCSS/Skills.css';
import { useState } from "react";

function Skills() {
  // DEFINING STATES
  const [frontEnd, setFrontEnd] = useState("Frontend");
  const [design, setDesign] = useState("Design Ux/UI");
  const [backend, setBackend] = useState("Backend / Databases");

  // CLICK STATES
  const [isFrontendClicked, setFrontendClicked] = useState(false);
  const [isDesignClicked, setDesignClicked] = useState(false);
  const [isBackendClicked, setBackendClicked] = useState(false);

  // SKILLS CLICK FUNCTIONS
  const handleFrontendClicked = () => {
    setFrontendClicked(!isFrontendClicked);
    setFrontEnd(
      isFrontendClicked
        ? "Frontend"
        : "HTML5, CSS3, JavaScript, React, Next.js, Tailwind, Bootstrap"
    );
  };

  const handleDesignClicked = () => {
    setDesignClicked(!isDesignClicked);
    setDesign(
      isDesignClicked
        ? "Design Ux/UI"
        : "Sketch, Figma, Adobe XD, InVision"
    );
  };

  const handleBackendClicked = () => {
    setBackendClicked(!isBackendClicked);
    setBackend(
      isBackendClicked
        ? "Backend / Databases"
        : "Node.js, Express, MongoDB, SupaBase"
    );
  };

  return (
    <div className="skills-div">
      <Container>
        <Row>
          <Col md="6">
            <motion.div
              onClick={handleFrontendClicked}
              className="box"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {frontEnd}
            </motion.div>
          </Col>
          <Col md="6">
            <motion.div
              onClick={handleDesignClicked}
              className="box"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {design}
            </motion.div>
          </Col>
        </Row>
        <Row>
            <motion.div
              onClick={handleBackendClicked}
              className="box"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {backend}
            </motion.div>
        
        </Row>
      </Container>
    </div>
  );
}

export default Skills;
