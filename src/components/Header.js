import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import { LoginModal } from "./Login";

export function Header(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [searchText, setSearchText] = useState("");
  const searchProduct = (event) => {
    setSearchText(event.target.value);
  };
  return (
    <>
      <Navbar className="head-container row" expand="lg">
        <Container>
          <div className=" col-2" style={{ marginLeft: "30px" }}>
            <span className="Logo">
              <a href="https://www.flipkart.com/plus">
                {" "}
                <img
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                  alt=""
                  width="100px; height:30px;"
                />
              </a>
            </span>
            <div className="explorediv">
              Explore
              <span className="exploretext"> Plus+</span>
            </div>
          </div>
          <div className="col-3">
            <InputGroup className="mb-3" style={{ marginTop: "10px" }}>
              <Form.Control
                placeholder="Search for Products"
                aria-label="Search"
                aria-describedby="basic-addon2"
                onChange={searchProduct}
              />
              <Button
                variant="light"
                id="button-addon2"
                onClick={() => props.searchItem(searchText)}
              >
                Search
              </Button>
            </InputGroup>
          </div>
          <div className=" col-2">
            <Button
              variant="outline-dark"
              className="text"
              onClick={handleShow}
            >
              My Account
            </Button>
          </div>
          <div className="col-1">
            <LoginModal
              show={show}
              handleShow={handleShow}
              handleClose={handleClose}
            />
          </div>
          <div className=" col-1 text">
            <Nav.Link>Become a Seller</Nav.Link>
          </div>
          <div className=" col-1">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto text">
                <NavDropdown title="More" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Notification Preference
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    24*7 Customer Support
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Product Card
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Download App
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </div>
          <div className=" col-3 ">
            <Nav.Link href="#link">
              <a
                href="https://www.flipkart.com/viewcart?exploreMode=true&preference=FLIPKART"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <button type="button" className="btn btn-outline-dark">
                  <img
                    src="https://cdn.vectorstock.com/i/1000x1000/62/87/flat-design-shopping-cart-vector-13576287.webp"
                    alt=""
                    height="35px"
                    width="25px"
                  />
                  Cart
                </button>
              </a>
            </Nav.Link>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
