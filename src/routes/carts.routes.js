import { Router } from 'express';
import cartsManager from '../dao/mongo/Managers/carts.js';

const cartsRouter = Router();

const cartService = new cartsManager();

cartsRouter.post("/", async(req, res) => {
    const { products } = req.body;
    const result = await cartService.postCart(products);
    res.sendStatus(201);
})

cartsRouter.get("/:cid", async(req, res) => {
    const {cid} = req.params;  
    const cart = await cartService.getCartById({_id: cid});
    if(!cart) return res.status(404).send({ status: 'error', error: 'Company not found' });
    res.send({ status: 'success', payload: cart });
})

cartsRouter.post("/:cid/product/:pid", async(req,res) => {
    const {cid, pid} = req.params;
    const { quantity } = req.body
    
    const result = await cartService.postCartProduct(cid, pid, quantity);
    res.sendStatus(201);
})

export default cartsRouter;