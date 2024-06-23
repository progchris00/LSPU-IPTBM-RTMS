import ImageOne from "../assets/images/better-img-one.png";
import ImageTwo from "../assets/images/better-img-two.png";

function Better() {
  return (
    <section id="better">
      <div className="wrapper">
        <div className="better-texts">
          <div className="better left">
            <h3 className="better-title">
              How <span className="blue-text">LSPU IPTBM Work to Serve </span>
              You Better
            </h3>
          </div>
          <div className="better right">
            <p className="better description">
              We are dedicated to serving you better by offering comprehensive
              and tailored services that ensure the effective management and
              protection of your intellectual property.
            </p>
          </div>
        </div>
        <div className="better-images">
          <img src={ImageOne} className="better-image-one" alt="" />
          <img src={ImageTwo} className="better-image-two" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Better;
