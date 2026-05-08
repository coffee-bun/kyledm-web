import React from "react";
// Ensure all necessary components are imported from react-router-dom
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./sections/Home";
import About from "./sections/About";
import Education from "./sections/Education";
import Projects from "./sections/Project";
import Contact from "./sections/Contact";
import Navbar from "./components/navbar";

function App() {
  return (
    /* Use Router (HashRouter) to ensure GitHub Pages handles your routes correctly */
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;