import "./ProductCard.css";

function ProductCard({ product }) {
return ( <article className="product-card"> <div className="product-image"> <img src={product.image} alt={product.name} />

    {product.badge && (
      <span className="badge">{product.badge}</span>
    )}
  </div>

  <div className="product-info">
    <p>{product.category}</p>
    <h3>{product.name}</h3>

    <div className="product-bottom">
      <strong>${product.price.toFixed(2)}</strong>
      <button aria-label={`Add ${product.name} to cart`}>+</button>
    </div>
  </div>
</article>

);
}

export default ProductCard;
