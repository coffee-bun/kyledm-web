import React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./sections/Home";
import About from "./sections/About";
import Education from "./sections/Education";
import Projects from "./sections/Project";
import Contact from "./sections/Contact";
import Otherprojects from "./sections/Otherprojects"; // Import the new component
import Navbar from "./components/navbar";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/other-projects" element={<Otherprojects />} /> {/* New route */}
      </Routes>
    </Router>
  );
}

export default App;