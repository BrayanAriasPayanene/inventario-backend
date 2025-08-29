    // src/routes/ventasRoutes.js
    import express from 'express';
    import {
    obtenerVentas,
    crearVenta,
    eliminarVenta,
    } from '../controllers/ventaController.js';

    const router = express.Router();

    // Obtener todas las ventas
    router.get('/', obtenerVentas);

    // Crear una venta
    router.post('/', crearVenta);

    // Eliminar una venta
    router.delete('/:id', eliminarVenta);

    export default router;
