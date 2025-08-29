// src/routes/reportesRoutes.js
import express from 'express';

const router = express.Router();

// Endpoint de prueba simple
router.get('/test', (req, res) => {
  res.json({ mensaje: '✅ Endpoint de prueba funcionando' });
});

// Mantengo tus endpoints originales, pero temporalmente devuelven un mensaje simple
router.get('/ventas-mensuales', (req, res) => {
  res.json({ mensaje: 'Ventas mensuales - endpoint activo' });
});

router.get('/stock-bajo', (req, res) => {
  res.json({ mensaje: 'Stock bajo - endpoint activo' });
});

router.get('/kpis', (req, res) => {
  res.json({ mensaje: 'KPIs - endpoint activo' });
});

export default router;
