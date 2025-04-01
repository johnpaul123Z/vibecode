import React from 'react';
import SearchBar from '../components/SearchBar';

const Home: React.FC = () => {
    return (
        <div className="home">
            <h1>Welcome to Green Search</h1>
            <p>Your specialized search engine for environmentally friendly and sustainable products.</p>
            <SearchBar />
            {/* Placeholder for search results */}
            <div className="search-results">
                <h2>Search Results</h2>
                {/* Results will be displayed here */}
            </div>
        </div>
    );
};

export default Home;