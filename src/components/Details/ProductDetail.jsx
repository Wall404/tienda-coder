import { useState, useContext } from "react";
import "./ProductDetail.css";
import { Store } from "../../store";
// import { useHistory } from "react-reouter-dom";

const ProductDetail = ({ item }) => {
  // const history = useHistory()
  const [data, setData] = useContext(Store);
  const [cant, setCant] = useState(1);

  const onAdd = () => {
    // alert(`Agregaste $(cant) productos al carrito`);
    setData({
      ...data,
      cantidad: data.cantidad + cant,
      items: [...data.items, item],
    });
    // history.push('/cart')
  };

  console.log(data);

  const handleClickRestar = () => {
    if (cant > 1) {
      setCant(cant - 1);
    }
  };

  return (
    <article className="producto">
      <h1>
        {item.nombre} - {item.id}
      </h1>
      <img src={item.foto} alt="" />
      <p>{item.descripcion}</p>
      <p>{item.precio}</p>
      <div className="cant">
        <button
          disabled={cant === 1 ? "disabled" : null}
          onClick={handleClickRestar}
        >
          -
        </button>
        <input type="text" value={cant} readOnly />
        <button onClick={() => setCant(cant + 1)}>+</button>
      </div>

      <button className="btn" onClick={onAdd}>
        Agregar al carrito
      </button>
    </article>
  );
};

export default ProductDetail;
