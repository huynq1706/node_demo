import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv';
const app = express();
import productRoutes from './routes/products.js';

dotenv.config();
 //routes
 app.use('/api', productRoutes);


app.use(morgan('dev'));

const port = process.env.PORT || 8000

app.listen(port, () => { })