import React, { useEffect, useState, useRef } from "react";
import "./About.css";
import aboutVideo from "../src/assets/sample-video.mp4"; // replace with your video

const About = () => {
  const [typedText, setTypedText] = useState("");
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);
  const paragraph =
    "RJ ATLAS DIGITAL AI is a pioneering IT company where innovation is in our DNA, committed to delivering groundbreaking digital solutions by combining deep expertise in Web and App Development, Digital Marketing, and Creative Designing with the transformative power of Artificial Intelligence. We are constantly exploring and implementing every exciting development in the tech space—from cutting-edge digital builds to comprehensive Social Media Management—to ensure our clients always remain at the forefront. Our holistic approach means we handle all your digital needs seamlessly, empowering businesses globally with the intelligent, integrated solutions required for digital excellence and sustained success.";

  // Intersection Observer to trigger animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 } // trigger when 30% of section visible
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  // Typewriter effect after animation triggered
  useEffect(() => {
    if (!animate) return;
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(paragraph.slice(0, index + 1));
      index++;
      if (index === paragraph.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [animate, paragraph]);

  return (
    <section className="about-section" id="aboutus" ref={sectionRef}>
      <div className="about-container">
        {/* Video sliding from left */}
        <div className={`about-video ${animate ? "slide-left" : ""}`}>
          <video src={aboutVideo} autoPlay loop muted />
        </div>

        {/* Text sliding from right */}
        <div className={`about-text ${animate ? "slide-right" : ""}`}>
          <h2 className="about-heading">
            <span className="about-white">About </span>
            <span className="about-violet">Us</span>
          </h2>
          <p className="about-paragraph">{typedText}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
