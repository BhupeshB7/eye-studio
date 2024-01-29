import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

function NavbarStudio() {
  const [isTogglerActive, setTogglerActive] = useState(false);

  const handleToggle = () => {
    setTogglerActive(!isTogglerActive);
  };
  return (
    <Navbar expand="lg" className="navbar-background">
      <Container className="navbar-backgrounds">
        <Navbar.Brand href="/" className="text-color">
        Shubhlagnam
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={`navbar-toggler-bg ${isTogglerActive ? 'active' : ''}`}
          onClick={handleToggle}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-color">
            <LinkContainer to="/">
              <Nav.Link className="text-color">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link className="text-color">About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link className="text-color">Contact us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/portfolio">
              <Nav.Link className="text-color">Portfolio</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/images">
              <Nav.Link className="text-color">Image</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/admin/portfolio/create">
              <Nav.Link className="text-color">Add Portfolio</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarStudio;
