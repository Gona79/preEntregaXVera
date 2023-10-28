import { Navbar, Nav, Badge } from 'react-bootstrap';
import './NavBar.css'; // Importa los estilos

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="nav-centered">
      <Navbar.Brand href="#home">Alfa y Omega Estética 🌸</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="menu-center">
          <Nav.Link href="#depilacion">Depilación</Nav.Link>
          <Nav.Link href="#masajes">Masajes</Nav.Link>
          <Nav.Link href="#productos">Productos</Nav.Link>
          <Nav.Link href="#cursos">Cursos</Nav.Link>
          <Nav.Link href="#contacto">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Nav>
        <Nav.Link href="#carrito">
          <i className="fa fa-shopping-cart"></i>
          <Badge pill variant="info">3</Badge>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
