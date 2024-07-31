import { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import "../componentCSS/Education.css";

function Education() {
  // STATE DEFINING
  const [primaryContent, setPrimaryContent] = useState("2009-2013");
  const [highSchoolContent, setHighSchoolContent] = useState("2013-2017");
  const [middleSchoolContent, setMiddleSchoolContent] = useState("2017-2019");
  const [universityContent, setUniversityContent] = useState("2019-Present");

  // CLICK STATES
  const [isPrimaryClicked, setIsPrimaryClicked] = useState(false);
  const [isHighSchoolClicked, setIsHighSchoolClicked] = useState(false);
  const [isMiddleSchoolClicked, setIsMiddleSchoolClicked] = useState(false);
  const [isUniversityClicked, setIsUniversityClicked] = useState(false);

  // ONCLICK FUNCTIONS
  const handlePrimaryContent = () => {
    setIsPrimaryClicked(!isPrimaryClicked);
    setPrimaryContent(
      isPrimaryClicked
        ? "2009-2013"
        : "Osman Çınar Primary School. I spent my best times as a child there"
    );
  };

  const handleHighSchoolContent = () => {
    setIsHighSchoolClicked(!isHighSchoolClicked);
    setHighSchoolContent(
      isHighSchoolClicked
        ? "2013-2017"
        : "Mustafa Uygur Middle School. I have spent good times there."
    );
  };

  const handleMiddleSchoolContent = () => {
    setIsMiddleSchoolClicked(!isMiddleSchoolClicked);
    setMiddleSchoolContent(
      isMiddleSchoolClicked
        ? "2017-2019"
        : "Suphi Koyuncuoğlu Anatolian High School. I completed my high school education here. The place where I made my closest friends :)"
    );
  };

  const handleUniversityContent = () => {
    setIsUniversityClicked(!isUniversityClicked);
    setUniversityContent(
      isUniversityClicked
        ? "2019-Present"
        : "Izmir Democracy University. I am actively studying in the Department of Management and Information Systems. I continue to develop myself in the field of software."
    );
  };

  return (
    <div className="education-page-div">
      <Container className="container-education">
        <div className="education-title">MY EDUCATION</div>
        <Row className="education-row">
          <Col md="3">
            <motion.div
              onClick={handlePrimaryContent}
              className="box"
              initial={{ opacity: 0, x: "100vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.1, delay: 0 }}
              whileHover={{
                y: -70,
                transition: { duration: 0.2 },
                zIndex: 1000
              }}
            >
              {primaryContent}
            </motion.div>
          </Col>
          <Col md="3">
            <motion.div
              onClick={handleHighSchoolContent}
              className="box"
              initial={{ opacity: 0, x: "100vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.1, delay: 0.1 }}
              whileHover={{
                y: -70,
                transition: { duration: 0.2 },
                zIndex: 1000
              }}
            >
              {highSchoolContent}
            </motion.div>
          </Col>
          <Col md="3">
            <motion.div
              onClick={handleMiddleSchoolContent}
              className="box"
              initial={{ opacity: 0, x: "100vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.1, delay: 0.2 }}
              whileHover={{
                y: -70,
                transition: { duration: 0.2 },
                zIndex: 1000
              }}
            >
              {middleSchoolContent}
            </motion.div>
          </Col>
          <Col md="3">
            <motion.div
              onClick={handleUniversityContent}
              className="box"
              initial={{ opacity: 0, x: "100vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.1, delay: 0.3 }}
              whileHover={{
                y: -70,
                transition: { duration: 0.2 },
                zIndex: 1000
              }}
            >
              {universityContent}
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Education;
