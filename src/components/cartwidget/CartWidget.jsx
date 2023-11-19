import { Nav, Badge } from "react-bootstrap";

const CartWidget = () => {
  return (
    <Nav.Link href="#carrito">
      <i className="fa fa-shopping-cart"></i>
      <Badge pill variant="info">
        3
      </Badge>
    </Nav.Link>
  );
};

export default CartWidget;