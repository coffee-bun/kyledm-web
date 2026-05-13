import React from "react";
import { useState, useEffect, useRef } from "react";
import Footer from "../components/footer";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import Html from "../assets/html-icon.png";
import Css from "../assets/css-icon.png";
import JavaScript from "../assets/javascript-icon.png";
import Bootstrap from "../assets/bootstrap-icon.png";
import ReactIcon from "../assets/react-icon.png";
import WixIcon from "../assets/wix-icon.png";
import FlutterflowIcon from "../assets/flutterflow-icon.png";
import FigmaIcon from "../assets/figma-icon.png";
import CanvaIcon from "../assets/canva-icon.png";
import PhotoshopIcon from "../assets/photoshop-icon.png";
import LightroomIcon from "../assets/lightroom-icon.png";
import FilmoraIcon from "../assets/filmora-icon.png";
import DavinciIcon from "../assets/davinci-icon.png";
import CapcutIcon from "../assets/capcut-icon.png";
import WordIcon from "../assets/word-icon.png";
import ExcelIcon from "../assets/excel-icon.png";
import PowerpointIcon from "../assets/powerpoint-icon.png";
import OutlookIcon from "../assets/outlook-icon.png";
import JiraIcon from "../assets/jira-icon.png";
import MablIcon from "../assets/mabl-icon.png";
import SeleniumIcon from "../assets/selenium-icon.png";
import SampleImage from "../assets/sample-image.jpg";
import QualityImage from "../assets/qa-icon.png";
import DesignImage from "../assets/webdesign-icon.png";
import FrontEmdImage from "../assets/frontend-icon.png";
import WebDevImage from "../assets/webdev-icon.png";
import GraphicImage from "../assets/graphic-icon.png";
import VideoImage from "../assets/video-icon.png";
import PhotoImage from "../assets/photography-icon.png";
import MicroImage from "../assets/office-icon.png";
import FmsImage from "../assets/projects/finance-2.png";
import AIImage from "../assets/projects/mypupqc-1.png";
import SISImage from "../assets/projects/flor-2.png";
import EcoImage from "../assets/projects/eco-1.png";
import VividImage from "../assets/projects/vivid-1.jpg";
import TroubleImage from "../assets/troubleshoot-icon.png";
import PSImage from "../assets/photoshop-image.png";
import SocMedImage from "../assets/socmend-icon.png";


function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef(null);
  const trackRef = useRef(null);
  const animationRef = useRef(null);

  const getSlideWidth = () => 340; // Card width + margin

  const experiences = [
    {
      icon: QualityImage,
      title: "Quality Assurance",
      desc: "Experienced in testing applications, identifying bugs, and ensuring high-quality user experiences through structured QA processes."
    },
    {
      icon: DesignImage,
      title: "Web Designing",
      desc: "Skilled in creating visually appealing and user-friendly interfaces using modern design tools and UI/UX principles."
    },
    {
      icon: FrontEmdImage,
      title: "Front-End Development",
      desc: "Building responsive and interactive websites using HTML, CSS, JavaScript, and modern frameworks like React."
    },
    {
      icon: WebDevImage,
      title: "Web Development",
      desc: "Strong foundation in building structured and optimized web pages using modern web technologies."
    },
    {
      icon: GraphicImage,
      title: "Graphic Designing",
      desc: "Experienced in creating visually appealing designs for social media, presentations, and creative projects using tools such as Canva, Adobe Photoshop, and Lightroom."
    },
          {
      icon: TroubleImage,
      title: "Troubleshooting",
      desc: "Has a experience in resolving common hardware, software, and system-related issues.Familiar with diagnosing technical problems, performing basic maintenance and providing practical solutions"
    },
      {
      icon: VideoImage,
      title: "Video Editing",
      desc: "Passionate about video editing with hands-on experience using Filmora, CapCut, and Adobe editing tools to create engaging content for social media, presentations, and creative projects."
    },
     {
      icon: PhotoImage,
      title: "Photography",
      desc: "Capturing creative and meaningful photos as both a hobby and skill, with experience in photo composition, editing, and visual storytelling for personal and school-related projects."
    },
      {
      icon: PSImage,
      title: "Photoshop",
      desc: "Familiar with Adobe Photoshop and experienced in creating basic graphic designs, photo editing, and visual content for academic and personal projects. Continuously improving design and editing skills through practice and hands-on experience."
    },
      {
      icon: SocMedImage,
      title: "Social Media Graphics",
      desc: "Experienced in creating social media content such as promotional posts, basic branding materials, and short-form video edits for academic, personal, and creative projects. Familiar with designing visually engaging content tailored for different social media platforms."
    },
      {
      icon: MicroImage,
      title: "Microsoft Office",
      desc: "Experienced in using Microsoft Office tools for creating documents, presentations, spreadsheets, and reports, especially for academic projects, research, and documentation during college."
    }
  ];

 const startXRef = useRef(0);
