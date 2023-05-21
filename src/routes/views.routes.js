import { Router } from 'express';
import ProductsManager from '../dao/mongo/Managers/products.js';

const viewsRouter = Router();

const productService = new ProductsManager();

viewsRouter.get('/', async (req, res) => {
    res.render('home', {
        products: await  productService.getProducts()
    })
});
viewsRouter.get('/realtimeproducts', (req, res) => {
    res.render('realTimeProducts')
});

viewsRouter.get('/chat',async(req,res)=>{
    res.render('chat');
})


export default viewsRouter;