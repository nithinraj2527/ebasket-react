import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import AppContext from "../context/AppContext";

export function NavBar(props) {
  const { customerName } = useContext(AppContext);
  return (
    <Navbar bg="light" variant="light" className="  navbar-expand-sm  ">
      <Container className="container d-flex flex-wrap nav-container">
        <Nav className="me-auto">
          <Nav.Link
            href="#home"
            style={{ marginRight: "30px", color: "green" }}
          >
            {customerName}
          </Nav.Link>
          <Nav.Link href={"/"}>{"Home"}</Nav.Link>
          <Nav.Link href={"/Men"}>{"Men"}</Nav.Link>
          <Nav.Link href={"/Women"}>{"Women"}</Nav.Link>
          <Nav.Link href={"/watches"}>{"Watches"}</Nav.Link>
          <Nav.Link href={"/Furniture"}>Furniture</Nav.Link>
          <Nav.Link href={"/Electronics"}>Tv& Aplliances</Nav.Link>
          <Nav.Link href={"/Electronics/:1"}>Grocery</Nav.Link>
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
