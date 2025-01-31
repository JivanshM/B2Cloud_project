import React from "react";

import heroImage from "../assets/hero_image.png";
import brandlogo from "../assets/brand_logo.png";

const HeroSection = () => {
  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: "#141414",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        boxSizing: "border-box",
        padding: "0 20px",
        overflowX: "hidden",
        overflowY: "auto",
        fontFamily: "'Poppins', sans-serif", // Set font family
      }}
      className="hero-container"
    >
      {/* CSS Reset */}
      <style>
        {`
          * {
            font-family: 'Poppins', sans-serif;
          }

          .hero-content {
            max-width: 100%;
            overflow-x: hidden;
          }

          @media (max-width: 768px) {
            .hero-left {
              margin-top: 0vh !important;
              text-align: center !important;
            }

            .hero-content {
              gap: 3.5vh !important;
            }
            .hero-right {
              transform: translateY(-63px) scale(0.65);
            }
            .trusted-brands {
              text-align: center !important;
            }
            .brands-list {
              justify-content: center !important;
            }
            .brands-list img {
              width: 80px;
              margin-left: 0 !important;
            }
          }
        `}
      </style>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1400px",
          width: "100%",
          margin: "0 auto",
          flex: 1,
          paddingBottom: "5vh",
        }}
        className="hero-content"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            gap: "100px",
            flexWrap: "wrap",
          }}
        >
          {/* Left Content */}
          <div
            style={{
              flex: 1,
              maxWidth: "750px",
              textAlign: "center",
              position: "relative",
              zIndex: 1,
              padding: "10px",
              marginTop: "12vh",
            }}
            className="hero-left"
          >
            <h1
              style={{
                fontSize: "4rem",
                fontWeight: "bold",
                lineHeight: "1.2",
                marginBottom: "20px",
              }}
            >
              Ready to take your <span style={{ color: "#00bfa6" }}>Business Growth</span> to the next level?
            </h1>
            <p
              style={{
                fontSize: "1rem",
                color: "white",
                marginBottom: "30px",
                lineHeight: "1.5",
              }}
            >
              At B2Cloud, we specialize in empowering businesses to harness the full potential of cloud technology. From
              cloud infrastructure and custom app development to seamless cloud migration and SaaS solutions, we provide
              tailored services designed to scale your business and drive innovation.
            </p>
            <button
              style={{
                padding: "15px 30px",
                backgroundColor: "#00bfa6",
                color: "white",
                border: "none",
                borderRadius: "30px",
                cursor: "pointer",
              }}
            >
              Start your Free Trial
            </button>
          </div>

          {/* Right Content */}
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              maxWidth: "300px",
              margin: "0 auto",
              zIndex: 0,
              padding: "10px",
              transition: "transform 0.3s ease-in-out",
              marginTop: "15vh",
              marginBottom: "1vh",
            }}
            className="hero-right"
          >
            {/* First Circle */}
            <div
              style={{
                position: "absolute",
                width: "350px",
                height: "350px",
                borderRadius: "50%",
                border: "1px solid rgba(0, 191, 166, 0.63)",
                zIndex: 1,
              }}
              className="hero-circle"
            ></div>

            {/* Second Circle */}
            <div
              style={{
                position: "absolute",
                width: "420px",
                height: "420px",
                borderRadius: "50%",
                border: "1px solid rgba(0, 191, 166, 0.63)",
                zIndex: 0,
              }}
              className="hero-circle"
            ></div>

            {/* Hero Image */}
            <img
              src={heroImage || "/placeholder.svg"}
              alt="Team"
              style={{
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                objectFit: "cover",
                zIndex: 2,
              }}
              className="hero-image"
            />
          </div>
        </div>

        {/* Trusted Brands Section */}
        <div
          style={{
            marginTop: "auto",
            textAlign: "left",
            color: "white",
            width: "100%",
            position: "relative",
            zIndex: 3,
          }}
          className="trusted-brands"
        >
          <p style={{ color: "white" }}>Trusted by Leading Brands</p>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap",
              maxWidth: "1000px",
              margin: "0 auto",
              paddingBottom: "20px",
            }}
            className="brands-list"
          >
            <img
              src={brandlogo || "/placeholder.svg"}
              alt="Brand Logo"
              style={{
                width: "100px",
                height: "auto",
                objectFit: "contain",
                marginLeft: "-10vw",
                marginBottom: "3vh",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
