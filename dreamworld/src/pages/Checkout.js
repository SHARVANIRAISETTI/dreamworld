import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useCart } from "../context/CartContext";
import { useState } from "react";

function Checkout() {
  const { cart, totalPrice } = useCart();
  const [paid, setPaid] = useState(false);

  if (paid) {
    return (
      <Container className="text-center mt-5">
        <Alert variant="success">
          🎉 Payment Successful!  
          <br />
          Your dream products are on the way.
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h2>Checkout</h2>

      {cart.map(item => (
        <p key={item.id}>
          {item.name} × {item.qty} = ₹{item.price * item.qty}
        </p>
      ))}

      <h4>Total Amount: ₹{totalPrice}</h4>

      <Button
        variant="primary"
        className="mt-3"
        onClick={() => setPaid(true)}
      >
        Pay Now
      </Button>
    </Container>
  );
}

export default Checkout;
