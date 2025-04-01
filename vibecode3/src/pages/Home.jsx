import { useState } from 'react'
import ProductCard from '../components/ProductCard.jsx'
import './Home.css'

const dummyProducts = [
  {
    id: 1,
    name: 'Eco-friendly Toothbrush',
    carbonFootprint: 5,
    ethicalSourcing: 'Fair Trade',
    affiliateLink: 'https://affiliate.example/toothbrush',
  },
  {
    id: 2,
    name: 'Sustainable Water Bottle',
    carbonFootprint: 3,
    ethicalSourcing: 'Recycled materials',
    affiliateLink: 'https://affiliate.example/bottle',
  },
]

function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredProducts, setFilteredProducts] = useState(dummyProducts)

  const handleSearch = (e) => {
    e.preventDefault()
    const term = searchTerm.toLowerCase()
    const results = dummyProducts.filter(product =>
      product.name.toLowerCase().includes(term)
    )
    setFilteredProducts(results)
  }

  return (
    <div className="home-container">
      <header>
        <h1>Sustainable Search</h1>
        <p>Find environmentally friendly and sustainable products.</p>
      </header>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <section className="products">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
        {filteredProducts.length === 0 && <p>No products found.</p>}
      </section>
      <footer>
        <p>
          Monetization options: affiliate links, sponsored placements, or a subscription for advanced features.
        </p>
      </footer>
    </div>
  )
}

export default Home