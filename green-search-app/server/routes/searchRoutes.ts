import { Router } from 'express';
import SearchController from '../controllers/searchController';

const router = Router();
const searchController = new SearchController();

const setSearchRoutes = (app) => {
    router.get('/search', searchController.searchProducts);
    router.get('/compare', searchController.compareProducts);
    
    app.use('/api', router);
};

export default setSearchRoutes;