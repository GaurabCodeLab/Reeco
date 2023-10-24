import { Container, Nav, Navbar } from "react-bootstrap";
import { Cart } from "react-bootstrap-icons";

function NavBar() {
  return (
    <>
      <Navbar
        bg="success"
        data-bs-theme="dark"
        sticky="top"
        style={{ height: "6vmax", width: "100%" }}
      >
        <Container className="nav-b">
          <Navbar.Brand href="#home">Reeco</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Store</Nav.Link>
            <Nav.Link href="#features">Orders</Nav.Link>
            <Nav.Link href="#pricing">Analytics</Nav.Link>
          </Nav>
          <Nav.Link
            href="#cart"
            style={{ paddingRight: "80px", color: "white", fontSize: "large" }}
          >
            <Cart />
          </Nav.Link>
          <Nav.Link href="#name" style={{ color: "white" }}>
            Hello, James &#129171;
          </Nav.Link>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
