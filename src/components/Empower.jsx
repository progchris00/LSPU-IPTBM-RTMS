import ImageOne from "../assets/images/empower-image-one.png";
import ImageTwo from "../assets/images/empower-image-two.png";

function Empower() {
  return (
    <section id="empower">
      <div className="wrapper">
        <h3 className="section-title">Empowering Your Intellectual Property</h3>
        <p className="description">
          We empower your intellectual property by providing comprehensive
          management and protection services tailored to your needs.
        </p>
        <div className="empower-top">
          <div className="left">
            <img src={ImageOne} alt="" />
          </div>
          <div className="right">
            <div className="tag">LSPU IPTBM</div>
            <h4 className="empower-title">You with LSPU IPTBM Solutions</h4>
            <p className="description">
              We are dedicated to maximizing the value of your innovations
              through strategic management and protection of your intellectual
              property.
            </p>
          </div>
        </div>
        <div className="empower-bottom">
          <div className="left">
            <img src={ImageTwo} alt="" />
          </div>
          <div className="right">
            <div className="tag">Empowering</div>
            <h4 className="empower-title">Empowering Your IP Journey</h4>
            <p className="description">
              We are committed to empowering your intellectual property journey
              from conception to commercialization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Empower;
