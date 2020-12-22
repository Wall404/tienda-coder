import "./styles/App.css";
import Hero from "./components/Home/Hero";
import Footer from "./components/glolal/Footer";
import NavBar from "./components/glolal/Navbar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
// import zapatillaPuma from './assets/zapatilla.jpg'

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <ItemListContainer />
      {/* <img src={zapatillaPuma} alt="zapatilla marca Puma Azul"/> */}
      <Footer />
    </>
  );
}

export default App;
