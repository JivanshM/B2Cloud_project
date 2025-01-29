import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import projectImage from "../assets/projects.jpeg";

const ProjectPage = () => {
  const location = useLocation();
  const { image = projectImage, title = "Project Title", subtitle = "Project Subtitle" } = location.state || {};

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    container: {
      padding: "2rem",
      fontFamily: "'Arial', sans-serif",
    },
    imageContainer: {
      position: "relative",
      textAlign: "center",
      marginBottom: "2rem",
    },
    image: {
      width: "80%",
      height: "auto",
      maxHeight: "65vh",
      borderRadius: "10px",
      display: "block",
      margin: "0 auto",
    },
    textBoxContainer: {
      position: "absolute",
      bottom: "2%",
      width: "80%",
      left: "10%",
      display: "flex",
      justifyContent: "space-around",
      transform: "translateY(50%)",
      flexWrap: "wrap",
    },
    textBox: {
      width: "20%",
      backgroundColor: "#000",
      color: "#fff",
      padding: "0.5rem",
      borderRadius: "5px",
      textAlign: "center",
      fontSize: "0.9rem",
      marginBottom: "1rem",
    },
    textBoxTitle: {
      fontSize: "1rem",
      fontWeight: "bold",
      marginBottom: "0.2rem",
    },
    textBoxSubtitle: {
      fontSize: "0.8rem",
    },
    descriptionContainer: {
      marginTop: "6rem",
      textAlign: "left",
      maxWidth: "80%",
      margin: "0 auto",
    },
    descriptionSection: {
      marginBottom: "2rem",
    },
    sectionTitle: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      marginBottom: "0.5rem",
    },
    sectionContent: {
      fontSize: "1rem",
      color: "#666",
    },
    imageRow: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      marginTop: "4rem",
      maxWidth: "80%",
      margin: "0 auto",
      flexWrap: isMobile ? "wrap" : "nowrap",
    },
    rowImage: {
      width: isMobile ? "80%" : "30%",
      marginBottom: isMobile ? "1rem" : "0",
      borderRadius: "10px",
    },
    textBoxContainerMobile: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "1rem",
    },
    textBoxMobile: {
      width: "80%",
      backgroundColor: "#000",
      color: "#fff",
      padding: "0.5rem",
      borderRadius: "5px",
      textAlign: "center",
      fontSize: "0.9rem",
      marginBottom: "1rem",
    },
    recentProjects: {
      marginTop: "4rem",
      textAlign: "center",
    },
    recentProjectsTitle: {
      fontSize: "1.8rem",
      fontWeight: "bold",
      marginBottom: "2rem",
    },
    cardContainer: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      justifyContent: "space-around",
      flexWrap: "wrap",
    },
    card: {
      width: isMobile ? "100%" : "25%",
      padding: "1rem",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#fff",
      textAlign: "center",
      marginBottom: "2rem",
    },
    cardImage: {
      width: "100%",
      borderRadius: "10px",
      marginBottom: "1rem",
    },
    cardTitle: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      marginBottom: "0.5rem",
    },
    cardDescription: {
      fontSize: "0.9rem",
      color: "#666",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img src={image} alt="Project" style={styles.image} />
        {isMobile ? (
          <div style={styles.textBoxContainerMobile}>
            <div style={styles.textBoxMobile}>
              <div style={styles.textBoxTitle}>{title}</div>
              <div style={styles.textBoxSubtitle}>{subtitle}</div>
            </div>
            <div style={styles.textBoxMobile}>
              <div style={styles.textBoxTitle}>{title}</div>
              <div style={styles.textBoxSubtitle}>{subtitle}</div>
            </div>
            <div style={styles.textBoxMobile}>
              <div style={styles.textBoxTitle}>{title}</div>
              <div style={styles.textBoxSubtitle}>{subtitle}</div>
            </div>
            <div style={styles.textBoxMobile}>
              <div style={styles.textBoxTitle}>{title}</div>
              <div style={styles.textBoxSubtitle}>{subtitle}</div>
            </div>
          </div>
        ) : (
          <div style={styles.textBoxContainer}>
            <div style={styles.textBox}>
              <div style={styles.textBoxTitle}>{title}</div>
              <div style={styles.textBoxSubtitle}>{subtitle}</div>
            </div>
            <div style={styles.textBox}>
              <div style={styles.textBoxTitle}>{title}</div>
              <div style={styles.textBoxSubtitle}>{subtitle}</div>
            </div>
            <div style={styles.textBox}>
              <div style={styles.textBoxTitle}>{title}</div>
              <div style={styles.textBoxSubtitle}>{subtitle}</div>
            </div>
            <div style={styles.textBox}>
              <div style={styles.textBoxTitle}>{title}</div>
              <div style={styles.textBoxSubtitle}>{subtitle}</div>
            </div>
          </div>
        )}
      </div>
      <div style={styles.descriptionContainer}>
        <div style={styles.descriptionSection}>
          <h2 style={styles.sectionTitle}>01. The Challenge</h2>
          <p style={styles.sectionContent}>
            When our power of choice is untrammeled and when nothing prevents us from being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
          </p>
        </div>
        <div style={styles.descriptionSection}>
          <h2 style={styles.sectionTitle}>02. The Solution</h2>
          <p style={styles.sectionContent}>
            Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. One who avoids a pain that produces no resultant pleasure. Laborious physical exercise. One who avoids a pain that produces no resultant which of us ever undertakes laborious. Avoids pleasure itself, because it is.
          </p>
        </div>
        <div style={styles.descriptionSection}>
          <h2 style={styles.sectionTitle}>03. The Result</h2>
          <p style={styles.sectionContent}>
            Because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
          </p>
          <h2 style={styles.sectionTitle}>03. The Result</h2>
          <p style={styles.sectionContent}>
            Because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
          </p>
        </div>
      </div>
      <div style={styles.imageRow}>
        <img src={projectImage} alt="Project Image 1" style={styles.rowImage} />
        <img src={projectImage} alt="Project Image 2" style={styles.rowImage} />
        <img src={projectImage} alt="Project Image 3" style={styles.rowImage} />
      </div>
      <div style={styles.recentProjects}>
        <h2 style={styles.recentProjectsTitle}>Recent Projects</h2>
        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <img src={projectImage} alt="Recent Project 1" style={styles.cardImage} />
            <div style={styles.cardTitle}>Project 1</div>
            <div style={styles.cardDescription}>Description for Project 1</div>
          </div>
          <div style={styles.card}>
            <img src={projectImage} alt="Recent Project 2" style={styles.cardImage} />
            <div style={styles.cardTitle}>Project 2</div>
            <div style={styles.cardDescription}>Description for Project 2</div>
          </div>
          <div style={styles.card}>
            <img src={projectImage} alt="Recent Project 3" style={styles.cardImage} />
            <div style={styles.cardTitle}>Project 3</div>
            <div style={styles.cardDescription}>Description for Project 3</div>
          </div>
    </div>
    <style>
      
    </style>
     </div>
     </div>
  );
  
};

export default ProjectPage;
