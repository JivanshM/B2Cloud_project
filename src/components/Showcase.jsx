import React, { useState, useEffect } from "react";
import projectImage from "../assets/projects.jpeg";

const Showcase = () => {
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
      title: "UI Design",
      subtitle: "Creative Rebranding for Logo",
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
      fontFamily: "'Poppins', sans-serif", // Use Poppins font for the whole section
      textAlign: "center",
    },
    title: {
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: "2.5rem",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", // Two columns for larger screens, one column for mobile
      gap: "1.5rem",
      alignItems: "start",
    },
    card: {
      position: "relative",
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      display: "flex",
      flexDirection: "column", // Stack content vertically
      cursor: "pointer", // Make card act like a button
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    image: {
      width: "100%",
      height: "auto",
      display: "block",
    },
    content: {
      padding: "1rem",
      textAlign: "left",
      flexGrow: 1, // Allow content to fill available space
      display: "flex",
      flexDirection: "column", // Ensure text content stays in a vertical layout
      justifyContent: "flex-start", // Align content at the top
      backgroundColor: "transparent", // Make text background transparent
    },
    subtitle: {
      color: "#666",
      fontSize: "0.9rem",
    },
    negativeMargin: {
      marginTop: isMobile ? "0" : "-40vh", // Apply negative margin on desktop
    },
    cardHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Showcase</h2>
      <div style={styles.grid}>
        {/* Card 1 */}
        <div
          style={styles.card}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = styles.cardHover.transform;
            e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "";
            e.currentTarget.style.boxShadow = "";
          }}
        >
          <img
            src={showcaseItems[0].image}
            alt={showcaseItems[0].title}
            style={styles.image}
          />
          <div style={styles.content}>
            <h3>{showcaseItems[0].title}</h3>
            <p style={styles.subtitle}>{showcaseItems[0].subtitle}</p>
          </div>
        </div>

        {/* Conditionally render empty spaces */}
        {!isMobile && (
          <>
            <div></div>
            <div></div>
          </>
        )}

        {/* Card 2 */}
        <div
          style={{ ...styles.card, ...styles.negativeMargin }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = styles.cardHover.transform;
            e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "";
            e.currentTarget.style.boxShadow = "";
          }}
        >
          <img
            src={showcaseItems[1].image}
            alt={showcaseItems[1].title}
            style={styles.image}
          />
          <div style={styles.content}>
            <h3>{showcaseItems[1].title}</h3>
            <p style={styles.subtitle}>{showcaseItems[1].subtitle}</p>
          </div>
        </div>

        {/* Card 3 */}
        <div
          style={styles.card}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = styles.cardHover.transform;
            e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "";
            e.currentTarget.style.boxShadow = "";
          }}
        >
          <img
            src={showcaseItems[2].image}
            alt={showcaseItems[2].title}
            style={styles.image}
          />
          <div style={styles.content}>
            <h3>{showcaseItems[2].title}</h3>
            <p style={styles.subtitle}>{showcaseItems[2].subtitle}</p>
          </div>
        </div>

        {/* Conditionally render empty spaces */}
        {!isMobile && (
          <>
            <div></div>
            <div></div>
          </>
        )}

        {/* Card 4 */}
        <div
          style={{ ...styles.card, ...styles.negativeMargin }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = styles.cardHover.transform;
            e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "";
            e.currentTarget.style.boxShadow = "";
          }}
        >
          <img
            src={showcaseItems[3].image}
            alt={showcaseItems[3].title}
            style={styles.image}
          />
          <div style={styles.content}>
            <h3>{showcaseItems[3].title}</h3>
            <p style={styles.subtitle}>{showcaseItems[3].subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
