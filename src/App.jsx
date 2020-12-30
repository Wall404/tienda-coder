import "./styles/App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Hero from "./components/Home/Hero";
import Footer from "./components/glolal/Footer";
import NavBar from "./components/glolal/Navbar";
import Category from "./components/Category";
import Detail from "./components/Details";
// import zapatillaPuma from './assets/zapatilla.jpg'

function App() {
  return (
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
  );
}

export default App;