const currentTranslateRef = useRef(0);
const prevTranslateRef = useRef(0);

const maxIndex = Math.max(0, experiences.length - visibleCards);

const getClientX = (e) => {
  return e.touches ? e.touches[0].clientX : e.clientX;
};

const setSliderPosition = (value) => {
  if (trackRef.current) {
    trackRef.current.style.transform = `translate3d(-${value}px, 0, 0)`;
  }
};

const handleDragStart = (e) => {
  setIsDragging(true);

  startXRef.current = getClientX(e);
  prevTranslateRef.current = currentIndex * getSlideWidth();

  if (trackRef.current) {
    trackRef.current.style.transition = "none";
  }
};

const handleDragMove = (e) => {
  if (!isDragging) return;

  const currentX = getClientX(e);
  const deltaX = currentX - startXRef.current;

  let newTranslate = prevTranslateRef.current - deltaX;

  const minOffset = 0;
  const maxOffset = maxIndex * getSlideWidth();

  // Resistance effect
  if (newTranslate < minOffset) {
    newTranslate = minOffset + (newTranslate - minOffset) * 0.25;
  }

  if (newTranslate > maxOffset) {
    newTranslate = maxOffset + (newTranslate - maxOffset) * 0.25;
  }

  currentTranslateRef.current = newTranslate;

  requestAnimationFrame(() => {
    setSliderPosition(newTranslate);
  });
};

const handleDragEnd = () => {
  if (!isDragging) return;

  setIsDragging(false);

  const movedBy =
    currentTranslateRef.current - prevTranslateRef.current;

  let newIndex = currentIndex;

  const threshold = getSlideWidth() * 0.2;

  if (movedBy > threshold && currentIndex < maxIndex) {
    newIndex += 1;
  }

  if (movedBy < -threshold && currentIndex > 0) {
    newIndex -= 1;
  }

  goToSlide(newIndex);
};

