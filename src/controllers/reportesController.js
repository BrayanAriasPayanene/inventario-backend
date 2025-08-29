// src/controllers/reportesController.js
import prisma from '../config/prisma.js';

// 1. Ventas Mensuales (temporalmente devuelve datos simulados, porque aún no hay tabla ventas)
export const obtenerVentasMensuales = async (req, res) => {
  try {
    // Consulta ficticia hasta que exista la tabla "ventas"
    const ventas = [
      { mes: 'Enero', total_ventas: 0 },
      { mes: 'Febrero', total_ventas: 0 },
      { mes: 'Marzo', total_ventas: 0 }
    ];
    res.json(ventas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error obteniendo ventas mensuales' });
  }
};

// 2. Stock Bajo
export const obtenerStockBajo = async (req, res) => {
  try {
    const productos = await prisma.producto.findMany({
      where: { cantidad: { lte: 5 } }, // productos con stock igual o menor a 5
      select: { id: true, nombre: true, categoria: true, cantidad: true }
    });

    res.json(productos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error obteniendo productos con stock bajo' });
  }
};

// 3. KPIs (totales principales)
export const obtenerKPIs = async (req, res) => {
  try {
    const totalProductos = await prisma.producto.count();
    const productosBajoStock = await prisma.producto.count({
      where: { cantidad: { lte: 5 } }
    });

    const valorInventario = await prisma.$queryRaw`
      SELECT COALESCE(SUM(precio * cantidad), 0) AS valor_inventario FROM producto
    `;

    res.json({
      totalProductos,
      productosBajoStock,
      valorInventario: valorInventario[0].valor_inventario
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error obteniendo KPIs' });
  }
};
