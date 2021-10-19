import "../Component/valorMostrado.css";
import { useState } from "react";

function ValorMostrado({ valor, funcion }) {
  const valorid = { id: valor };
  return (
    <input
      onClick={() => funcion(valor)}
      className="input"
      value={valor}
      readOnly
    ></input>
  );
}

export default ValorMostrado;
