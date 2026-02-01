import { Card, Button } from "react-bootstrap";

function ProductCard({ product, addToRecent }) {
  const handleClick = () => {
    if (addToRecent) addToRecent(product);
  };

  return (
    <Card style={{ width: "200px" }} onClick={handleClick} className="shadow-sm">
      <Card.Img variant="top" src={product.image} style={{ height: "200px", objectFit: "cover" }} />
      <Card.Body>
        <Card.Title style={{ fontSize: "1rem" }}>{product.name}</Card.Title>
        <Card.Text>₹{product.price}</Card.Text>
        <Button variant="primary" size="sm">
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
