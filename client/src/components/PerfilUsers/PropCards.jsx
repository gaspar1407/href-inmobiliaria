import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPropiedaes } from "../../redux/actions";
import PropCard from "./PropCard";

export default function PropCards() {
  const dispatch = useDispatch();
  const propiedades = useSelector((state) => state.propiedades);

  useEffect(() => {
    dispatch(getPropiedaes());
  }, [dispatch]);

  console.log("cards", propiedades);

  return (
    <div className="propContainer">
      <div className="CardsProp">
        {propiedades?.map((e) => (
          <PropCard
            key={e.id}
            imagen={e.imagen}
            nombre={e.nombre}
            descripcion={e.descripcion}
            localidad={e.localidad}
            precio={e.precio}
            metros={e.metros}
            ambientes={e.ambientes}
            tipo={e.tipo}
            baños={e.baños}
          />
        ))}
      </div>
    </div>
  );
}
