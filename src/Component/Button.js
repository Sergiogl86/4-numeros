import "../Component/button.css";

function Button({ name, funcion }) {
  return (
    <button onClick={funcion} className="boton">
      {name}
    </button>
  );
}

export default Button;
