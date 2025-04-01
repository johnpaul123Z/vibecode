import './ProductCard.css'

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>Carbon Footprint: {product.carbonFootprint}</p>
      <p>Ethical Sourcing: {product.ethicalSourcing}</p>
      <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
        Buy Now
      </a>
    </div>
  )
}

export default ProductCard