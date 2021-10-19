import "./App.css";
import { useState } from "react";
import Button from "./Component/Button";
import ListadoNumeros from "./Component/ListadoNumeros";
import ValorGrande from "./Component/ValorGrande";

function App() {
  const [listado, setListado] = useState([1, 2, 3, 4, 5]);
  const sumarNumero = () => {
    if (listado[4] === 20) {
      setListado(listado);
    } else {
      setListado(listado.map((lista) => lista + 1));
    }
  };
  const restarNumero = () => {
    if (listado[0] === 0) {
      setListado(listado);
    } else {
      setListado(listado.map((lista) => lista - 1));
    }
  };

  const [stateValorGrande, setStateValorGrande] = useState(false);
  const [numero, setNumero] = useState(0);

  const valorGrande = (valor) => {
    setStateValorGrande(true);
    setNumero(valor);
  };

  return (
    <div className="App">
      <Button name="<<" funcion={restarNumero} />
      <ListadoNumeros listado={listado} funcion={valorGrande} />
      <Button name=">>" funcion={sumarNumero} />
      <div>
        <ValorGrande state={stateValorGrande} num={numero} />
      </div>
    </div>
  );
}

export default App;
