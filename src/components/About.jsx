


const About = () => {
  return (
    <section className="about" id="about">

      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1000"
          alt="Restaurant food preparation"
        />

        <div className="about-badge">
          <h3>MJ's</h3>
          <p>Food Lounge</p>
        </div>
      </div>

      <div className="about-content">

        <p className="about-tag">ABOUT OUR RESTAURANT</p>

        <h2>
          More Than Food,
          <span> It's an Experience.</span>
        </h2>

        <p className="about-description">
          Welcome to MJ's Food Lounge, a place where
          taste meets happiness. We bring together a
          variety of delicious street food, snacks and
          fast food favourites in one place.
        </p>

        <p className="about-description">
          From crispy momos and flavourful chaat to
          delicious pizzas, burgers and desserts, our
          goal is to make every visit memorable.
        </p>

        <a href="#menu" className="about-button">
          Discover Our Food →
        </a>

      </div>

    </section>
  );
};

export default About;
