import React from 'react';
import { FaPenNib, FaPalette, FaDesktop, FaMobileAlt, FaServer, FaLightbulb } from 'react-icons/fa';

const services = [
  {
    title: "Content Creation",
    description:
      "Our team creates engaging, SEO-optimized content that enhances your digital presence. From blog posts to technical documentation, we provide the written material you need to connect with your audience effectively.",
    icon: <FaPenNib />,
  },
  {
    title: "UI/UX Design",
    description:
      "We create intuitive and engaging user interfaces that offer seamless experiences across web and mobile platforms. Our designs focus on user-centered solutions to drive business growth and customer satisfaction.",
    icon: <FaPalette />,
  },
  {
    title: "Web Development",
    description:
      "Our expert developers build fast, responsive websites and web applications using React for front-end and Spring Boot for back-end. We create scalable solutions tailored to your business needs, from e-commerce platforms to complex web apps.",
    icon: <FaDesktop />,
  },
  {
    title: "Mobile Development",
    description:
      "Elevate your mobile app with intuitive, responsive designs using our custom mobile development solutions. From seamless UI/UX to robust functionality, we ensure your app stands out on both iOS and Android platforms.",
    icon: <FaMobileAlt />,
  },
  {
    title: "Backend Development",
    description:
      "We provide secure and scalable back-end services with Spring Boot, ensuring seamless data management and API integrations. Our solutions are designed for high performance and smooth operation in the cloud.",
    icon: <FaServer />,
  },
  {
    title: "Consulting & Strategy",
    description:
      "We offer expert guidance on digital transformation, helping businesses adopt cloud solutions and modern technologies. Our strategies are focused on driving innovation, improving efficiency, and achieving long-term success.",
    icon: <FaLightbulb />,
  },
];

const ServiceSection = () => {
  return (
    <section
      style={{
        padding: '0',
        textAlign: 'center',
        backgroundColor: '#fff',
        height: 'auto',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginBottom: '15vh',
        marginTop: '10vh',
        fontFamily: 'Poppins, sans-serif', // Added font-family
      }}
    >
      <h3
        style={{
          fontSize: '2rem',
          color: '#44b9a4',
          textTransform: 'uppercase',
          marginBottom: '1rem',
        }}
      >
        Our Services
      </h3>
      <h2
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginTop: '0vh',
          marginBottom: '0',
        }}
      >
        High-impact services for your business
      </h2>
      <div
        className="services-container"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          maxWidth: '80%',
          margin: '3vh auto',
          gap: '0 rem',
        }}
      >
        {services.map((service, index) => (
          <div
            className="service-card"
            key={index}
            style={{
              backgroundColor: '#f8f8f8',
              color: '#000',
              flex: '1 1 calc(33.33% - 1.5rem)',  // 3 cards per row, adjusted flex
              padding: '1rem',
              borderRadius: '1rem',
              textAlign: 'left',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease',
              fontSize: '1rem',
              boxSizing: 'border-box',
              marginBottom: '1rem',
            }}
          >
            <div className="service-icon" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{service.icon}</div>
            <h3 className="service-title" style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{service.title}</h3>
            <p className="service-description" style={{ fontSize: '1rem' }}>{service.description}</p>
          </div>
        ))}
      </div>

      {/* Styles for Media Queries */}
      <style>
        {`
          body {
              margin: 0;
              padding: 0;
              overflow-x: hidden;
              font-family: 'Poppins', sans-serif;  /* Global font family */
          }

          .services-container {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              max-width: 80%;
              margin: 2rem auto;
          }

          .service-card {
              background-color: #f8f8f8;
              color: #000;
              flex: 1 1 calc(33.33% - 1.5rem);  /* 3 cards per row */
              padding: 1rem;
              border-radius: 1rem;
              text-align: left;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
              transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease;
              font-size: 1rem;
              box-sizing: border-box;
              margin-bottom: 1rem;
          }

          .service-card:hover {
              background-color: #000 !important;
              color: #fff !important;
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          }

          .service-icon {
              font-size: 2.5rem;
              margin-bottom: 0.5rem;
          }

          .service-title {
              font-size: 1.4rem;
              font-weight: bold;
              margin-bottom: 0.5rem;
          }

          .service-description {
              font-size: 1rem;
              color: #555;
          }

          .service-card:hover .service-title,
          .service-card:hover .service-description {
              color: #fff !important;
          }

          @media (max-width: 768px) {
              .services-container {
                  flex-direction: column;
                  align-items: center;
                  gap: 1.5rem;
              }

              .service-card {
                  flex: 1 1 100%;
                  max-width: 100%;
                  padding: 1rem;
                  font-size: 0.9rem;
                  margin-bottom: 1.5rem;
              }

              h2 {
                  font-size: 2rem;
              }

              h3 {
                  font-size: 1.2rem;
              }

              p {
                  font-size: 0.9rem;
              }
          }

          @media (min-width: 769px) {
              .services-container {
                  flex-wrap: wrap;
                  justify-content: space-between;
              }

              .service-card {
                  flex: 1 1 calc(33.33% - 1.5rem);
                  max-width: calc(33.33% - 1.5rem);
                  margin-bottom: 2rem;
              }

              h2 {
                  font-size: 2.5rem;
              }

              h3 {
                  font-size: 1.4rem;
              }

              p {
                  font-size: 1.1rem;
              }
          }

          @media (min-width: 1200px) {
              .service-card {
                  flex: 1 1 calc(33.33% - 1.5rem);
                  max-width: calc(33.33% - 1.5rem);
              }

              h2 {
                  font-size: 3rem;
              }

              h3 {
                  font-size: 1.6rem;
              }
          }
        `}
      </style>
    </section>
  );
};

export default ServiceSection;
