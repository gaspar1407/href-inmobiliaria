import React from "react";
import PropCards from "./PropCards";
import { animateScroll as scroll } from "react-scroll";
import "./estilos/Home.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import CarouselFadeExample from "./Carrusel";


const Home = () => {
  return (
    <div className="homeContainer">
      <Navbar />
      <CarouselFadeExample />
      <PropCards />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
