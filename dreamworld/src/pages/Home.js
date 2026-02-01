import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import products from "../data/products"; // Make sure this has 25 products with category field
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import "./home.css";

function Home({ searchQuery = "" }) {
  const { recent, addToRecent } = useCart();
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Filter products safely by searchQuery
  useEffect(() => {
    const query = searchQuery?.toLowerCase() || "";
    setFilteredProducts(
      products.filter(p => p.name?.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  // Unique categories (max 5)
  const categories = [...new Set(products.map(p => p.category))].slice(0, 5);

  // Suggested products (random 5)
  const suggested = products
    .sort(() => 0.5 - Math.random())
    .slice(0, 5);

  return (
    <Container className="mt-4">
      {/* Recently Viewed */}
      {recent.length > 0 && (
        <div className="mb-5">
          <h4>Recently Viewed</h4>
          <div className="horizontal-scroll">
            {recent.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                addToRecent={addToRecent}
              />
            ))}
          </div>
        </div>
      )}

      {/* Categories */}
      {categories.map(category => (
        <div key={category} className="mb-5">
          <h4>{category}</h4>
          <div className="horizontal-scroll">
            {filteredProducts
              .filter(p => p.category === category)
              .slice(0, 5) // Only 5 products per category
              .map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  addToRecent={addToRecent}
                />
              ))}
          </div>
        </div>
      ))}

      {/* Suggested Products */}
      <div className="mb-5">
        <h4>Suggested for You</h4>
        <div className="horizontal-scroll">
          {suggested.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              addToRecent={addToRecent}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Home;
