import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export function NavBar() {
  return (
    <Navbar bg="light" variant="light" className="  navbar-expand-sm  ">
      <Container className="container d-flex flex-wrap nav-container">
        <Nav className="me-auto">
          <Nav.Link href="#home">Electronics</Nav.Link>
          <Nav.Link href="#home">Furniture</Nav.Link>
          <Nav.Link href="#features">Men</Nav.Link>
          <Nav.Link href="#pricing">Women</Nav.Link>
          <Nav.Link href="#features">Baby& Kids</Nav.Link>
          <Nav.Link href="#pricing">Tv& Aplliances</Nav.Link>
          <Nav.Link href="#home">Grocery</Nav.Link>
          <Nav.Link href="#home">Travel</Nav.Link>
          <Nav.Link href="#home">Beauty&Toys</Nav.Link>
          <NavDropdown title="More" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}
