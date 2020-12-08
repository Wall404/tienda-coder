import CartWidget from './CartWidget'
import { Navbar, Nav } from 'react-bootstrap'

function NavBar () {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Tienda Coder</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#features">Novedades</Nav.Link>
                    <Nav.Link href="#products">Productos</Nav.Link>
                    <Nav.Link href="#about-us">Acerca de Nosostros</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <CartWidget />
        </Navbar>
    )
}

export default NavBar