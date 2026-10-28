import products from "../data/products";
import ProductCard from "./ProductCard";
import "./ProductSection.css";

function ProductSection() {
return ( <section className="products-section" id="shop"> <div className="section-heading"> <div> <p>OUR COLLECTION</p> <h2>Featured Products</h2> </div>


    <a href="#shop">View All →</a>
  </div>

  <div className="products-grid">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
</section>


);
}

export default ProductSection;
