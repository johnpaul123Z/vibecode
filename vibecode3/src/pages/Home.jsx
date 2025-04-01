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
  {
    id: 3,
    name: 'Organic Cotton T-Shirt',
    carbonFootprint: 4,
    ethicalSourcing: 'Organic',
    affiliateLink: 'https://affiliate.example/tshirt',
  },
  {
    id: 4,
    name: 'Recycled Notebook',
    carbonFootprint: 2,
    ethicalSourcing: 'Recycled Paper',
    affiliateLink: 'https://affiliate.example/notebook',
  },
  {
    id: 5,
    name: 'Solar Powered Charger',
    carbonFootprint: 1,
    ethicalSourcing: 'Renewable Energy',
    affiliateLink: 'https://affiliate.example/charger',
  },
]

function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [maxCarbon, setMaxCarbon] = useState('')
  const [ethicalFilter, setEthicalFilter] = useState('')
  const [filteredProducts, setFilteredProducts] = useState(dummyProducts)

  const handleSearch = (e) => {
    e.preventDefault()
    const term = searchTerm.toLowerCase()
    const maxCarbonValue = maxCarbon ? parseInt(maxCarbon, 10) : null
    const ethicalTerm = ethicalFilter.toLowerCase()

    const results = dummyProducts.filter(product => {
      const matchesName = product.name.toLowerCase().includes(term)
      const matchesCarbon = maxCarbonValue ? product.carbonFootprint <= maxCarbonValue : true
      const matchesEthical = ethicalTerm
        ? product.ethicalSourcing.toLowerCase().includes(ethicalTerm)
        : true
      return matchesName && matchesCarbon && matchesEthical
    })
    setFilteredProducts(results)
  }

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Eco-Product Finder</h1>
        <p>Discover and compare environmentally friendly and sustainable products.</p>
      </header>
      <form className="home-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Carbon Footprint"
          value={maxCarbon}
          onChange={(e) => setMaxCarbon(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ethical Sourcing"
          value={ethicalFilter}
          onChange={(e) => setEthicalFilter(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <section className="products">
        <h2>Products</h2>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
        {filteredProducts.length === 0 && <p>No products found.</p>}
      </section>
      <section className="monetization">
        <h2>Monetization Options</h2>
        <p>
          This platform is monetized through:
        </p>
        <ul>
          <li>Affiliate links for eco-friendly products.</li>
          <li>Sponsored placements for sustainable brands.</li>
          <li>Subscription plans for advanced comparison features.</li>
        </ul>
      </section>
      <footer className="home-footer">
        <p>&copy; 2025 Eco-Product Finder. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Home