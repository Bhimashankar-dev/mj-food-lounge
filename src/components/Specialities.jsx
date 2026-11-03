


const Specialities = () => {

  const dishes = [
    {
      name: "Pani Puri",
      category: "STREET FOOD",
      description: "A burst of tangy and spicy flavours.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=700"
    },
    {
      name: "Pav Bhaji",
      category: "INDIAN SPECIAL",
      description: "A delicious combination of buttery pav and bhaji.",
      image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=700"
    },
    {
      name: "Fried Momos",
      category: "FAST FOOD",
      description: "Crispy outside with a flavourful filling.",
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=700"
    },
    {
      name: "Pizza",
      category: "BAKED SPECIAL",
      description: "A classic favourite for every food lover.",
      image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=700"
    }
  ];

  return (
    <section className="specialities" id="specialities">

      <div className="specialities-heading">
        <p>OUR SPECIALITIES</p>

        <h2>
          Customer Favourites.
          <span> Made to Enjoy.</span>
        </h2>

        <p>
          Explore some of the delicious favourites
          available at MJ's Food Lounge.
        </p>
      </div>

      <div className="specialities-grid">

        {dishes.map((dish, index) => (
          <div className="speciality-card" key={index}>

            <div className="speciality-image">
              <img src={dish.image} alt={dish.name} />

              <span className="speciality-category">
                {dish.category}
              </span>
            </div>

            <div className="speciality-info">
              <h3>{dish.name}</h3>
              <p>{dish.description}</p>
              <span className="dish-arrow">↗</span>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Specialities;
