import cartModel from "../models/cart.js";

export default class cartsManager {
    
    getCarts = () =>{
        return cartModel.find({}).lean();
    }

    getCartById = (params) =>{
        return cartModel.findOne(params).lean();
    }

    postCart = (products) =>{
        return cartModel.create({products});
    }

    postCartProduct = (id, product, quantity) =>{
        return cartModel.findByIdAndUpdate(id, {$set:product});
    }

}