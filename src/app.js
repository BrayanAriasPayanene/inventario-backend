// src/app.js
import express from 'express';
import cors from 'cors';
import productoRoutes from './routes/productoRoutes.js';
import reportesRoutes from './routes/reportesRoutes.js'; // <-- Nuevo
import ventasRoutes from './routes/ventasRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

// Rutas principales
app.use('/api/productos', productoRoutes);
app.use('/api/reportes', reportesRoutes); // <-- Nuevo
app.use('/api/ventas', ventasRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API de Inventario Tecnológico funcionando');
});

export default app;
