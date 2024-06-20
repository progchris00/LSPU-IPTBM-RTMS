import { Link } from "react-router-dom";
import HeroImg from "../assets/images/hero-image.svg";

function Hero() {
  return (
    <section id="hero">
      <div className="hero-wrapper">
        <div className="hero-left">
          <div className="rtms-container">
            LSPU IPTBM Real Time Monitoring System
          </div>
          <h2 className="hero-title">
            Intellectual Property and Technology Business Management Office
          </h2>
          <p className="hero description">
            Protects an organization's IP assets and technology initiatives,
            facilitating innovation, technology transfer, and compliance with
            relevant laws.
          </p>
          <Link className="solid-button">Get Started</Link>
          <Link className="ghost-button">Schedule a meeting</Link>
        </div>
        <div className="hero-right">
          <img src={HeroImg} alt="" id="hero-img" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
