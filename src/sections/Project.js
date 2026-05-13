
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import "../styles/Project.css";
import SampleImage from "../assets/sample-image.jpg";
import SampleImage2 from "../assets/portfolio1.png";
import SampleImage3 from "../assets/portfolio2.png";
import Proj1 from "../assets/port-1.png";
import Proj2 from "../assets/port-2.png";
import Proj3 from "../assets/port-3.png";
import finance1 from "../assets/projects/finance-1.png";
import finance2 from "../assets/projects/finance-2.png";
import finance3 from "../assets/projects/finance-3.png";
import PUP1 from "../assets/projects/mypupqc-1.png";
import PUP2 from "../assets/projects/mypupqc-2.png";
import PUP3 from "../assets/projects/mypupqc-3.png";
import Flor1 from "../assets/projects/flor-1.png";
import Flor2 from "../assets/projects/flor-2.png";
import Flor3 from "../assets/projects/flor-3.png";
import Eco1 from "../assets/projects/eco-1.png";
import Eco2 from "../assets/projects/eco-2.png";
import Eco3 from "../assets/projects/eco-3.png";
import Algo1 from "../assets/projects/algo-1.png";
import Algo2 from "../assets/projects/algo-2.png";
import Algo3 from "../assets/projects/algo-3.png";
import App1 from "../assets/projects/vivid-1.jpg";
import App2 from "../assets/projects/vivid-2.jpg";
import App3 from "../assets/projects/vivid-3.jpg";
import App4 from "../assets/projects/vivid-logo.png";
import gfmic1 from "../assets/projects/gfmic1.png";
import gfmic2 from "../assets/projects/gfmic-2.png";
import gfmic3 from "../assets/projects/gfmic-3.png";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  // Track which image in the gallery is currently active
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectsData = [
    {
    id: 1,
    title: "My Portfolio Website",
    image: Proj1,
    gallery: [Proj1, Proj2, Proj3],
    description: "A fully responsive personal portfolio website built with React.js that showcases my front-end development skills, UI/UX design expertise, and professional journey. Features include dynamic project filtering, smooth animations, responsive layouts, and an interactive contact form. This project demonstrates my ability to create modern, user-friendly web applications that effectively communicate personal branding and technical capabilities.",
    link: "#"
  },
    {
      id: 2,
      title: "Healthcare System / Finance Management System",
      image: finance1,
      gallery: [ finance1, finance2, finance3],
      description: "Became part of a thesis development team as the Front-End Developer for a Healthcare and Finance Management System designed for hospital use. Responsible for designing and developing the user interface of the Finance Management System, focusing on creating organized, user-friendly, and responsive layouts to improve usability and workflow efficiency. Collaborated with the team throughout the development process, participated in",
      link: "#"
    },
      {
      id: 3,
      title: "myPUPQC AI",
      image: PUP1,
      gallery: [ PUP1, PUP2, PUP3,],
      description: "Had the opportunity to contribute to the UI design and development of a university portal with a social media-inspired interface aimed at improving student engagement and accessibility. Assisted in creating modern and responsive layouts for different system features, focusing on usability, organized navigation, and a student-friendly experience. Also contributed to the UI design of the system’s AI Chatbot feature, creating an interactive and accessible interface intended to support student inquiries and improve user interaction within the platform.",
      link: "#"
    },
      {
      id: 4,
      title: "Flor De Grace Student Information System",
      image: Flor1,
      gallery: [ Flor1, Flor2, Flor3,],
      description: "Contributed to the UI interface design of the Flor De Grace Student Information System during internship, assisting in creating responsive and user-friendly layouts for both the SIS platform and website. Helped design organized interface components that improved accessibility, navigation, and overall user experience.",
      link: "#"
    },
      {
      id: 5,
      title: "Eco Play Hues Website",
      image: Eco1,
      gallery: [ Eco1, Eco2, Eco3,],
      description: "Worked on the Eco Play Hues Website as one of my freelance experiences during college, developing a website for a thesis project focused on promoting unique and eco-friendly crayons. Used Wix to design and create a responsive and visually appealing website, focusing on organized content presentation, user-friendly navigation, and a clean modern layout suitable for the project’s branding and goals.",
      link: "#"
    },
      {
      id: 6,
      title: "Algori tees eCommerce System",
      image: Algo1,
      gallery: [ Algo1, Algo2, Algo3,],
      description: "Became part of the development team for the Algori Tees eCommerce System during college as a Front-End Developer for our final requirement in the Integration subject. Contributed to the design and development of the Shopping Cart and Checkout features, focusing on creating responsive, user-friendly, and organized interfaces to improve the overall shopping experience. Assisted in implementing clean UI layouts and smooth user interactions for the eCommerce workflow.",
      link: "#"
    },
      {
      id: 7,
      title: "Vivid Vibes Motivational Application",
      image: App4,
      gallery: [ App1, App2, App3,],
      description: "Developed the Vivid Vibes Motivational Application as one of the final project requirements during college, creating a functional mobile application that provides daily motivational and inspirational quotes for users. Designed and developed a clean and user-friendly interface focused on simple navigation, accessibility, and an engaging user experience while applying front-end development and UI design skills throughout the project.",
      link: "#"
    },
      {
      id: 8,
      title: "Goverment Financial Management Innovators Circle Inc.",
      image: gfmic1,
      gallery: [ gfmic1, gfmic2, gfmic3],
      description: "Became part of the project during internship as one of the Quality Assurance Testers, focusing on the finance and certificate features of the system. Assisted in conducting system testing, identifying issues, validating functionality, and ensuring the reliability and accuracy of core system processes before deployment.",
      link: "#"
    }
  ];

  // Open modal and reset index to 0
  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => setSelectedProject(null);

  // Navigation Logic
  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === selectedProject.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
    );
  };
  
  return (
<div className="prjcts-container">
  <div className="projects-layout">
    {/* Left Fixed Sidebar */}
    <aside className="left-sidebar">
      <div className="sidebar-content">
        <h2 className="sidebar-title">Projects I've Worked On</h2>
        <div className="get-in-touch">
          <p className="proj-description">
            I'm always open to discussing new projects and creative ideas.
          </p>
          <Link to="/contact">
            <button className="contact-btn">Contact Me</button>
          </Link>
          {/* Add the new Other Projects button here */}
          <Link to="/other-projects">
            <button className="other-projects-btn">Other Projects</button>
          </Link>
        </div>
      </div>
    </aside>

<main className="right-content">
          {projectsData.map((project) => (
            <div className="projects-main-container" key={project.id}>
              <div className="project-display">
                <img src={project.image} alt={project.title} className="project-image" />
                <h2 className="prjcts-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <button className="view-prjct-btn" onClick={() => openModal(project)}>
                  View Project
                </button>
              </div>
            </div>
          ))}
        </main>
      </div>

      {/* CAROUSEL MODAL */}
      {selectedProject && (
        <div className="proj-modal-overlay" onClick={closeModal}>
          <div className="proj-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="proj-close-modal-btn" onClick={closeModal}>&times;</button>
            
            <div className="proj-carousel-container">
              {/* Previous Button */}
              <button className="proj-nav-btn proj-prev" onClick={prevImage}>&#10094;</button>
              
              <div className="proj-image-wrapper">
                <img 
                  src={selectedProject.gallery[currentImageIndex]} 
                  alt="Project slide" 
                  className="proj-modal-img-single" 
                />
                <p className="proj-image-counter">
                  {currentImageIndex + 1} / {selectedProject.gallery.length}
                </p>
              </div>

              {/* Next Button */}
              <button className="proj-nav-btn proj-next" onClick={nextImage}>&#10095;</button>
            </div>
            
            <h3 className="proj-modal-project-title">{selectedProject.title}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;