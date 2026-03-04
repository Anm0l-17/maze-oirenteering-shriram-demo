import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const images = [
  { src: "/images/basketball.png", alt: "Basketball" },
  { src: "/images/stadium.png", alt: "Stadium" },
  { src: "/images/marathon.png", alt: "Marathon" },
  { src: "/images/gym.png", alt: "Gym" },
  { src: "/images/volleyball.png", alt: "Volleyball" },
  { src: "/images/swimming.png", alt: "Swimming" },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
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

      {/* Bottom row of images */}
      <div className="image-grid">
        {images.slice(3, 6).map((img, i) => (
          <div className="image-card" key={i + 3}>
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
