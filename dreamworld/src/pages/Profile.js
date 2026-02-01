import { useAuth } from "../context/AuthContext";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function Profile() {
  const { user, logout } = useAuth();

  if (!user) {
    return <h3 className="text-center mt-5">Please login</h3>;
  }

  return (
    <Container className="mt-5 text-center">
      <h3>My Account</h3>
      <p>Email: {user.email}</p>
      <Button variant="danger" onClick={logout}>
        Logout
      </Button>
    </Container>
  );
}

export default Profile;
