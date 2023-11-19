import { Navbar, Nav, Badge } from 'react-bootstrap';
import './NavBar.css'; // Importa los estilos
import CartWidget from '../cartwidget/CartWidget'; // Importa el CartWidget

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="nav-centered">
      <Navbar.Brand href="/">Alfa y Omega Estética 🌸</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="menu-center">
          <Nav.Link href="/category/depilacion">Depilación</Nav.Link>
          <Nav.Link href="/category/masajes">Masajes</Nav.Link>
          <Nav.Link href="/category/productos">Productos</Nav.Link>
          <Nav.Link href="/category/cursos">Cursos</Nav.Link>
          <Nav.Link href="/contacto">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Nav>
        <CartWidget />
      </Nav>
    </Navbar>
  );
}
export default NavBar;
