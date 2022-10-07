import React from "react";
import PropCards from "./PropCards";
import { Link, animateScroll as scroll } from "react-scroll";
import "./estilos/Home.css";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="homeContainer">
      <nav
        className="nav"
        style={{
          backgroundColor: "#114D4D",
          position: "fixed",
          width: "100%",
          height: "8%",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          alignContent: "center",
          zIndex: "8",
        }}
      >
        <div className="div-img">
          <img
            className="img-nav"
            src="https://www.figma.com/file/5UwzdygEBJdRBlHgT8rffs/image/f9fe3862f912d53a9e8cddc4dde789b443cc3c90?fuid=1158835961255642047"
          />
        </div>
        <Link
          to="section1"
          spy={true}
          smooth={true}
          duration={300}
          offset={-70}
          style={{ padding: "0 20px" }}
        >
          <button className="btn-nav">INICIO</button>
        </Link>
        <Link
          to="section2"
          spy={true}
          smooth={true}
          duration={300}
          offset={-70}
          style={{ padding: "0 20px" }}
        >
          <button className="btn-nav">TASACIONES</button>
        </Link>
        <Link
          to="section3"
          spy={true}
          smooth={true}
          duration={300}
          offset={-70}
          style={{ padding: "0 20px" }}
        >
          <button className="btn-nav">EN VENTA</button>
        </Link>
        <Link
          to="section4"
          spy={true}
          smooth={true}
          duration={300}
          offset={-70}
          style={{ padding: "0 20px" }}
        >
          <button className="btn-nav">EN ALQUILER</button>
        </Link>
        <Link
          to="section5"
          spy={true}
          smooth={true}
          duration={300}
          offset={-70}
          style={{ padding: "0 20px" }}
        >
          <button className="btn-nav">NOSOTROS</button>
        </Link>
        <Link
          to="section6"
          spy={true}
          smooth={true}
          duration={300}
          offset={-70}
          style={{ padding: "0 20px" }}
        >
          <button className="btn-nav">CONTACTO</button>
        </Link>
      </nav>
      <div id="section1">
        <PropCards />
      </div>
      <div id="section2">
        <h3>Tasaciones</h3>
      </div>
      <div id="section3">
        <h3>En venta</h3>
      </div>
      <div id="section4">
        <h3>En alquiler</h3>
      </div>
      <div id="section5">
        <h3>Nosotros</h3>
      </div>
      <div id="section6">
        <h3>Contacto</h3>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
