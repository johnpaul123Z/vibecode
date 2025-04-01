class SearchController {
    async searchProducts(req, res) {
        const { query } = req;
        try {
            // Call the search service to get products based on the query
            const products = await searchService.search(query);
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: 'Error searching for products', error });
        }
    }

    async compareProducts(req, res) {
        const { productIds } = req.body;
        try {
            // Call the search service to compare products based on their IDs
            const comparisonResults = await searchService.compare(productIds);
            res.status(200).json(comparisonResults);
        } catch (error) {
            res.status(500).json({ message: 'Error comparing products', error });
        }
    }
}

const searchService = require('../services/searchService');

module.exports = new SearchController();