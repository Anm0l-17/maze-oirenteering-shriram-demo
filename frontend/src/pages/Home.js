import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const images = [
  { src: "/images/photo1.jpg", alt: "NCC Event" },
  { src: "/images/photo2.jpg", alt: "Team Photo" },
  { src: "/images/photo3.jpg", alt: "Adventure" },
  { src: "/images/photo4.jpg", alt: "Find Your Way" },
  { src: "/images/photo5.jpg", alt: "Outdoor Activity" },
  { src: "/images/photo6.jpg", alt: "Team Event" },
  { src: "/images/photo7.jpg", alt: "NCC Activity" },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Maze background image */}
      <div className="maze-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/maze.png)` }}></div>
      {/* Dark overlay for readability */}
      <div className="maze-overlay"></div>

      {/* Floating decorative circles */}
      <div className="floating-circle circle-1"></div>
      <div className="floating-circle circle-2"></div>
      <div className="floating-circle circle-3"></div>
      <div className="floating-circle circle-4"></div>

      {/* Top row of images */}
      <div className="image-grid">
        {images.slice(0, 3).map((img, i) => (
          <div className="image-card" key={i}>
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>

      {/* Heading */}
      <div className="home-heading">
        <h1>
          <span>NCC</span>
          <span>TEAMPLAN</span>
        </h1>
      </div>

      {/* Middle image (maze card) */}
      <div className="image-grid">
        <div className="image-card">
          <img src="/images/maze.png" alt="Maze" />
        </div>
        {images.slice(3, 5).map((img, i) => (
          <div className="image-card" key={i + 3}>
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>

      {/* Bottom row */}
      <div className="image-grid" style={{ marginBottom: "40px" }}>
        {images.slice(5, 7).map((img, i) => (
          <div className="image-card" key={i + 5}>
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>

      {/* Action buttons */}
      <div className="button-group">
        <button className="btn btn-leaderboard" onClick={() => navigate("/leaderboard")}>
          <span className="btn-icon">🏆</span> LEADERBOARD
        </button>
        <button className="btn btn-login" onClick={() => navigate("/athlete")}>
          <span className="btn-icon">➡️</span> LOGIN
        </button>
        <button className="btn btn-admin" onClick={() => navigate("/admin")}>
          <span className="btn-icon">⚙️</span> ADMIN
        </button>
      </div>
    </div>
  );
};

export default Home;
