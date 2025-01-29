import React from "react";
import './AboutUsSection.css';

const AboutUsSection = () => {
  return (
    <section className="about-us-section">
      {/* Left Section */}
      <div className="left-section">
        <img
          src="https://img.freepik.com/free-photo/businesspeople-working-as-team_1098-803.jpg?semt=ais_incoming"
          alt="Team"
        />
        <img
          src="https://img.freepik.com/free-photo/businesspeople-working-as-team_1098-803.jpg?semt=ais_incoming"
          alt="Team"
          className="stacked-image stacked-image-1"
        />
        <img
          src="https://img.freepik.com/free-photo/businesspeople-working-as-team_1098-803.jpg?semt=ais_incoming"
          alt="Team"
          className="stacked-image stacked-image-2"
        />
      </div>

      {/* Right Section */}
      <div className="right-section">
        <h3>About us</h3>
        <h2>The core mission behind all our work</h2>
        <p>
          At B2Cloud, we are a passionate team of developers, designers, and
          content creators dedicated to helping businesses thrive in the digital
          age. With expertise in React, React Native, Jetpack Compose, Spring
          Boot, and UI/UX design, we deliver custom, high-quality solutions
          tailored to your unique needs.
        </p>
        <p>
          Though we’re a young and dynamic team, we’ve successfully completed
          over 5 projects, each showcasing our commitment to excellence,
          innovation, and client satisfaction. Our goal is to bring your business
          to the cloud with intuitive designs and robust, scalable solutions that
          drive real results.
        </p>
        <a href="#">Get Your Free Consultation</a>
      </div>
    </section>
  );
};

export default AboutUsSection;
