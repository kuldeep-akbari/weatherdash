import "./Navigation.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Brand from "../brand/Brand";
// import 'bootstrap/dist/css/bootstrap.css';

function Navigation() {
  return (
    <div>
      <Navbar className="navbar" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <Brand />
          </Navbar.Brand>
          <Navbar.Toggle className="navbar-dark" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end main-nav">
              <NavLink
                to="/Prediction"
                active ="selected"
                className="nav-item nav-link"
              >
                Prediction
              </NavLink>
              <NavLink
                to="/AboutUs"
                active ="selected"
                className="nav-item nav-link"
              >
                AboutUs
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
