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
              />
            </label>
            <label htmlFor="email">
              <input
                type="email"
                name=""
                id="email"
                placeholder="Email Address"
              />
            </label>
            <label htmlFor="subject">
              <input type="text" name="" id="subject" placeholder="Subject" />
            </label>
            <label htmlFor="message">
              <input
                type="text"
                name=""
                id="message"
                placeholder="Write a message..."
              />
            </label>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
