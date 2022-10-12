import React, { useState } from "react";
import "./estilos/Navbar.css";
import { Link } from "react-router-dom";
import BurguerButton from "./BurguerButton";
import styled from "styled-components";

export default function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked);
  };
  return (
    <nav className="nav">
      <div className="div-img">
        <img
          className="img-nav"
          src="https://www.figma.com/file/5UwzdygEBJdRBlHgT8rffs/image/f9fe3862f912d53a9e8cddc4dde789b443cc3c90?fuid=1158835961255642047"
        />
      </div>
      <NavContainer>
        <div className={`links ${clicked ? "active" : ""}`}>
          <Link to={"/"}>
            <button onClick={handleClick} className="btn-nav">
              INICIO
            </button>
          </Link>
          <Link to={"/Tasaciones"}>
            <button onClick={handleClick} className="btn-nav">
              TASACIONES
            </button>
          </Link>
          <Link to={"/Venta"}>
            <button onClick={handleClick} className="btn-nav">
              EN VENTA
            </button>
          </Link>
          <Link to={"/Alquiler"}>
            <button onClick={handleClick} className="btn-nav">
              EN ALQUILER
            </button>
          </Link>
          <Link to={"/Nosotros"}>
            <button onClick={handleClick} className="btn-nav">
              NOSOTROS
            </button>
          </Link>
          <Link to={"/Contacto"}>
            <button onClick={handleClick} className="btn-nav">
              CONTACTO
            </button>
          </Link>
        </div>
        <div className="burguer">
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? " active" : ""}`}></BgDiv>
      </NavContainer>
    </nav>
  );
}

const NavContainer = styled.nav`
  h2 {
    color: white;
    font-weight: 400;
    span {
      font-weight: bold;
    }
  }
  padding: 0.4rem;
  background-color: #114d4d;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links {
    position: absolute;
    top: -2000px;

    margin-left: -2000px;
    margin-right: -2000px;
    text-align: center;
    transition: all 1.5s ease;
    a {
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media (min-width: 1252px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 15%;
    left: 0;
    right: 0;
    text-align: center;
    a {
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer {
    @media (min-width: 1252px) {
      display: none;
    }
  }
`;

const BgDiv = styled.div`
  background-color: #114d4d;
  position: absolute;
  top: -1200px;

  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 1.2s ease;

  &.active {
    border-radius: 0%;
    top: 0;
    left: 0;
    right: 0px;

    width: 100%;
    height: 550%;
  }
`;
