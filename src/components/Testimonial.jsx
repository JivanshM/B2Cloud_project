// App.js
import React from "react";

function Testimonial() {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f9f9f9",
    },
    card: {
      backgroundColor: "#ffffff",
      padding: "2rem",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      width: "90%",
      height: "40%",   
      textAlign: "center",
      position: "relative",
    },
    quote: {
      fontSize: "1.2rem",
      lineHeight: "1.8",
      color: "#333",
      marginBottom: "1.5rem",
      fontStyle: "italic",
    },
    authorInfo: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "1rem",
    },
    authorPhoto: {
      borderRadius: "50%",
      width: "50px",
      height: "50px",
    },
    authorName: {
      fontWeight: "bold",
      fontSize: "1rem",
      margin: "0",
    },
    authorTitle: {
      fontSize: "0.85rem",
      color: "#777",
      margin: "0",
    },
    navigation: {
      display: "flex",
      justifyContent: "center",
      gap: "0.5rem",
      marginTop: "1.5rem",
    },
    navButton: {
      backgroundColor: "#333",
      color: "#fff",
      border: "none",
      borderRadius: "50%",
      width: "30px",
      height: "30px",
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    navButtonHover: {
      backgroundColor: "#555",
    },
    responsiveQuote: {
      fontSize: "1rem",
    },
    responsivePhoto: {
      width: "40px",
      height: "40px",
    },
    responsiveNavButton: {
      width: "25px",
      height: "25px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <p style={styles.quote}>
          “Be genuine in your assessment, and provide constructive feedback to
          benefit both potential customers and the company providing the
          product or service.”
        </p>
        <div style={styles.authorInfo}>
          <img
            src="https://via.placeholder.com/50" // Replace with the actual image URL
            alt="Jacqueline Miller"
            style={styles.authorPhoto}
          />
          <div>
            <p style={styles.authorName}>Jacqueline Miller</p>
            <p style={styles.authorTitle}>CEO of an eduport</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Testimonial;
