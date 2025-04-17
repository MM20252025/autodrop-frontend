import React, { useState } from "react";
import Products from "./pages/Products";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log("🛒 Dodano do koszyka:", product);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold p-6">AutoDrop Sklep</h1>
      <Products onAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;
