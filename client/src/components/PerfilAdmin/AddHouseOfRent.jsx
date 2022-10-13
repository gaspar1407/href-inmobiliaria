import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./estilos/AddHouseOfRent.css";
import NavbarAdmin from "./NavAdmin";

export default function AddHouseOfRent() {
  const [price, setPrice] = useState("");
  const [expences, setExpences] = useState("");
  const [meter, setMeter] = useState("");
  const [garage, setGarage] = useState("");
  const [bedroom, setBedroom] = useState("");
  const [bathroom, setBathroom] = useState("");
  const [inputSup, setInputSup] = useState({
    description: "",
    superficie: "",
    supCubierta: "",
    supLibre: "",
  });
  let handleInputChange = (e) => {
    if (e.target.name === "price") {
      setPrice(e.target.value);
    } else if (e.target.name === "expences") {
      setExpences(e.target.value);
    } else if (e.target.name === "meter") {
      setMeter(e.target.value);
    } else if (e.target.name === "garage") {
      setGarage(e.target.value);
    } else if (e.target.name === "bedroom") {
      setBedroom(e.target.value);
    } else if (e.target.name === "bathroom") {
      setBathroom(e.target.value);
    }
  };
  console.log(price, expences);

  let handleChange = (e) => {
    e.preventDefault();
    setInputSup({
      ...inputSup,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <NavbarAdmin></NavbarAdmin>
      <br />
      <div className="div-sup">
        <div className="price-div">
            <h5>PRECIO ALQUILER</h5>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <h5>$</h5>
              <input
                type="text"
                name="price"
                onChange={(e) => handleInputChange(e)}
                style={{width:'100px'}}
              />
            </div>

            <h5 style={{paddingTop:'7px'}}>POR MES</h5>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <h5>+$</h5>
              <input
                type="text"
                name="expences"
                onChange={(e) => handleInputChange(e)}
              />
              <h5>EXPENSAS</h5>
            </div>
        </div>
        <div className="inputs-icon">
          <div className="sub-div">
            <img
              className="icon"
              src="https://cdn-icons-png.flaticon.com/512/72/72674.png"
            ></img>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <input
                type="text"
                name="meter"
                onChange={(e) => handleInputChange(e)}
              />{" "}
              <h5>
                m<sup>2</sup>
              </h5>
            </div>
          </div>
          <div className="sub-div">
            <img
              className="icon"
              src="https://static.thenounproject.com/png/3539103-200.png"
            ></img>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <input
                type="text"
                name="garage"
                onChange={(e) => handleInputChange(e)}
              />
              <h5>garage</h5>
            </div>
          </div>
          <div className="sub-div">
            <img
              className="icon"
              src="https://cdn-icons-png.flaticon.com/512/2237/2237426.png"
            ></img>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <input
                type="text"
                name="bedroom"
                onChange={(e) => handleInputChange(e)}
              />
              <h5>habitaciones</h5>
            </div>
          </div>
          <div className="sub-div">
            <img
              className="icon"
              src="https://cdn-icons-png.flaticon.com/512/2850/2850294.png"
            ></img>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <input
                type="text"
                name="bathroom"
                onChange={(e) => handleInputChange(e)}
              />
              <h5>baños</h5>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row", marginTop:'30px' }}>
        <div className="form-superficie">
          <div
            style={{ display: "flex", flexDirection: "row" }}
            className="input"
          >
            {/* <textarea
              name="description"
              cols="30"
              rows="5"
              onChange={(e) => handleChange(e)}
              placeholder="Descripción"
            ></textarea> */}
            <input
              type="text"
              name="description"
              onChange={(e) => handleChange(e)}
              placeholder="Descripción"
            />
          </div>
          <div
            style={{ display: "flex", flexDirection: "row" }}
            className="input"
          >
            <input
              type="text"
              name="superficie"
              onChange={(e) => handleChange(e)}
              placeholder="Superficie total"
            />
            <p>
              m<sup>2</sup>
            </p>
          </div>
          <div
            style={{ display: "flex", flexDirection: "row" }}
            className="input"
          >
            <input
              type="text"
              name="supCubierta"
              onChange={(e) => handleChange(e)}
              placeholder="Superficie cubierta"
            />
            <p>
              m<sup>2</sup>
            </p>
          </div>
          <div
            style={{ display: "flex", flexDirection: "row" }}
            className="input"
          >
            <input
              type="text"
              name="supLibre"
              onChange={(e) => handleChange(e)}
              placeholder="Superficie libre"
            />
            <p>
              m<sup>2</sup>
            </p>
          </div>
        </div>
        <div>
          <input type="file" />
        </div>
      </div>
    </div>
  );
}
