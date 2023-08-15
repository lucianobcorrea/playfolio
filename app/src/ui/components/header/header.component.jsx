import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../../assets/logo.png';
import useGlobalUser from '../../../context/user.context';
import { useLogout } from '../../../hook/index';
import './header.style.css';

export function Header() {
  const [user] = useGlobalUser();
  const { handleLogout } = useLogout();

  return (
    <Navbar
      sticky="top"
      expand="lg"
      className="bg-body-tertiary"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="/home">
          <div className="brand-logo">
            <img src={logo} alt="Playfolio logo" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="align-items-center header-space-between-items">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/add-game">Add Game</Nav.Link>
            <NavDropdown
              title={
                <img
                  src={user.image}
                  alt="User dropdown"
                  className="user-header-image"
                />
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
              <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
