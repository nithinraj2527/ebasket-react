import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import AppContext from "../context/AppContext";

export function LoginModal({ show, handleClose }) {
  const { customerName, updateCustomerName } = useContext(AppContext);
  const [mailId, setMailId] = useState("");
  const extractMailId = (event) => {
    setMailId(event.target.value);
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>{" "}
        <br />
        <Form>
          <Form.Group as={Row} className="mb-1" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="9">
              <Form.Control
                type="email"
                defaultValue="email@example.com"
                onChange={extractMailId}
              />
            </Col>
          </Form.Group>
          <br />

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Col sm="9">
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>
        </Form>
        <div>{customerName}</div>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              const id = "welcome  " + mailId;
              updateCustomerName(id);
            }}
          >
            Sign-In
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
