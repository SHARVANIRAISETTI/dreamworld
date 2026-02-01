import { Navbar, Container, FormControl, Nav, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

function Header({ searchQuery, setSearchQuery }) {
  const { cart } = useCart();
  const { user, logout } = useAuth();

  const totalQty = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">DreamWorld</Navbar.Brand>

        <FormControl
          placeholder="Search products..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="w-50"
        />

        <Nav>
          {user ? (
            <>
              <Nav.Link as={Link} to="/profile">Account</Nav.Link>
              <Nav.Link onClick={logout}>Logout</Nav.Link>
            </>
          ) : (
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          )}

          <Nav.Link as={Link} to="/cart">
            Cart <Badge bg="danger">{totalQty}</Badge>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
