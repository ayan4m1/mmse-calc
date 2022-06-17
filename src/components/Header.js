import { Link } from 'gatsby';
import { Container, Navbar, Nav } from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar variant="primary" className="mb-4">
      <Container>
        <Navbar.Brand>
          <Nav.Item as={Link} to="/">
            MMSE-2
          </Nav.Item>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link as={Link} to="/calculator">
              Calculator
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
