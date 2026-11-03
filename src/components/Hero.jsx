


const Hero = () => {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <p className="hero-tag">
          WELCOME TO MJ'S FOOD LOUNGE
        </p>

        <h1>
          Good Food.
          <span> Great Moments.</span>
        </h1>

        <p className="hero-description">
          From delicious street food to irresistible snacks,
          discover a world of flavours made to bring people
          together.
        </p>

        <div className="hero-actions">
          <a href="#menu" className="hero-button">
            Explore Our Food <span>→</span>
          </a>

          <a href="#about" className="secondary-button">
            Discover Our Story ↗
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <h3>Fresh</h3>
            <p>Ingredients</p>
          </div>

          <div>
            <h3>Variety</h3>
            <p>Of Flavours</p>
          </div>

          <div>
            <h3>Made</h3>
            <p>With Care</p>
          </div>
        </div>

      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1547592180-85f173990554?w=1000"
          alt="Delicious restaurant food"
        />

        <div className="image-label">
          <span>✦</span> Taste the Happiness
        </div>
      </div>

    </section>
  );
};

export default Hero;
