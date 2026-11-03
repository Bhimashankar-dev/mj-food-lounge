


import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from './components/About'
import FoodCategories from './components/FoodCategories'
import Preparation from './components/Preparation'
import Specialities  from "./components/Specialities";
import Gallery from "./components/Gallery"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <FoodCategories/>
      <Preparation/>
      <Specialities/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
