import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [recent, setRecent] = useState([]);

  const addToCart = product => {
    setCart(prev => [...prev, product]);
  };

  const addToRecent = product => {
    setRecent(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) return prev;
      return [product, ...prev].slice(0, 10); // keep last 10 viewed
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, recent, addToRecent }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
