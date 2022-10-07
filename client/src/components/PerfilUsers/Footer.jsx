import React from "react";
import "./estilos/Footer.css";

export default function Footer() {
  return (
    <div className="container-footer">
      <div className="cont-img">
        <img
          className="img-footer"
          src="https://www.figma.com/file/5UwzdygEBJdRBlHgT8rffs/image/f9fe3862f912d53a9e8cddc4dde789b443cc3c90?fuid=1158835961255642047"
        />
      </div>
      <div>
        <h3 className="h3-f">Avenida San Martín 1150</h3>
        <h3 className="h3-f">Córdoba, Argentina</h3>
      </div>
      <div className="iconos">
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <a
          style={{ color: "#dd4b39" }}
          href="https://www.google.com/intl/es-419/gmail/about/"
          role="button"
          className="gmail"
        >
          <i className="fab fa-google fa-lg"></i>
        </a>
        <a
          href="https://wa.me/5493515930559?text=Me%20gustaría%20saber%20mas%20sobre%20las%20propiedades"
          className="whatsapp"
          target="_blank"
        >
          {" "}
          <i className="fa fa-whatsapp whatsapp-icon"></i>
        </a>
        <a
          style={{ color: "#ac2bac" }}
          href="https://www.instagram.com/marko_schneider/"
          role="button"
          className="insta"
        >
          <i className="fab fa-instagram fa-lg"></i>
        </a>
      </div>
      <div className="pie">
        <h2>Provisto por HREF</h2>
      </div>
    </div>
  );
}
