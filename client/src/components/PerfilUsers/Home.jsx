import React from "react";
import PropCards from "./PropCards";
import { animateScroll as scroll } from "react-scroll";
import "./estilos/Home.css";
import Navbar from "./Navbar";
import CarouselFadeExample from "./Carrusel";

const Home = () => {
  return (
    <div className="homeContainer">
      <Navbar />
      <CarouselFadeExample />
      <PropCards />
    </div>
  );
};

export default Home;
