import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import React, { useState } from "react";

function ContactsComponent() {
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
    setFormData({
      name: "",
      surname: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Container id="contact-div">
      <Row className="justify-content-center mb-4">
        <Col>
          <Image src="contact_us.PNG" thumbnail />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={6}>
          {showAlert && (
            <div className="alert alert-success" role="alert">
              Invio confermato!
            </div>
          )}
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" value={formData.name} placeholder="Mario" name="name" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Cognome</Form.Label>
              <Form.Control
                type="text"
                value={formData.surname}
                placeholder="Rossi"
                name="surname"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Indirizzo email</Form.Label>
              <Form.Control
                type="email"
                value={formData.email}
                placeholder="esempio@email.it"
                name="email"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Messaggio</Form.Label>
              <Form.Control
                as="textarea"
                row={5}
                value={formData.message}
                placeholder="Il tuo messaggio qui..."
                name="message"
                onChange={handleChange}
              />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button onClick={handleSubmit} id="btn" variant="secondary" type="submit">
                Invia
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactsComponent;
