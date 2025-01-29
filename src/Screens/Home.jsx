import React from "react";
import HeroSection from "../components/HeroSection.jsx";
import ServiceSection from "../components/ServiceSection";
import AboutUsSection from "../components/AboutUsSection";
import ProcessSection from "../components/ProcessSection";
import Showcase from "../components/Showcase";
import Testimonial from "../components/Testimonial";
import "../index.css";

const Home = () => {
  React.useEffect(() => {
    // Set global styles for body and document
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflowX = "hidden"; // Disable horizontal scrolling
    document.body.style.overflowY = "auto";  // Allow vertical scrolling
    document.body.style.height = "100%";
    document.documentElement.style.height = "100%";
  }, []);

  return (
    <div>
      <HeroSection />
      <ServiceSection />
      <AboutUsSection />
      <ProcessSection />
      <Showcase />
      <Testimonial />
    </div>
  );
};

export default Home;
