class SearchService {
    private products: Product[];

    constructor(products: Product[]) {
        this.products = products;
    }

    public search(query: string): Product[] {
        return this.products.filter(product => 
            product.name.toLowerCase().includes(query.toLowerCase())
        );
    }

    public compare(criteria: string): Product[] {
        return this.products.sort((a, b) => {
            if (criteria === 'carbonFootprint') {
                return a.carbonFootprint - b.carbonFootprint;
            } else if (criteria === 'ethicalSourcing') {
                return (a.ethicalSourcing === b.ethicalSourcing) ? 0 : a.ethicalSourcing ? -1 : 1;
            }
            return 0;
        });
    }

    public filterBySourcing(isEthical: boolean): Product[] {
        return this.products.filter(product => product.ethicalSourcing === isEthical);
    }
}

export default SearchService;