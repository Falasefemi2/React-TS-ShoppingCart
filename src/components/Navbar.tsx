import { Navbar as NavbarBs, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useState } from "react";

const Navbar = () => {
  const [id, setId] = useState(1);
  const {openCart, cartQuantity} = useShoppingCart()
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        {cartQuantity(id) > 0 && <Button onClick={openCart}
          variant="outline-primary"
          className="rounded-circle"
          style={{ width: "3rem", height: "3rem", position: "relative" }}
        >
          <AiOutlineShoppingCart fontSize="20px" />
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: "white",
              width: "1.5rem",
              position: "absolute",
              bottom: 0,
              transform: 'translate(25%, 25%)'
            }}
          >
            {cartQuantity(id)}
          </div>
        </Button>}
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
