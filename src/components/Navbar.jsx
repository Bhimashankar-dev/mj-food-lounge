
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        Mj<span className="restaurant-name">Restaurant.</span>
        <p className="restaurant-location">CHITGUPPA</p>
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Our Food</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <a href="#menu" className="nav-button">
        Explore Food
      </a>
    </nav>
  );
}

export default Navbar;
