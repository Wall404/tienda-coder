import CartWidget from './CartWidget'
import { Navbar, Nav } from 'react-bootstrap'

function NavBar () {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Tienda Coder</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>Productos</Nav.Link>
                    <Nav.Link href="/category/">Categorias</Nav.Link>
                    <Nav.Link>Acerca de Nosostros</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <CartWidget />
        </Navbar>
    )
}

export default NavBar