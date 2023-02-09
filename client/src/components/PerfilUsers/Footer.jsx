import React from "react";
import "./estilos/Footer.css";

export default function Footer() {
  return (
    <div className="main-Footer">
      <div className="cont-img">
        <img
          className="img-footer"
          src="https://www.figma.com/file/5UwzdygEBJdRBlHgT8rffs/image/f9fe3862f912d53a9e8cddc4dde789b443cc3c90?fuid=1158835961255642047"
        />
      </div>
      <div className="h-3-Foot">
        <h3 className="h3-f">Avenida San Martín 1150</h3>
        <h3 className="h3-f">Córdoba, Argentina</h3>
      </div>
      <div className="redes-container">
        <a href="https://web.whatsapp.com/" className="foot-btn">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href="https://www.instagram.com/" className="foot-btn">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/" className="foot-btn">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.facebook.com/" className="foot-btn">
          <i className="fab fa-facebook-f"></i>
        </a>
      </div>
      <div className="pie">
        <h2 className="h2-pie">
          Provisto por{" "}
          <a href="#" className="a-href">
            HREF.
          </a>{" "}
          Todos los derechos reservados.
        </h2>
      </div>
    </div>
  );
}
