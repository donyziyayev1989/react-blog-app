import { Navbar, Container, Nav, Button, NavDropdown } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navigation = ({ handleClick }) => {
  return (
    <Container>
      <Navbar expand="lg">
        <Navbar.Brand as="div">
          <Link to="/">Live Blog</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav">
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse
          id="main-navbar-nav"
          className="justify-content-md-end"
        >
          <Nav>
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/posts">
              Post
            </NavLink>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About us
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        <div>
          <Button variant="link" onClick={handleClick}>
            <FaSearch />
          </Button>
        </div>
      </Navbar>
    </Container>
  );
};

export default Navigation;
