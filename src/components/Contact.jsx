

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-heading">
        <span>GET IN TOUCH</span>
        <h2>Visit <span>Us</span></h2>
        <p>
          Have a question or want to know more about our food?
          We'd love to hear from you.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-card">
          <div className="contact-icon">📍</div>
          <h3>Our Location</h3>
          <p>Near Arrya Samaj Chitguppa-585412</p>
        </div>

        <div className="contact-card">
          <div className="contact-icon">📞</div>
          <h3>Call Us</h3>
          <p>Add your restaurant phone number</p>
        </div>

        <div className="contact-card">
          <div className="contact-icon">🕒</div>
          <h3>Opening Hours</h3>
          <p>Monday - Sunday: 10:00 AM - 10:00 PM</p>
        </div>
      </div>

      <div className="contact-message">
        <h3>Good Food Is Always Worth Visiting For!</h3>
        <p>Come hungry, leave happy.</p>
        <a href="#home">Back to Home ↑</a>
      </div>
    </section>
  );
};

export default Contact;