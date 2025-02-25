import React from "react";

const Mesa = ({ mesa, toggleOcupacion }) => {
  return (
    <button
      className={`btn ${mesa.ocupada ? "btn-danger" : "btn-success"} d-flex justify-content-center align-items-center m-1`}
      style={{
        width: mesa.shape === "rectangle" ? "120px" : "60px",
        height: "60px",
        borderRadius: mesa.shape === "square" ? "0" : "10px",
      }}
      onClick={() => toggleOcupacion(mesa.id)}
    >
      {mesa.id}
    </button>
  );
};

export default Mesa;
