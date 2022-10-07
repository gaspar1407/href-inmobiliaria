import React from "react";
import "./estilos/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="nav"
      style={{
        backgroundColor: "#114D4D",
        position: "fixed",
        width: "100%",
        height: "10%",
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
      <Link to={"/"}>
        <button className="btn-nav">INICIO</button>
      </Link>
      <Link to={"/Tasaciones"}>
        <button className="btn-nav">TASACIONES</button>
      </Link>
      <Link to={"/Venta"}>
        <button className="btn-nav">EN VENTA</button>
      </Link>
      <Link to={"/Alquiler"}>
        <button className="btn-nav">EN ALQUILER</button>
      </Link>
      <Link to={"/Nosotros"}>
        <button className="btn-nav">NOSOTROS</button>
      </Link>
      <Link to={"/Contacto"}>
        <button className="btn-nav">CONTACTO</button>
      </Link>
    </nav>
  );
}
