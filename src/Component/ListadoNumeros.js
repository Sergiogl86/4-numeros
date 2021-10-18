import ValorMostrado from "./ValorMostrado";

function ListadoNumeros({ listado, funcion }) {
  return listado.map((lista) => (
    <ValorMostrado valor={lista} funcion={funcion} />
  ));
}

export default ListadoNumeros;
