import ValorMostrado from "./ValorMostrado";

function ValorGrande({ state = false, num = 0 }) {
  if (state === true) {
    return <ValorMostrado valor={num} />;
  } else {
    return <div />;
  }
}

export default ValorGrande;
