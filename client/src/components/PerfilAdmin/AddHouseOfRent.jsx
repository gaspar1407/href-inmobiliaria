import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./estilos/AddHouseOfRent.css";
import NavbarAdmin from "./NavAdmin";
import axios from "axios";

export default function AddHouseOfRent() {
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    price: "",
    expences: "",
    meter: "",
    garage: "",
    bedroom: "",
    bathroom: "",
    description: "",
    superficie: "",
    supCubierta: "",
    supLibre: "",
    provincia: "",
    ciudad: "",
    calle: "",
    numero: "",
    piso: "",
    images: [],
  });
  const [image, setImage] = useState([]);
  const [imgResult, setImgResult] = useState([]);

  // const [uploadImage, setUploadImage] = useState('')
  const validator = (inputs) => {
    // funcion que valida que todos los inputs tengan un valor "aceptable"
    let validations = {};
    const beNumber = /(^\d{1,10}$)/;
    if (!inputs.price) {
      validations.price = "Ingrese el valor de alquiler";
    } else if (!isNaN(inputs.price)) {
      validations.price = "Debe ingresar solo números para el alquiler";
    } else if (!inputs.expences) {
      validations.expences = "Ingrese el valor de las expensas";
    } else if (!isNaN(inputs.expences)) {
      validations.expences = "Debe ingresar solo números para las expensas";
    } else if (!inputs.meter) {
      validations.meter = "Debe ingresar la cantidad de metros cuadrados";
    } else if (!isNaN(inputs.meter)) {
      validations.meter =
        "Debe ingresar solo números para la cantidad de metros cuadrados";
    } else if (!inputs.garage) {
      validations.garage = "Debe ingresar la cantidad de lugares de garage";
    } else if (!isNaN(inputs.garage)) {
      validations.garage =
        "Debe ingresar solo números para la cantidad de lugares de garage";
    } else if (!inputs.bedroom) {
      validations.bedroom = "Debe ingresar la cantidad de habitaciones";
    } else if (!isNaN(inputs.bedroom)) {
      validations.bedroom =
        "Debe ingresar solo números para la cantidad de habitaciones";
    } else if (!inputs.bathroom) {
      validations.bathroom = "Debe ingresar la cantidad de baños";
    } else if (!isNaN(inputs.bathroom)) {
      validations.bathroom =
        "Debe ingresar solo números para la cantidad de baños";
    } else if (!inputs.description) {
      validations.description = "Debe ingresar una descripción";
    }  else if (!inputs.superficie) {
      validations.superficie = "Debe ingresar la superficie total";
    } else if (!isNaN(inputs.superficie)) {
      validations.superficie =
        "Debe ingresar solo números para la superfie total";
    } else if (!inputs.supCubierta) {
      validations.supCubierta = "Debe ingresar la superficie cubierta";
    } else if (!isNaN(inputs.supCubierta)) {
      validations.supCubierta =
        "Debe ingresar solo números para la superfie cubierta";
    } else if (!inputs.supLibre) {
      validations.supLibre = "Debe ingresar la superficie libre";
    } else if (!isNaN(inputs.supLibre)) {
      validations.supLibre =
        "Debe ingresar solo números para la superfie libre";
    } else if (!inputs.provincia) {
      validations.provincia = "Debe ingresar una provincia";
    } else if (!inputs.ciudad) {
      validations.ciudad = "Debe ingresar una ciudad";
    } else if (!inputs.calle) {
      validations.calle = "Debe ingresar una calle";
    }else if (!inputs.numero) {
      validations.ciudad = "Debe ingresar el número";
    } else if (!isNaN(inputs.numero)) {
      validations.numero =
        "Debe ingresar solo números para el número de calle";
    }
    return validations;
  };

  let handleInputChange = (e) => {
    if(e.target.name === 'price' || e.target.name === 'expences' || e.target.name === 'meter' || e.target.name === 'garage' || e.target.name === 'bedroom' || e.target.name === 'bathroom' || e.target.name === 'superficie' || e.target.name === 'supCubierta' || e.target.name === 'supLibre' || e.target.name === 'numero'){
      setInputs({ ...inputs, [e.target.name]: parseInt(e.target.value) });
    }
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  console.log(inputs, "inputsss");

  console.log("soy image", image);

  const upload = async (e) => {
    e.preventDefault();
    const data = new FormData();
    let img = [...imgResult];
    for (let x = 0; x < image.length; x++) {
      setLoading(true);
      data.append("file", image[x]);
      data.append("upload_preset", "z8j0fzlr");
      axios
        .post(`https://api.cloudinary.com/v1_1/dngpl7nks/upload`, data)
        .then((response) => {
          // console.log(response)
          img.push(response.data.url);
          setImgResult(img);
          if (x === image.length - 1) {
            setLoading(false);
          }
        });
    }
  };
  console.log("img result", imgResult);
  const deleteImage = (e) => {
    e.preventDefault();
    let result = image.filter((elem) => elem.name !== e.target.name);
    setImage([...result]);
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
              style={{ width: "100px" }}
            />
          </div>

          <h5 style={{ paddingTop: "7px" }}>POR MES</h5>
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
      <div style={{ display: "flex", flexDirection: "row", marginTop: "30px" }}>
        <div className="form-superficie">
          <div
            style={{ display: "flex", flexDirection: "row" }}
            className="input"
          >
            <textarea
              name="description"
              cols="30"
              rows="5"
              onChange={(e) => handleInputChange(e)}
              placeholder="Descripción"
            ></textarea>
          </div>

          {/* ............ */}

          {/* UBICACIÓN */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h3>Ubicación</h3>
            <input
              type="text"
              name="provincia"
              onChange={(e) => handleInputChange(e)}
              placeholder="Provincia"
            />
            <input
              type="text"
              name="ciudad"
              onChange={(e) => handleInputChange(e)}
              placeholder="Ciudad"
            />
            <input
              type="text"
              name="calle"
              onChange={(e) => handleInputChange(e)}
              placeholder="Calle"
            />
            <input
              type="text"
              name="número"
              onChange={(e) => handleInputChange(e)}
              placeholder="Número"
            />
            <input
              type="text"
              name="piso"
              onChange={(e) => handleInputChange(e)}
              placeholder="Piso"
            />
          </div>
          {/* MEDIDAS */}
          <div>
            <div
              style={{ display: "flex", flexDirection: "row" }}
              className="input"
            >
              <input
                type="text"
                name="superficie"
                onChange={(e) => handleInputChange(e)}
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
                onChange={(e) => handleInputChange(e)}
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
                onChange={(e) => handleInputChange(e)}
                placeholder="Superficie libre"
              />
              <p>
                m<sup>2</sup>
              </p>
            </div>
          </div>
          <div style={{display:'flex', flexDirection:'row', marginTop:'30px'}}>
            <div className="contenedor-izquierda">
              <input
                type="text"
                name="operacion"
                onChange={(e) => handleInputChange(e)}
                placeholder="Operación"
              />
              <input
                type="text"
                name="alquiler"
                onChange={(e) => handleInputChange(e)}
                placeholder="Alquiler"
              />
              <input
                type="text"
                name="expensas"
                onChange={(e) => handleInputChange(e)}
                placeholder="Expensas"
              />
              <input
                type="text"
                name="ambientes"
                onChange={(e) => handleInputChange(e)}
                placeholder="Ambientes"
              />
              <input
                type="text"
                name="estado"
                onChange={(e) => handleInputChange(e)}
                placeholder="Estado"
              />
              <input
                type="text"
                name="antiguedad"
                onChange={(e) => handleInputChange(e)}
                placeholder="Antigüe"
              />
              <input
                type="text"
                name="orientacion"
                onChange={(e) => handleInputChange(e)}
                placeholder="Orientación"
              />
              <input
                type="text"
                name="pileta"
                onChange={(e) => handleInputChange(e)}
                placeholder="Pileta"
              />
            </div>
            <div className="contenedor-derecha">
              <input
                type="text"
                name="amueblada"
                onChange={(e) => handleInputChange(e)}
                placeholder="Amueblada"
              />
              <input
                type="text"
                name="baños"
                onChange={(e) => handleInputChange(e)}
                placeholder="Baños"
              />
              <input
                type="text"
                name="habitaciones"
                onChange={(e) => handleInputChange(e)}
                placeholder="Habitaciones"
              />
              <input
                type="text"
                name="garage"
                onChange={(e) => handleInputChange(e)}
                placeholder="Garage"
              />
              <input
                type="text"
                name="calefaccion"
                onChange={(e) => handleInputChange(e)}
                placeholder="Calefacción"
              />
              <input
                type="text"
                name="mascotas"
                onChange={(e) => handleInputChange(e)}
                placeholder="Mascotas"
              />
              <input
                type="text"
                name="agua"
                onChange={(e) => handleInputChange(e)}
                placeholder="Agua caliente"
              />
              <input
                type="text"
                name="aire"
                onChange={(e) => handleInputChange(e)}
                placeholder="Aire acondicionado"
              />
            </div>
          </div>
        </div>
        <div
          className="divInputsImage"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h5 style={{ marginBottom: "10px", fontSize: "1.2em" }}>
              Imagen del complejo
            </h5>
            <form>
              {image.length === 10 ? (
                <h3>Has alcanzado el máximo de imágenes</h3>
              ) : (
                <input
                  type="file"
                  className="inputImage"
                  onChange={(e) => setImage([...image, e.target.files[0]])}
                />
              )}
              {image.length > 0
                ? image?.map((elem, index) => {
                    return (
                      <div
                        key={index}
                        style={{ display: "flex", flexDirection: "row" }}
                      >
                        <h6>{elem?.name}</h6>
                        <button
                          name={elem?.name}
                          onClick={(e) => deleteImage(e)}
                        >
                          x
                        </button>
                      </div>
                    );
                  })
                : null}
              {loading ? (
                <span className="loaderrr" style={{ marginTop: "7px" }}></span>
              ) : null}
              <button onClick={(e) => upload(e)}>Subir imagenes</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
