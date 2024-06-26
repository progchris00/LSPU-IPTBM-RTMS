function Contacts() {
  return (
    <section id="contacts">
      <div className="wrapper">
        <div className="contact left">
          <h3></h3>
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
