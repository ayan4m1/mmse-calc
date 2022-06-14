import { Link } from 'gatsby';
import { Navbar, Nav } from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar variant="primary" className="mb-4">
      <Navbar.Brand>
        <Nav.Item as={Link} to="/">
          RCMAS
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
    </Navbar>
  );
}
