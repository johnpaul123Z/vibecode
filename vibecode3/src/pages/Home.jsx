import { useState } from "react";
import ProductCard from "../components/ProductCard.jsx";
import Subscription from "../components/Subscription.jsx";
import "./Home.css";

const dummyProducts = [
  {
    id: 1,
    name: "Eco-friendly Toothbrush",
    carbonFootprint: 5,
    ethicalSourcing: "Fair Trade",
    affiliateLink: "https://affiliate.example/toothbrush",
  },
  {
    id: 2,
    name: "Sustainable Water Bottle",
    carbonFootprint: 3,
    ethicalSourcing: "Recycled materials",
    affiliateLink: "https://affiliate.example/bottle",
  },
  {
    id: 3,
    name: "Organic Cotton T-Shirt",
    carbonFootprint: 4,
    ethicalSourcing: "Organic",
    affiliateLink: "https://affiliate.example/tshirt",
  },
  {
    id: 4,
    name: "Recycled Notebook",
    carbonFootprint: 2,
    ethicalSourcing: "Recycled Paper",
    affiliateLink: "https://affiliate.example/notebook",
  },
  {
    id: 5,
    name: "Solar Powered Charger",
    carbonFootprint: 1,
    ethicalSourcing: "Renewable Energy",
    affiliateLink: "https://affiliate.example/charger",
  },
  // Sponsored product example
  {
    id: 6,
    name: "Premium Sustainable Backpack",
    carbonFootprint: 2,
    ethicalSourcing: "Eco Certified",
    affiliateLink: "https://affiliate.example/backpack",
    sponsored: true,
  },
];

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [maxCarbon, setMaxCarbon] = useState("");
  const [ethicalFilter, setEthicalFilter] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(dummyProducts);

  const handleSearch = (e) => {
    e.preventDefault();
    const term = searchTerm.toLowerCase();
    const maxCarbonValue = maxCarbon ? parseInt(maxCarbon, 10) : null;
    const ethicalTerm = ethicalFilter.toLowerCase();

    const results = dummyProducts.filter((product) => {
      const matchesName = product.name.toLowerCase().includes(term);
      const matchesCarbon = maxCarbonValue
        ? product.carbonFootprint <= maxCarbonValue
        : true;
      const matchesEthical = ethicalTerm
        ? product.ethicalSourcing.toLowerCase().includes(ethicalTerm)
        : true;
      return matchesName && matchesCarbon && matchesEthical;
    });
    setFilteredProducts(results);
  };

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
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {filteredProducts.length === 0 && <p>No products found.</p>}
      </section>
      {/* Subscription call-to-action */}
      <section className="subscription-section">
        <Subscription />
      </section>
      <footer>
        <p>
          Monetization includes affiliate links, sponsored placements and
          subscriptions for advanced features.
        </p>
      </footer>
    </div>
  );
}

export default Home;
