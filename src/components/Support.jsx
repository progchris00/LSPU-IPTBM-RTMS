import { Link } from "react-router-dom";

function Support() {
  return (
    <section id="support">
      <div className="support-wrapper">
        <div className="support-left">
          <h3 className="section-title">Support innovation initiatives</h3>
        </div>
        <div className="support-right">
          <p className="support description">
            We specialize in managing and protecting your intellectual property
            assets while driving technology commercialization. Our services
            encompass patenting, trademark registration, and IP strategy
            development.
          </p>
          <div className="call-to-action">
            <img src="" alt="" />
            <Link className="">Discover more</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Support;
