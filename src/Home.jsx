import React from "react";
import "./Home.css";
import videoFile from "../src/assets/sample-video1.mp4";

const Home = () => {
  return (
    <section className="home-section"id="home">
      <video className="background-video" src={videoFile} autoPlay loop muted />
      <div className="overlay"></div>

      <div className="home-content">
        {/* Main Heading */}
        <h1 className="main-title">Welcome to RJ ATLAS DIGITAL AI</h1>
        <p className="sub-title">Empowering your business with Digital & AI solutions</p>

        {/* Three Transparent Buttons */}
        <div className="button-group">
          <button className="square-btn">Digital Marketing</button>
          <button className="square-btn">Web Development</button>
          <button className="square-btn">Designing</button>
        </div>

        {/* Explore Button */}
        <button className="explore-btn">Explore Now</button>
      </div>
    </section>
  );
};

export default Home;
