


const Preparation = () => {

  const preparationSteps = [
    {
      number: "01",
      title: "Fresh Ingredients",
      description:
        "We focus on selecting fresh vegetables, quality ingredients and flavourful spices for our food.",
      icon: "🥬"
    },
    {
      number: "02",
      title: "Careful Preparation",
      description:
        "Every dish is prepared with attention to its ingredients, flavours and preparation method.",
      icon: "👨‍🍳"
    },
    {
      number: "03",
      title: "Perfect Flavours",
      description:
        "We bring together spices, sauces and ingredients to create enjoyable food experiences.",
      icon: "🌶️"
    },
    {
      number: "04",
      title: "Ready to Serve",
      description:
        "Our dishes are prepared and served to give customers a satisfying food experience.",
      icon: "🍽️"
    }
  ];

  return (
    <section className="preparation" id="preparation">

      <div className="preparation-heading">
        <p className="preparation-tag">
          OUR FOOD PHILOSOPHY
        </p>

        <h2>
          From Preparation
          <span> To Your Plate.</span>
        </h2>

        <p>
          Great food starts with good ingredients,
          thoughtful preparation and attention to detail.
        </p>
      </div>

      <div className="preparation-content">

        <div className="preparation-image">
          <img
            src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1000"
            alt="Food preparation in a kitchen"
          />

          <div className="preparation-image-label">
            Made with Care
          </div>
        </div>

        <div className="preparation-steps">

          {preparationSteps.map((step) => (
            <div className="preparation-card" key={step.number}>

              <div className="step-icon">
                {step.icon}
              </div>

              <div className="step-details">

                <span>{step.number}</span>

                <h3>{step.title}</h3>

                <p>{step.description}</p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Preparation;
