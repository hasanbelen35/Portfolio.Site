import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
function RouterConfig() {
  return (
    <div>
      <Routes>
        F<Route path="/" element={<Home />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path = "/contact" element = {<Contact />}   />
        <Route path="/education" element={<Education />}></Route>
      </Routes>
    </div>
  );
}

export default RouterConfig;
