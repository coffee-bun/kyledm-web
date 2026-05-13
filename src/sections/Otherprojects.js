// OtherProjects.jsx
import React, { useState, useRef } from "react";
import "../styles/Otherprojects.css";
import Footer from "../components/footer";
import "../styles/footer.css";
import SampleImage from "../assets/sample-image.jpg";

function OtherProjects() {

  const [selectedImage, setSelectedImage] = useState(null);

  // DRAG SLIDER
  const sliderRef = useRef(null);

  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    sliderRef.current.classList.add("dragging");

    startX = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft = sliderRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
    sliderRef.current.classList.remove("dragging");
  };

  const handleMouseUp = () => {
    isDown = false;
    sliderRef.current.classList.remove("dragging");
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;

    e.preventDefault();

    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;

    sliderRef.current.scrollLeft = scrollLeft - walk;
  };


            const otherProjectsData = [
            {
                image: SampleImage,
            },
            {
                image: SampleImage,
            },
            {
                image: SampleImage,
            },
            {
                image: SampleImage,
            },
            ];

  return (
    <>
      <div className="other-projects-container">

        <div className="other-projects-wrapper">

          {/* HERO */}
          <div className="other-projects-hero">

            <span className="other-projects-subtitle">
              OTHER PROJECTS
            </span>

            <h1 className="other-projects-title">
              Turning Ideas Into <span>Visual Stories</span>
            </h1>

            <p className="other-projects-description">
              A collection of creative edits, Photoshop projects,
              and visual concepts crafted with attention to detail
              and modern design aesthetics.
            </p>

          </div>

          {/* SLIDER */}
          <div className="other-slider-section">

            <div
              className="other-slider-container"
              ref={sliderRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >

{otherProjectsData.map((project, index) => (
  <div
    className="other-slider-card"
    key={index}
    onClick={() => setSelectedImage(project.image)}
  >
    <img
      src={project.image}
      alt="project"
      className="other-slider-image"
      draggable="false"
    />
  </div>
              ))}

            </div>

          </div>

        </div>

      </div>

      {/* IMAGE MODAL */}
      {selectedImage && (
        <div
          className="other-image-modal"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="enlarged project"
            className="other-image-modal-content"
          />
        </div>
      )}

      <Footer />
    </>
  );
}

export default OtherProjects;