import ItemContainer from "./ItemContainer";

function ItemListContainer () {
    
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
            resolve(products)
        }, 5000)
    })

    return (
        <section className="featured-products">
            <div className="container">
                {
                    products.length ? 
                    <>
                        <h2>Productos</h2>
                        <ul>
                            {
                                products.map((item, index) => (
                                    <li key={index}>
                                        <ItemContainer
                                            titulo={item.titulo}
                                            precio={item.precio}
                                        />
                                    </li>
                                ))
                            }
                        </ul>
                    </> :
                    <p className="cargando">Cargando items...</p>
                }

            </div>
        </section>
    )
}

export default ItemListContainer