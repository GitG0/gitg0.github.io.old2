import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import keyboardG from '../assets/keyboardG.jsx';
import ThemeSwitch from '../components/ThemeSwitch.jsx';
import '../assets/color-modes.js'

function TopNav() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/">
            {/* <img
              alt=""
              src=""
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '} */}
            <keyboardG></keyboardG>
            {' '}
            GitG0.io
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="About">About</Nav.Link>
            <Nav.Link href="ContactMe">Contact Me</Nav.Link>
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
          </Nav>
        </Navbar.Collapse>
        <ThemeSwitch></ThemeSwitch>
      </Container>
    </Navbar>
  );
}

export default TopNav;