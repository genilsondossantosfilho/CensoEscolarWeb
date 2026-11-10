import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';


function Header() {
  return (
    <Navbar  bg="secondary" data-bs-theme="dark">
        <Navbar.Brand>Censo Escolar</Navbar.Brand>
        <Nav>
        {/* <Nav.Link href="#home">Home</Nav.Link> */}
          <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/instituicoes">
                <Nav.Link>Instituições</Nav.Link>
          </LinkContainer>
        </Nav>
    </Navbar>
  );
}

export default Header;
// variant="dark"