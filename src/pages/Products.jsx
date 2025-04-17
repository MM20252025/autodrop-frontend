import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";

function Products({ onAddToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://autodrop-backend-1.onrender.com/api/products')
      .then((res) => res.json())
      .then(setProducts)
      .catch((err) => console.error("❌ Błąd pobierania produktów:", err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
        <ShoppingCart className="w-6 h-6" />
        Produkty
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-sm hover:shadow-md transition">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-3 rounded" />
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.price} zł</p>
            <button
              onClick={() => onAddToCart(product)}
              className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Dodaj do koszyka
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;



 