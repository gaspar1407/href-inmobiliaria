import React from "react";

export default function PropCard(props) {
  return (
    <div className="Card-Container">
      <div className="PropCard">
        <img
          alt="imagen de propiedad"
          className="img-Pcard"
          src={props.imagen}
        ></img>
        <div>
          <h2>{props.nombre.toUpperCase()}</h2>
          <p>{props.descripcion}</p>
          <p>localidad: {props.localidad}</p>
          <p>precio: {props.precio}</p>
          <p>metros: {props.metros}</p>
          <p>ambientes: {props.ambientes}</p>
          <p>tipo: {props.tipo}</p>
          <p>baños: {props.baños}</p>
        </div>
      </div>
    </div>
  );
}
