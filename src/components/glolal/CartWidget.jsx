import { useContext, useState, useRef } from "react";
// import { RiShoppingCartLine } from "react-icons/ri";
import { Popover, Overlay, Button } from "react-bootstrap";

import { Store } from "../../store";

function CartWidget() {
  const [data, setData] = useContext(Store);
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(data);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Button variant="dark" onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-cart2"
          viewBox="0 0 16 16"
        >
          <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
        </svg>
      </Button>

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref.current}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Title as="h3">Carrito</Popover.Title>
          <Popover.Content>
            <h1>Contenido del Carrito</h1>
            {data.items.map((item) => (
              <h2>{item.title}</h2>
            ))}
          </Popover.Content>
        </Popover>
      </Overlay>
    </div>
  );
}
export default CartWidget;
