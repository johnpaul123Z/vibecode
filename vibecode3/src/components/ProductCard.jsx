import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      {product.sponsored && <div className="sponsored-badge">Sponsored</div>}
      <h2>{product.name}</h2>
      <p>Carbon Footprint: {product.carbonFootprint}</p>
      <p>Ethical Sourcing: {product.ethicalSourcing}</p>
      <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
        Buy Now
      </a>
    </div>
  );
}

export default ProductCard;
