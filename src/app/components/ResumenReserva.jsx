import React from "react";

const ResumenReserva = ({ mesas }) => {
  const mesasOcupadas = mesas.filter((mesa) => mesa.ocupada).length;
  const mesasDisponibles = mesas.length - mesasOcupadas;
  const personasOcupando = mesas
    .filter((mesa) => mesa.ocupada)
    .reduce((total, mesa) => total + mesa.capacidad, 0);

    /// Las mesas rectangulares las ocupan 6 personas estas solo están en ZonaInterior
    //  Las cuadradas solo 2
        

  return (
    <div className="p-3 border bg-light">
      <h5 className="text-center">Estado del Restaurante</h5>
      <hr />
      <p className="fw-bold text-primary">Mesas Ocupadas: {mesasOcupadas}</p>
      <p className="fw-bold text-success">Mesas Disponibles: {mesasDisponibles}</p>
      <p className="fw-bold text-danger">Personas Ocupando Mesas: {personasOcupando}</p>
    </div>
  );
};

export default ResumenReserva;
