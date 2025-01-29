import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Portfolio from "./Screens/Portfolio";
import Aboutus from "./Screens/AboutUs";
import ProjectPage from "./Screens/ProjectPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactUs from "./Screens/ContactUs";
import "./index.css";

const App = () => {
  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflowX = "hidden";
    document.body.style.overflowY = "auto";
    document.body.style.height = "100%";
    document.documentElement.style.height = "100%";
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/project" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
