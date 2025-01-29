import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import projectImage from "../assets/projects.jpeg";

const Portfolio = () => {
  const showcaseItems = [
    {
      image: projectImage,
      title: "Web UI Design",
      subtitle: "Creative UI Design",
    },
    {
      image: projectImage,
      title: "To Design Digital Strategy",
      subtitle: "Social Media Marketing",
    },
    {
      image: projectImage,
      title: "UI Design",
      subtitle: "Creative Rebranding for Logo",
    },
    {
      image: projectImage,
      title: "Graphic Design",
      subtitle: "Innovative Concepts",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Check if screen width is less than 768px
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call it once to check initial width

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const styles = {
    container: {
      padding: "2rem",
      fontFamily: "'Arial', sans-serif",
      textAlign: "center",
    },
    titleContainer: {
      backgroundColor: "#000",
      color: "#fff",
      width: "80%",
      margin: "0 auto",
      padding: "1rem",
      borderRadius: "10px",
    },
    title: {
      fontSize: "2rem",
      fontWeight: "bold",
      margin: 0,
    },
    grid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", // Two columns for larger screens, one column for mobile
      gap: "1.5rem",
      marginTop: "2rem",
    },
    card: {
      borderRadius: "20px", // Make corners more rounded
      overflow: "hidden",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "transparent", // Make background transparent
      transform: isMobile ? "scale(0.8)" : "scale(0.9)", // Scale down the cards
    },
    image: {
      borderRadius: "20px 20px 0 0", // Rounded top corners for image
      width: "100%",
      height: "auto",
      display: "block",
    },
    content: {
      padding: "1rem",
      textAlign: "left",
      backgroundColor: "rgba(255, 255, 255, 0.8)", // Slightly transparent background for text
      borderRadius: "0 0 20px 20px", // Rounded bottom corners for content
    },
    subtitle: {
      color: "#666",
      fontSize: "0.9rem",
    },
    lightContainer: {
      backgroundColor: "#f0f0f0",
      color: "#000",
      width: "80%",
      margin: "2rem auto", // Add margin to separate it from the cards
      padding: "1rem",
      borderRadius: "10px",
      textAlign: "center",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#000",
      color: "#fff",
      border: "none",
      borderRadius: "30px",
      cursor: "pointer",
      marginTop: "1rem",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.titleContainer}>
        <h2 style={styles.title}>Portfolio</h2>
      </div>
      <div style={styles.grid}>
        {showcaseItems.map((item, index) => (
          <Link
            key={index}
            to={{
              pathname: "/project",
              state: { ...item }
            }}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div style={styles.card}>
              <img
                src={item.image}
                alt={item.title}
                style={styles.image}
              />
              <div style={styles.content}>
                <h3>{item.title}</h3>
                <p style={styles.subtitle}>{item.subtitle}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div style={styles.lightContainer}>
        <h2>New Section</h2>
        <button style={styles.button}>Click Me</button>
      </div>
    </div>
  );
};

export default Portfolio;
