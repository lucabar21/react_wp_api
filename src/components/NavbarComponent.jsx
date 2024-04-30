import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarComponent() {
  return (
    <Navbar id="nav-bar" expand="lg" className="bg-body-tertiary mb-4">
      <Container fluid>
        <Navbar.Brand href="/">
          <strong style={{ color: "white" }}>TechPulse</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-3 gap-3">
            <Nav.Link className="nav-link" style={{ color: "white" }} href="/">
              Home
            </Nav.Link>
            <Nav.Link className="nav-link" style={{ color: "white" }} href="about">
              About
            </Nav.Link>
            <Nav.Link className="nav-link" style={{ color: "white" }} href="contact">
              Contatti
            </Nav.Link>
            <Nav.Link className="nav-link" style={{ color: "white" }} href="blog">
              Blog
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
