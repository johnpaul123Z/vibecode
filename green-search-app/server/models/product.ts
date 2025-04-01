export class Product {
    constructor(
        public name: string,
        public carbonFootprint: number,
        public ethicalSourcing: boolean,
        public price: number,
        public category: string,
        public imageUrl: string
    ) {}
}