import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PlanoRestaurante = ({ mesas, nombreZona }) => {
  const [estadoMesas, setEstadoMesas] = useState(mesas);

  const toggleOcupacion = (id) => {
    setEstadoMesas((prevMesas) =>
      prevMesas.map((mesa) =>
        mesa.id === id ? { ...mesa, ocupada: !mesa.ocupada } : mesa
      )
    );
  };

  
  const personasOcupando = estadoMesas
    .filter((mesa) => mesa.ocupada)
    .reduce((total, mesa) => total + mesa.capacidad, 0);

  const mesasDisponibles = estadoMesas.filter((mesa) => !mesa.ocupada).length;

  return (
    <div className="container mt-4 d-flex">
      
      <div className="flex-grow-1">
        <h3 className="text-center text-primary">{nombreZona}</h3>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {estadoMesas.map((mesa) => (
            <button
              key={mesa.id}
              className={`btn ${mesa.ocupada ? "btn-danger" : "btn-success"}`}
              onClick={() => toggleOcupacion(mesa.id)}
              style={{
                width: mesa.tipo === "cuadrada" ? "80px" : "140px",
                height: "80px",
              }}
            >
              {mesa.id} <br />
              {mesa.ocupada ? "Ocupada" : "Libre"}
            </button>
          ))}
        </div>
      </div>

      
      <div className="ms-4 p-3 border rounded bg-light" style={{ width: "250px" }}>
        <h5 className="text-center">{nombreZona} - Estado</h5>
        <p><strong>Personas Ocupando:</strong> {personasOcupando}</p>
        <p><strong>Mesas Disponibles:</strong> {mesasDisponibles}</p>
      </div>
    </div>
  );
};

export default PlanoRestaurante;
