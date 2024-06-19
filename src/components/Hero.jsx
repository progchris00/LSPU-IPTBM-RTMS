import { Link } from "react-router-dom";

function Hero() {
  return (
    <section id="hero">
      <div className="hero-wrapper">
        <div className="hero-left">
          <div>LSPU IPTBM Real Time Monitoring System</div>
          <h2>
            Intellectual Property and Technology Business Management Office
          </h2>
          <p>
            Protects an organization's IP assets and technology initiatives,
            facilitating innovation, technology transfer, and compliance with
            relevant laws.
          </p>
          <Link className="solid-button">Get Started</Link>
          <Link className="ghost-button">Schedule a meeting</Link>
        </div>
        <div className="hero-right">img</div>
      </div>
    </section>
  );
}

export default Hero;
