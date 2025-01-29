import React from "react";

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: "#000",
      color: "#fff",
      padding: "40px 20px",
      textAlign: "left",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      borderTop: "1px solid #555", // Adds a border at the top of the footer
    },
    section: {
      flex: "1 1 250px", // Ensures flexibility and responsiveness
      margin: "10px 20px",
    },
    heading: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    text: {
      color: "white",
      fontSize: "14px",
      lineHeight: "1.6",
    },
    list: {
      listStyle: "none",
      padding: "0",
      margin: "0",
    },
    listItem: {
      marginBottom: "8px",
      fontSize: "14px",
    },
    form: {
      display: "flex",
      gap: "10px",
    },
    input: {
      flex: "1",
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      fontSize: "14px",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#fff",
      color: "#000",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontWeight: "bold",
    },
    bottomBar: {
      marginTop: "20px",
      borderTop: "1px solid #555", // Keeps the hr line at the top of the bottom section
      paddingTop: "20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "20px", // Added space between elements
      width: "100%",
    },
    socialIcons: {
      display: "flex",
      gap: "15px",
      fontSize: "20px",
      marginLeft: "auto", // Right-aligns the social icons
    },
    socialIcon: {
      color: "#fff",
      textDecoration: "none",
      fontSize: "18px", // Reduced font size to prevent overlap
    },     
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.section}>
        <h2 style={styles.heading}>B2Cloud</h2>
        <p style={styles.text}>
          We’re a team of strategic creators and digital innovators, united in
          our focus on mastery and joy.
        </p>
      </div>

      <div style={styles.section}>
        <h3 style={styles.heading}>Pages</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>Home</li>
          <li style={styles.listItem}>Home 2</li>
          <li style={styles.listItem}>About</li>
          <li style={styles.listItem}>Contact Us</li>
          <li style={styles.listItem}>Portfolio</li>
          <li style={styles.listItem}>Portfolio Single</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h3 style={styles.heading}>Utility Pages</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>Style Guide</li>
          <li style={styles.listItem}>Instruction</li>
          <li style={styles.listItem}>License</li>
          <li style={styles.listItem}>Changelog</li>
          <li style={styles.listItem}>Error 404</li>
          <li style={styles.listItem}>Password Protected</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h3 style={styles.heading}>Subscribe</h3>
        <form style={styles.form}>
          <input
            type="email"
            placeholder="Enter your email here"
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Subscribe
          </button>
        </form>
      </div>

      <div style={styles.bottomBar}>
        <p style={styles.text}>
          Copyright by Designed by B2Cloud
        </p>
        <p style={styles.text}>+1 12 345 6789</p>
        <p style={styles.text}>
          india
        </p>
        <div style={styles.socialIcons}>
          <a href="#" style={styles.socialIcon} aria-label="Facebook">
            Facebook
          </a>
          <a href="#" style={styles.socialIcon} aria-label="Instagram">
            Instagram
          </a>
          <a href="#" style={styles.socialIcon} aria-label="LinkedIn">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
