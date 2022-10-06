import React from "react";
import "./estilos/PropCard.css";

export default function PropCard(props) {
  return (
    <div className="Card-Container">
      <div className="PropCard">
        <div className="img-container">
          <img
            alt="imagen de propiedad"
            className="img-Pcard"
            src={props.imagen}
          ></img>
          <p className="p-tipo">{props.tipo.toUpperCase()}</p>
        </div>
        <div className="info-container">
          <h2 className="h2-name">{props.nombre.toUpperCase()}</h2>
          <p className="p-localidad">{props.localidad.toUpperCase()}</p>
          <i className="fa fa-bath"> {props.baños}</i>
          <i className="fa fa-bed"> {props.ambientes}</i>
        </div>
      </div>
    </div>
  );
}
