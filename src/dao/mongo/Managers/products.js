import productModel from "../models/product.js";

export default class ProductsManager {
    
    getProducts = (params) =>{
        return productModel.find(params).lean();
    }

    getProductById = (params) =>{
        return productModel.findOne(params).lean();
    }

    createProduct = (product) =>{
        return productModel.create(product);
    }

    updateProduct = (id, product) =>{
        return companyModel.findByIdAndUpdate(id, {$set:product});
    }

    deleteProduct = (id) =>{
        return productModel.findOneAndDelete(id);
    }
}