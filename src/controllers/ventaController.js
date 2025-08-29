// src/controllers/ventaController.js
import pool from '../db.js'; // tu conexión a la base de datos

// Obtener todas las ventas
export const obtenerVentas = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM "Venta" ORDER BY fecha DESC'); // tabla en mayúscula si la creaste así
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener ventas', error });
  }
};

// Crear una venta
export const crearVenta = async (req, res) => {
  try {
    const { producto_id, cantidad, total } = req.body;

    const result = await pool.query(
      'INSERT INTO "Venta" (producto_id, cantidad, total) VALUES ($1, $2, $3) RETURNING *',
      [producto_id, cantidad, total]
    );

    res.status(201).json(result.rows[0]); // devuelve la venta creada
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al registrar venta', error });
  }
};

// Eliminar una venta
export const eliminarVenta = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM "Venta" WHERE id = $1', [id]);
    res.json({ mensaje: 'Venta eliminada' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al eliminar venta', error });
  }
};

