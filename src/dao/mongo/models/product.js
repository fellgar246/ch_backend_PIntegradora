import mongoose from 'mongoose';

const collection = "Products";

const schema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
          },
          description: {
            type: String,
            required: true
          },
          code: {
            type: String,
            required: true
          },
          price: {
            type: Number,
            required: true
          },
          status: {
            type: Boolean,
            default: true
          },
          stock: {
            type: Number,
            required: true
          },
          category: {
            type: String,
            required: true
          },
          thumbnail: {
            type: [String],
            default: []
          }
    },
    {timestamps:{createdAt:'created_at',updatedAt:'updated_at'}}
)

const productModel = mongoose.model(collection,schema);

export default productModel;