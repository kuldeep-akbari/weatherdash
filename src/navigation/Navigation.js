import "./Navigation.css";
import { Navbar, Container, Nav, } from "react-bootstrap";
import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.css';

function Navigation() {
  return (
    <div className="App">
      <Navbar className="navbar" expand="lg">
        <Container>
          <Navbar.Brand className="nav-brand" as={Link} to="/">
            WeatherDash
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end main-nav">
              <Nav.Link className="nav-item" as={Link} to="/Prediction">
                Prediction
              </Nav.Link>
              <Nav.Link className="nav-item" as={Link} to="/AboutUs">
                AboutUs
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
