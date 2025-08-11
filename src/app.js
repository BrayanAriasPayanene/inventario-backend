// src/app.js
import express from 'express';
import cors from 'cors';
import productoRoutes from './routes/productoRoutes.js';
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/productos', productoRoutes);

app.get('/', (req, res) => {
  res.send('API de Inventario Tecnológico funcionando');
});



export default app;
