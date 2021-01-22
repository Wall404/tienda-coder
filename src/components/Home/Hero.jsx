import ItemListContainer from "../ItemList/ItemListContainer";

function Hero() {
  const saludar = () => {
    alert("Hola");
  };

  return (
    <>
      <h1 className="display-1 text-center">Bienvenidos a mi tienda</h1>
      <p className="text-center">Vendemos zapatillas y zapatos</p>
      {/* <button onClick={saludar}>Saludar</button> */}
      <ItemListContainer />
    </>
  );
}

export default Hero;
