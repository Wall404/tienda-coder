import './styles/App.css'
import Hero from './components/Home/Hero'
import Footer from './components/glolal/Footer'
import NavBar from './components/glolal/Navbar'
import zapatillaPuma from './assets/zapatilla.jpg'

function App() {
  return (
    <>
      <NavBar/>
      <Hero />
      <img src={zapatillaPuma} alt="zapatilla marca Puma Azul"/>
      <Footer />
    </>
  );
}

export default App;
