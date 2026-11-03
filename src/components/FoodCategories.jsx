


const FoodCategories = () => {

  const categories = [
    {
      name: "Chaat & Street Food",
      description: "Delicious Indian street food with exciting flavours.",
      items: "Pani Puri, Masala Puri, Bhel Puri, Sev Puri",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=700"
    },
    {
      name: "Indian Specials",
      description: "Traditional snacks prepared with delicious spices.",
      items: "Pav Bhaji, Kachori, Samosa, Vada Pav",
      image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=700"
    },
    {
      name: "Momos",
      description: "Soft, juicy and crispy momos for every craving.",
      items: "Veg Momos, Fried Momos, Chicken Momos",
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=700"
    },
    {
      name: "Chinese & Fast Food",
      description: "Enjoy delicious Indo-Chinese flavours.",
      items: "Noodles, Manchurian, French Fries",
      image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=700"
    },
    {
      name: "Pizza & Burgers",
      description: "Classic favourites with satisfying flavours.",
      items: "Cheese Pizza, Veg Pizza, Classic Burger",
      image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=700"
    },
    {
      name: "Desserts & Ice Creams",
      description: "Sweet treats to complete your food experience.",
      items: "Ice Creams, Sundaes, Milkshakes",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=700"
    }
  ];

  return (
    <section className="food-section" id="menu">

      <div className="food-heading">
        <p>EXPLORE OUR MENU</p>

        <h2>
          Something Delicious
          <span> For Everyone.</span>
        </h2>

        <p className="food-subtitle">
          From traditional Indian street food to modern
          fast food favourites, explore our food varieties.
        </p>
      </div>

      <div className="food-grid">

        {categories.map((category, index) => (
          <div className="food-card" key={index}>

            <div className="food-card-image">
              <img
                src={category.image}
                alt={category.name}
              />
            </div>

            <div className="food-card-content">

              <h3>{category.name}</h3>

              <p>{category.description}</p>

              <span>{category.items}</span>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default FoodCategories;
