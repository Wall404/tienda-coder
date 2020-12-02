import './styles/App.css'
import Hero from './components/Home/Hero'
import Footer from './components/glolal/Footer'
import zapatillaPuma from './assets/zapatilla.jpg'

function App() {
  return (
    <>
      <Hero />
      <img src={zapatillaPuma} alt="zapatilla marca Puma Azul"/>
      <Footer />
    </>
  );
}

export default App;
