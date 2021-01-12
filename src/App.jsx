import "./styles/App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Hero from "./components/Home/Hero";
import Footer from "./components/glolal/Footer";
import NavBar from "./components/glolal/Navbar";
import Category from "./components/Category";
import Detail from "./components/Details";
import { Store } from "./store";
import { useState } from "react";
// import zapatillaPuma from './assets/zapatilla.jpg'

function App() {
  const [data, setData] = useState({
    items: [],
    cantidad: 0,
  });
  return (
    <Store.Provider value={[data, setData]}>
      <BrowserRouter>
        <NavBar />

        <Switch>
          <Route exact path="/">
            <Hero />
          </Route>
          <Route path="/category/">
            <Category />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
        </Switch>

        <Footer />
      </BrowserRouter>
    </Store.Provider>
  );
}

export default App;
