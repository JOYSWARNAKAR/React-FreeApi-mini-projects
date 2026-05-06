import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";

const App = () => {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      const response = await fetch(
        "https://api.freeapi.app/api/v1/public/randomproducts"
      );

      const result = await response.json();

      console.log(result);

      if (result.success) {
        setProducts(result.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container">
      <h1>🛒 Product Listing</h1>

      <div className="products">
        {products.map((product, index) => (
          <ProductCard
            key={product.id || index}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default App;