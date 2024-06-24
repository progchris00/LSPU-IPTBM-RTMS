import TestimonyPhotoOne from "../assets/images/testimony-profile-one.png";

function Testimony() {
  return (
    <section id="testimony">
      <div className="wrapper">
        <div className="testimony-text">
          <h3 className="section-title">Hear ! Our Customers Have to Say </h3>
          <p className="description">
            Echoes of Satisfaction: Delving Into the Stories of LSPU IPTBM’s
            Satisfied Clients, Each Testimonial a Testament.
          </p>
        </div>

        <div className="testimony-container">
          <div className="testimony-box">
            <img src={TestimonyPhotoOne} alt="" />
            <div className="testimony-texts">
              <p className="witness">Sarah Parker</p>
              <div className="actual-testimony">
                LSPU IPTBM has transformed the way I handle my inventions. Their
                Intuitive IP tools helped me save more
              </div>
            </div>
          </div>
          <div className="stack-testimony">
            <div className="testimony-box">
              <img src={TestimonyPhotoOne} alt="" />
              <div className="testimony-texts">
                <p className="witness">Sarah Parker</p>
                <div className="actual-testimony">
                  LSPU IPTBM has transformed the way I handle my inventions.
                  Their Intuitive IP tools helped me save more
                </div>
              </div>
            </div>
            <div className="testimony-box">
              <img src={TestimonyPhotoOne} alt="" />
              <div className="testimony-texts">
                <p className="witness">Sarah Parker</p>
                <div className="actual-testimony">
                  LSPU IPTBM has transformed the way I handle my inventions.
                  Their Intuitive IP tools helped me save more
                </div>
              </div>
            </div>
          </div>
          <div className="testimony-box box-four">
            <img src={TestimonyPhotoOne} alt="" />
            <div className="testimony-texts">
              <p className="witness">Sarah Parker</p>
              <div className="actual-testimony">
                LSPU IPTBM has transformed the way I handle my inventions. Their
                Intuitive IP tools helped me save more
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimony;
