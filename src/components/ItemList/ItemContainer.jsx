import { Container, Card, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./ItemContainer.css";

const ItemContainer = ({ id, titulo, precio }) => {
  const [cant, setCant] = useState(1);

  const restarCantidad = () => {
    if (cant > 1) {
      setCant(cant - 1);
    }
  };

  return (
    <Container>
      <Card style={{ width: "15rem" }}>
        <Card.Img
          //   variant="top"
          src="https://via.placeholder.com/130"
          alt=""
          thumbnail
        />
        <Card.Body className="card-data">
          <Card.Title>{titulo}</Card.Title>
          <Row xs={3}>
            <Button variant="light" onClick={restarCantidad}>
              -
            </Button>
            <p>{cant}</p>
            <Button variant="primary" onClick={() => setCant(cant + 1)}>
              +
            </Button>
          </Row>
          <p>${precio}</p>
          {/* <input type="text" value={cant} /> */}
          <Button variant="info">
            <Link to={`/detail/${id}`}>Ver Detalle</Link>
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ItemContainer;
