// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import productoRoutes from './src/routes/productoRoutes.js'; // ✅ Importamos las rutas

dotenv.config();
const app = express();
const prisma = new PrismaClient();

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API funcionando 🚀');
});

// Rutas principales
app.use('/api/productos', productoRoutes); // ✅ Aquí se conectan las rutas CRUD de productos

// Endpoint de prueba
app.post('/api/saludo', (req, res) => {
  res.json({ mensaje: 'Hola Brayan, este es un GET de prueba' });
});

// Puerto
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
