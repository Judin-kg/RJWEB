import React from "react";
import "./Service.css";
import {
  FaBullhorn,
  FaVideo,
  FaRobot,
  FaPalette,
  FaUsers,
} from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { AiOutlineLineChart } from "react-icons/ai";

const services = [
  {
    title: "Digital Marketing",
    icon: <FaBullhorn />,
    desc: "Boost your online presence with result-driven marketing strategies.",
  },
  {
    title: "Web Development",
    icon: <MdWeb />,
    desc: "Build powerful websites, web apps, and software tailored to your needs.",
  },
  {
    title: "Lead Generation",
    icon: <AiOutlineLineChart />,
    desc: "Generate high-quality leads to grow your business effectively.",
  },
  {
    title: "Video Creation & Editing",
    icon: <FaVideo />,
    desc: "Create and edit engaging videos to captivate your audience.",
  },
  {
    title: "AI Video Creation",
    icon: <FaRobot />,
    desc: "Produce stunning AI-powered videos in minutes with next-gen tools.",
  },
  {
    title: "AI Agent / AI Assistant",
    icon: <FaRobot />,
    desc: "Automate tasks and enhance engagement with intelligent AI agents.",
  },
  {
    title: "Graphic Design",
    icon: <FaPalette />,
    desc: "Design creative visuals, logos, and brand elements with impact.",
  },
  {
    title: "Social Media Optimization & Marketing (SMO / SSM)",
    icon: <FaUsers />,
    desc: "Enhance your brand visibility and drive engagement through social media strategies.",
  },
];

const Service = () => {
  return (
    <section className="services-section">
      <h2 className="services-heading">
        Our <span>Services</span>
      </h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
