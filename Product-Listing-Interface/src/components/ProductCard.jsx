const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img
        src={product.thumbnail}
        alt={product.title}
      />

      <div className="content">
        <h3>{product.title}</h3>

        <p className="price">
          ₹ {product.price}
        </p>

        <p className="brand">
          {product.brand}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;