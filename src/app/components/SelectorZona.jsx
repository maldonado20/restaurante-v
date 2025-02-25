"use client";
import React, { useState } from "react";
import PlanoRestaurante from "./PlanoRestaurante";
import Terraza from "../models/Terraza";
import ZonaVIP from "../models/ZonaVIP";
import Interior from "../models/Interiror";

{/*Esté SelectorZona como su nombre lo duce es encargada de la seleción de zonas (Interior,Terraza y VIP) */}

export default function SelectorZona() {
  const [zonaSeleccionada, setZonaSeleccionada] = useState(null);

  return (
    <div className="text-center mt-4">
      {/* Botones para elegir la zona que se quiere monitorear */}
      <div className="d-grid gap-2 d-md-block">
        <button onClick={() => setZonaSeleccionada("Interior")}className="btn btn-outline-primary mx-2">
          {/* Boton para ZonaInterir */}
          {zonaSeleccionada === "Interior" ? "Ocultar Interior" : "Mostrar Interior"}
        </button>

          {/* Boton para ZonaTerraza */}
        <button onClick={() => setZonaSeleccionada("Terraza")}className="btn btn-outline-success mx-2">
          {zonaSeleccionada === "Terraza" ? "Ocultar Terraza" : "Mostrar Terraza"}
        </button>

          {/* Boton para ZonaVIP */}
        <button onClick={() => setZonaSeleccionada("VIP")} className="btn btn-outline-warning mx-2">
          {zonaSeleccionada === "VIP" ? "Ocultar VIP" : "Mostrar VIP"}
        </button>
      </div>

      
      <div className="container mt-4">
        {zonaSeleccionada === "Interior" && <PlanoRestaurante mesas={Interior} nombreZona="Zona Interior" />}
        {zonaSeleccionada === "Terraza" && <PlanoRestaurante mesas={Terraza} nombreZona="Zona Terraza" />}
        {zonaSeleccionada === "VIP" && <PlanoRestaurante mesas={ZonaVIP} nombreZona="Zona VIP" />}
      </div>
    </div>
  );
}