const goToSlide = (index) => {
  const newTranslate = index * getSlideWidth();

  setCurrentIndex(index);

  if (trackRef.current) {
    trackRef.current.style.transition =
      "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)";

    setSliderPosition(newTranslate);
  }

  currentTranslateRef.current = newTranslate;
  prevTranslateRef.current = newTranslate;
};
  
    // Modal functionality using React useEffect
  useEffect(() => {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalTag1 = document.getElementById('modalTag1');
    const modalTag2 = document.getElementById('modalTag2');
    const closeBtn = document.querySelector('.close-modal');
    
    // Function to open modal
    function openModal(projectData) {
      if (modalImg && modalTitle && modalDesc && modalTag1 && modalTag2) {
        modalImg.src = projectData.img;
        modalTitle.textContent = projectData.title;
        modalDesc.textContent = projectData.desc;
        modalTag1.textContent = projectData.tag1;
        modalTag2.textContent = projectData.tag2;
        if (modal) {
          modal.style.display = 'flex';
          document.body.style.overflow = 'hidden';
        }
      }
    }
    
    // Listen for custom event from card clicks
    const handleOpenModal = (event) => {
      openModal(event.detail);
    };
    
    window.addEventListener('openModal', handleOpenModal);
    
    // Close modal when clicking close button
    const handleCloseClick = () => {
      if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    };
    
    // Close modal when clicking outside
    const handleModalClick = (event) => {
      if (event.target === modal) {
        if (modal) {
          modal.style.display = 'none';
          document.body.style.overflow = 'auto';
        }
      }
    };
    
    // Close modal with Escape key
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && modal && modal.style.display === 'flex') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    };
    
    if (closeBtn) {
      closeBtn.addEventListener('click', handleCloseClick);
    }
    
    if (modal) {
      modal.addEventListener('click', handleModalClick);
    }
    
    document.addEventListener('keydown', handleKeyDown);
    
    // Cleanup event listeners
    return () => {
      window.removeEventListener('openModal', handleOpenModal);
      if (closeBtn) {
        closeBtn.removeEventListener('click', handleCloseClick);
      }
      if (modal) {
        modal.removeEventListener('click', handleModalClick);
      }
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
    
      <section className="page1-section" id="home">
        <div className="hero-content">
          <div className="hero-rating">
            ⭐ 4.9/5 Rating
          </div>
          <h1 className="hero-name">Kyle Mendoza</h1>
          <p className="hero-description">
            I’m Kyle D. Mendoza, your Quality Assurance and Development partner dedicated to
            transforming complex software challenges into seamless, high-performance digital
            experiences that ensure every user interaction is reliable, intuitive, and flawlessly executed.
          </p>
        </div>
      </section>

      <section className="page2-section">
        <div className="page2col1">
          <div className="tools-slider">
            <div className="tools-track">
              <div className="tool-icon"> <img src={WordIcon} alt="Word Icon" /></div>
              <div className="tool-icon"> <img src={ExcelIcon} alt="Excel Icon" /></div>
              <div className="tool-icon"> <img src={PowerpointIcon} alt="Powerpoint Icon" /></div>
              <div className="tool-icon"> <img src={OutlookIcon} alt="Outlook Icon" /></div>
              <div className="tool-icon"> <img src={Html} alt="Html Icon" /></div>
              <div className="tool-icon"> <img src={Css} alt="Css Icon" /></div>
              <div className="tool-icon"> <img src={JavaScript} alt="JavaScript Icon" /></div>
              <div className="tool-icon"> <img src={Bootstrap} alt="Bootstrap Icon" /></div>
              <div className="tool-icon"> <img src={ReactIcon} alt="React Icon" /></div>
              <div className="tool-icon"> <img src={WixIcon} alt="Wix Icon" /></div>
              <div className="tool-icon"> <img src={FlutterflowIcon} alt="Flutterflow Icon" /></div>
              <div className="tool-icon"> <img src={FigmaIcon} alt="Figma Icon" /></div>
              <div className="tool-icon"> <img src={CanvaIcon} alt="Canva Icon" /></div>
              <div className="tool-icon"> <img src={PhotoshopIcon} alt="Photoshop Icon" /></div>
              <div className="tool-icon"> <img src={LightroomIcon} alt="Lightroom Icon" /></div>
              <div className="tool-icon"> <img src={FilmoraIcon} alt="Filmora Icon" /></div>
              <div className="tool-icon"> <img src={DavinciIcon} alt="Davinci Icon" /></div>
              <div className="tool-icon"> <img src={CapcutIcon} alt="Capcut Icon" /></div>
              <div className="tool-icon"> <img src={JiraIcon} alt="Jira Icon" /></div>
              <div className="tool-icon"> <img src={MablIcon} alt="Mabl Icon" /></div>
              <div className="tool-icon"> <img src={SeleniumIcon} alt="Selenium Icon" /></div>
            </div>
          </div>
        </div>

        <div className="page2col2">
          <div className="overview-container">
            <h2 className="overview-title">Overview</h2>
            <p className="overview-description">
              Creative Professional with a passion for building clean, user-focused designs while
              contributing meaningful and dependable digital services to the community.
  
            </p>
            <div className="overview-tags">
              <span className="tag">Creative</span>
              <span className="tag">Collaborative</span>
              <span className="tag">Hardworking</span>
            </div>
          </div>
        </div>
        
        <div className="experience-wrapper">
          <div 
            className="experience-slider"
            ref={sliderRef}
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
            onTouchCancel={handleDragEnd}
            style={{ 
              cursor: isDragging ? 'grabbing' : 'grab',
              touchAction: 'none' // Prevents scrolling while swiping
            }}
          >
            <div
              className="experience-track"
              ref={trackRef}
              style={{
                transform: `translateX(-${currentIndex * getSlideWidth()}px)`,
                transition: isAnimating ? 'none' : 'transform 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1)'
              }}
            >
              {experiences.map((exp, index) => (
                <div className="experience-card" key={index}>
                  <img src={exp.icon} alt="icon" className="card-icon" />
                  <h3>{exp.title}</h3>
                  <p>{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Optional: Add pagination dots for mobile */}
          <div className="pagination-dots">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                className={`pagination-dot ${currentIndex === index ? 'active' : ''}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

 
      <section className="page3-section" id="education">

        {/* HEADER */}
<div className="page3-content">
  <div className="page3-header">
    <h3 className="page3-subtitle">PROJECTS</h3>

    <h1 className="page3-title">
      Transforming Ideas Into Creative Digital Experiences That Are Functional, Modern, and Impactful.
    </h1>

    <p className="page3-description">
      Each project I create is driven by creativity, continuous learning, and a passion for building meaningful digital experiences
    </p>

    <Link to="/projects" className="page3-link">
      <button className="page3-button">
        EXPLORE PROJECTS
      </button>
    </Link>
  </div>
</div>

        {/* FULL WIDTH SLIDER */}
        <div className="projects-slider-wrapper">

          {/* LEFT */}
          <button
            className="slider-btn left"
            onClick={() => {
              const slider = document.querySelector(".projects-slider");
              if (slider) {
                slider.scrollBy({
                  left: -400,
                  behavior: "smooth",
                });
              }
            }}
          >
            &#10094;
          </button>

          {/* SLIDER */}
          <div className="projects-slider">

            {[
              {
                title: "Healthcare System",
                desc: "A healthcare management system developed for our college thesis in collaboration with San Mateo Doctors Hospital, designed to improve patient record management, appointment handling, and hospital workflow efficiency.",
                img: FmsImage,
                tag1: "System",
                tag2: "2025",
              },
              {
                title: "myPUPQC AI System",
                desc: "Had the opportunity to contribute to the UI design and development of a university portal with a social media-inspired interface aimed at improving student engagement and accessibility. Assisted in creating modern and responsive layouts for different system features, focusing on usability, organized navigation, and a student-friendly experience.",
                img:  AIImage,
                tag1: "System",
                tag2: "2025",
              },
              {
                title: "Flor De Grace SIS System",
                desc: "Contributed to the UI interface design of the Flor De Grace Student Information System during internship, assisting in creating responsive and user-friendly layouts for both the SIS platform and website. Helped design organized interface components that improved accessibility, navigation, and overall user experience.",
                img: SISImage,
                tag1: "Website",
                tag2: "2025",
              },
              {
                title: "EcoPlay Hues Website",
                desc: "Reservation platform.Worked on the Eco Play Hues Website as one of my freelance experiences during college, developing a website for a thesis project focused on promoting unique and eco-friendly crayons.",
                img: EcoImage,
                tag1: "App",
                tag2: "2025",
              },
              {
                title: "Motivational App",
                desc: "Designed and developed a motivational mobile application as a college project that provides daily inspirational and motivational quotes for users. Created a clean and user-friendly interface focused on accessibility, simple navigation, and an engaging user experience.",
                img: VividImage,
                tag1: "System",
                tag2: "2024",
              },
            ].map((project, index) => (
              <div
                className="project-card"
                key={index}
                style={{ backgroundImage: `url(${project.img})` }}
                onClick={() => {
                  // Dispatch custom event with project data
                  window.dispatchEvent(new CustomEvent('openModal', { 
                    detail: { 
                      img: project.img, 
                      title: project.title, 
                      desc: project.desc,
                      tag1: project.tag1,
                      tag2: project.tag2
                    } 
                  }));
                }}
              >
                <div className="project-tags">
                  <span>{project.tag1}</span>
                  <span>{project.tag2}</span>
                </div>

                <div className="project-title">{project.title}</div>

                <div className="project-overlay">
                  <h2>{project.title}</h2>
                  <p>{project.desc}</p>
                </div>
              </div>
            ))}

          </div>

          {/* RIGHT */}
          <button
            className="slider-btn right"
            onClick={() => {
              const slider = document.querySelector(".projects-slider");
              if (slider) {
                slider.scrollBy({
                  left: 400,
                  behavior: "smooth",
                });
              }
            }}
          >
            &#10095;
          </button>

        </div>

        {/* MODAL FOR ENLARGED IMAGE */}
        <div id="imageModal" className="image-modal" style={{ display: 'none' }}>
          <div className="modal-content">
            <span className="close-modal">&times;</span>
            <div className="modal-image-container">
              <img id="modalImage" src="" alt="Project" />
            </div>
            <div className="modal-info">
              <div className="modal-tags">
                <span id="modalTag1"></span>
                <span id="modalTag2"></span>
              </div>
              <h2 id="modalTitle"></h2>
              <p id="modalDesc"></p>
            </div>
          </div>
        </div>

      </section>

      <Footer />
    </>
  );
}

export default Home;