function Contacts() {
  return (
    <section id="contacts">
      <div className="wrapper">
        <div className="contact left">
          <div className="text-wrapper">
            <h3>Get in touch with us</h3>
            <p>
              We love to hear from you. Our teams are always here to answer your
              message.
            </p>
          </div>
          <div className="contact-information">
            <span>
              <img src="" alt="" />
              <p id="contact-address">123 Street, City Country</p>
            </span>
            <span>
              <img src="" alt="" />
              <p id="contact-number">+234 567890</p>
            </span>
            <span>
              <img src="" alt="" />
              <p id="contact-email">mail@gmail.com</p>
            </span>
          </div>
        </div>
        <div className="contact right">
          <form id="contact-form">
            <label htmlFor="full-name">
              <input
                type="text"
                name=""
                id="full-name"
                placeholder="Full Name"
                required
              />
            </label>
            <label htmlFor="email">
              <input
                type="email"
                name=""
                id="email"
                placeholder="Email Address"
                required
              />
            </label>
            <label htmlFor="subject">
              <input
                type="text"
                name=""
                id="subject"
                placeholder="Subject"
                required
              />
            </label>
            <label htmlFor="message">
              <textarea
                name=""
                id="message"
                placeholder="Write us a message..."
              ></textarea>
            </label>
            <input type="submit" name="" id="submit" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
