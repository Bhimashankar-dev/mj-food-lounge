


const Gallery = () => {

  const galleryImages = [
    {
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800",
      name: "Delicious Pizza"
    },
    {
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
      name: "Classic Burger"
    },
    {
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800",
      name: "Momos"
    },
    {
      image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800",
      name: "Noodles"
    },
    {
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800",
      name: "Ice Cream"
    },
    {
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800",
      name: "French Fries"
    }
  ];

  return (
    <section className="gallery" id="gallery">

      <div className="gallery-heading">
        <p>FOOD MOMENTS</p>

        <h2>
          A Feast for
          <span> Your Eyes.</span>
        </h2>

        <p>
          Take a look at some of the food experiences
          waiting for you at MJ's Food Lounge.
        </p>
      </div>

      <div className="gallery-grid">

        {galleryImages.map((item, index) => (
          <div className="gallery-item" key={index}>

            <img src={item.image} alt={item.name} />

            <div className="gallery-overlay">
              <h3>{item.name}</h3>
              <span>↗</span>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Gallery;
