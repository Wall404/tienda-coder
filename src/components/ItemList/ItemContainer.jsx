import { Card } from "react-bootstrap";
import { useState } from "react";
import "./ItemContainer.css";

function ItemContainer() {
  const [cant, setCant] = useState(1);

  const restarCantidad = () => {
    if (cant > 1) {
      setCant(cant - 1);
    }
  };

  return (
    <Card style={{ width: "10rem" }}>
      <Card.Img variant="top" src="https://via.placeholder.com/120" alt="" />
      <Card.Body>
        <Card.Title>Producto</Card.Title>
        <button className="btn" variant="light" onClick={restarCantidad}>
          -
        </button>
        <span>{cant}</span>
        <button
          className="btn"
          variant="light"
          onClick={() => setCant(cant + 1)}
        >
          +
        </button>
        {/* <input type="text" value={cant} /> */}
      </Card.Body>
    </Card>
  );
}

export default ItemContainer;
