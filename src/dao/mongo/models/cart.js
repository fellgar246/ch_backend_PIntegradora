import mongoose from 'mongoose';

const collection = "Carts";

const subSchema = new mongoose.Schema({
    product: {
        type: Number,
    },
    quantity: {
        type: Number,
    }
  });

const schema = new mongoose.Schema(
    {
        products: [subSchema]
    }
)

const cartModel = mongoose.model(collection,schema);

export default cartModel;