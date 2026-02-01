import Button from "react-bootstrap/Button";

function CartItem({ item, updateQty, removeFromCart }) {
  return (
    <tr>
      <td>
        <img
          src={item.image}
          alt={item.name}
          style={{ width: "70px", height: "70px", objectFit: "cover" }}
        />
      </td>
      <td>{item.name}</td>
      <td>₹{item.price}</td>
      <td>
        <Button
          size="sm"
          variant="secondary"
          onClick={() => updateQty(item.id, item.qty - 1)}
          disabled={item.qty === 1}
        >
          -
        </Button>

        <span className="mx-2">{item.qty}</span>

        <Button
          size="sm"
          variant="secondary"
          onClick={() => updateQty(item.id, item.qty + 1)}
        >
          +
        </Button>
      </td>
      <td>₹{item.price * item.qty}</td>
      <td>
        <Button
          variant="danger"
          size="sm"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </Button>
      </td>
    </tr>
  );
}

export default CartItem;
