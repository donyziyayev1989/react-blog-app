import { Navbar, Container, Nav, Button, NavDropdown } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const Navigation = () => {
  return (
    <Container>
      <Navbar expand="lg">
        <Navbar.Brand href="/">Live Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav">
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse
          id="main-navbar-nav"
          className="justify-content-md-end"
        >
          <Nav>
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Blog</Nav.Link>
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
            <Nav.Link href="#">Contact</Nav.Link>
            <Nav.Link href="#">About us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div>
          <Button variant="link">
            <FaSearch />
          </Button>
        </div>
      </Navbar>
    </Container>
  );
};

export default Navigation;
