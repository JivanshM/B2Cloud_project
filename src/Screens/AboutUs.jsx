import React from "react";
import AboutUsMain from "../components/AboutUsMain"; // Correct capitalization
import PromotionSection from "../components/PromotionSection"; // Correct capitalization
import TeamSection from "../components/TeamSection"; // Correct capitalization
import "../index.css";

const AboutUs = () => {
  return (
    <div>
      <AboutUsMain /> {/* Ensure capitalization here too */}
      <PromotionSection />
      <TeamSection />
      
    </div>
  );
};

export default AboutUs;
