import React from 'react';

const AboutUsMain = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
      <div className="about-us-main" style={{ backgroundColor: '#282c34', color: 'white', padding: '40px', borderRadius: '10px', display: 'flex', position: 'relative', overflow: 'hidden', height: '80vh', marginBottom: '20px' }}>
        <div className="text-container" style={{ flex: '0 0 40%', textAlign: 'left', marginRight: '10px', fontSize: '1.2em' }}>
          <h1 style={{ fontSize: '2.5em' }}>Ready to take <span style={{ color: '#00ff00' }}>your business</span> to the next level?</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut massa libero egestas malesuada vivamus gravida libero cursus nulla leo pulvinar. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos quae iure blanditiis voluptatem cum ratione nesciunt illum dignissimos quas iusto et inventore non delectus, nulla minima asperiores. Numquam veritatis nemo dolorem illum tenetur in error harum excepturi eum, ex, reprehenderit expedita fugit ea placeat architecto pariatur laudantium velit debitis facere!</p>
          <div className="review-container" style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
            <img src="https://via.placeholder.com/50" alt="Profile" style={{ borderRadius: '50%', width: '50px', height: '50px', marginRight: '10px' }} />
            <div>
              <p>Rated 4.9/5 stars</p>
              <p style={{ fontSize: '1.5em', margin: '0' }}>★★★★★</p>
            </div>
          </div>
        </div>
        <div className="image-container" style={{ flex: '1 1 60%', position: 'relative' }}>
          <img src="https://img.freepik.com/free-photo/businesspeople-working-as-team_1098-803.jpg?semt=ais_incoming" alt="Team" className="main-image" style={{ borderRadius: '10px', width: '80%', height: 'auto', maxHeight: '80%', objectFit: 'cover', position: 'absolute', bottom: '80px', right: '0', zIndex: 3 }} />
          <img src="https://img.freepik.com/free-photo/businesspeople-working-as-team_1098-803.jpg?semt=ais_incoming" alt="Placeholder 1" className="stacked-image" style={{ borderRadius: '10px', width: '80%', height: 'auto', maxHeight: '80%', objectFit: 'cover', position: 'absolute', bottom: '100px', right: '20px', filter: 'blur(2px)', opacity: '0.5', zIndex: 2 }} />
          <img src="https://img.freepik.com/free-photo/businesspeople-working-as-team_1098-803.jpg?semt=ais_incoming" alt="Placeholder 2" className="stacked-image" style={{ borderRadius: '10px', width: '80%', height: 'auto', maxHeight: '80%', objectFit: 'cover', position: 'absolute', bottom: '120px', right: '40px', filter: 'blur(4px)', opacity: '0.5', zIndex: 1 }} />
        </div>
      </div>
      <div className="review-section" style={{ display: 'flex', justifyContent: 'space-around', marginTop: '40px' }}>
        <div className="review-box" style={{ textAlign: 'center', maxWidth: '300px' }}>
          <h3>200+</h3>
          <h4>We're a family</h4>
          <p>Speedily say has suitable disposal add boy. On fourth doubt miles of child. Exercise joy man children rejoiced.</p>
        </div>
        <div className="review-box" style={{ textAlign: 'center', maxWidth: '300px' }}>
          <h3>99%</h3>
          <h4>Graphic Design</h4>
          <p>Perceived end knowledge certainly day sweetness why cordially. Ask a quick six seven offer see among.</p>
        </div>
        <div className="review-box" style={{ textAlign: 'center', maxWidth: '300px' }}>
          <h3>1.5M+</h3>
          <h4>Digital Marketing</h4>
          <p>Rooms oh fully taken by worse do. Points afraid but may end law lasted. Was out laughter raptures returned outweigh.</p>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .about-us-main {
            flex-direction: column;
            height: auto;
            padding: 20px;
          }
          .text-container {
            flex: 0 0 auto;
            margin-right: 0;
            font-size: 1em;
          }
          .image-container {
            flex: 0 0 auto;
            width: 100%;
            position: relative;
            height: auto;
          }
          .main-image {
            width: 100% !important;
            position: relative !important;
            bottom: 0 !important;
            right: 0 !important;
          }
          .stacked-image {
            display: none;
          }
          .review-container {
            flex: 0 0 auto;
            margin-top: 20px;
            width: 100%;
            justify-content: flex-start;
          }
          .review-section {
            flex-direction: column;
            margin-top: 20px;
            margin-left: 30px;
          }
          .review-box {
            margin-bottom: 20px;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutUsMain;
