import express from 'express';
import morgan from 'morgan';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';
import { Server } from 'socket.io';

import productsRouter from './routes/products.routes.js';
import cartsRouter from './routes/carts.routes.js';
import viewsRouter from './routes/views.routes.js';

import registerChatHandler from "./listeners/chatHandler.js";
import registerProductsHandler from './listeners/productsHandler.js';
import registerCartsHandler from './listeners/cartsHandler.js';
import __dirname from './utils.js';

const app = express();
const PORT = process.env.PORT || 8080; 
const server = app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
const io = new Server(server);
const connection = mongoose.connect("mongodb+srv://root:root@cluster0.lcae78w.mongodb.net/ecommerce?retryWrites=true&w=majority")

app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(`${__dirname}/public`));
app.use(morgan("dev"));

app.use('/', viewsRouter);
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

io.on('connection', socket=> {
    console.log("Cliente conectado");
    registerChatHandler(io, socket);
    registerProductsHandler(io,socket);
    registerCartsHandler(io,socket);
})





