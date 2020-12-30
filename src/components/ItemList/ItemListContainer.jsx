import { useState, useEffect } from "react";
import ItemContainer from "./ItemContainer";

function ItemListContainer() {
  const [items, setItems] = useState([]);

  const products = [
    {
      id: 1,
      titulo: "Producto 1",
      precio: 500,
    },
    {
      id: 2,
      titulo: "Producto 2",
      precio: 300,
    },
    {
      id: 3,
      titulo: "Producto 3",
      precio: 600,
    },
    {
      id: 4,
      titulo: "Producto 4",
      precio: 247,
    },
  ];

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });

  const getProducstFromDB = async () => {
    try {
        const result = await getProducts;
        setItems(result);
    } catch (error) {
        console.log("No podemos mostrar los productos en este momento");
    }
  };

  useEffect(() => {
    getProducstFromDB();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="featured-products">
      <div className="container">
        {items.length ? (
          <>
            <h2>Productos</h2>
            <ul>
              {items.map((item, index) => (
                <li key={index}>
                  <ItemContainer
                    id={item.id}
                    titulo={item.titulo}
                    precio={item.precio}
                  />
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p className="cargando">Cargando items...</p>
        )}
      </div>
    </section>
  );
}

export default ItemListContainer;
