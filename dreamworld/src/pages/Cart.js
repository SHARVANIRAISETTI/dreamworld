import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, updateQty, removeFromCart, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <Container className="text-center mt-5">
        <h3>Your cart is empty 🛒</h3>
        <Link to="/">
          <Button className="mt-3">Go Shopping</Button>
        </Link>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Shopping Cart</h2>

      <Table responsive bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <CartItem
              key={item.id}
              item={item}
              updateQty={updateQty}
              removeFromCart={removeFromCart}
            />
          ))}
        </tbody>
      </Table>

      <h4 className="text-end">Subtotal: ₹{totalPrice}</h4>

      <div className="text-end">
        <Link to="/checkout">
          <Button variant="success">Proceed to Checkout</Button>
        </Link>
      </div>
    </Container>
  );
}

export default Cart;
