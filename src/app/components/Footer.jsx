import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3 mt-auto w-100">
      <div className="container">
        <p className="mb-1">&copy; 2025 ControlRestaurante - Todos los derechos reservados</p>
        <div className="d-flex justify-content-center gap-3">
          <a href="#" className="text-light fs-5"><i className="bi bi-facebook"></i></a>
          <a href="#" className="text-light fs-5"><i className="bi bi-instagram"></i></a>
          <a href="#" className="text-light fs-5"><i className="bi bi-twitter-x"></i></a>
          <a href="#" className="text-light fs-5"><i className="bi bi-whatsapp"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
