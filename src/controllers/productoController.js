import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Obtener todos los productos
export const obtenerProductos = async (req, res) => {
  try {
    const productos = await prisma.producto.findMany();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener productos" });
  }
};

// Crear un nuevo producto
export const crearProducto = async (req, res) => {
  const { nombre, categoria, precio, cantidad, descripcion } = req.body;
  try {
    const nuevo = await prisma.producto.create({
      data: { 
        nombre, 
        categoria, 
        precio: parseFloat(precio),
        cantidad: cantidad ? parseInt(cantidad) : null,
        descripcion: descripcion || null
      },
    });
    res.json(nuevo);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el producto" });
  }
};

// Actualizar un producto existente
export const actualizarProducto = async (req, res) => {
  const { id } = req.params;
  const { nombre, categoria, precio, cantidad, descripcion } = req.body;
  try {
    const actualizado = await prisma.producto.update({
      where: { id: parseInt(id) },
      data: { 
        nombre, 
        categoria, 
        precio: parseFloat(precio),
        cantidad: cantidad ? parseInt(cantidad) : null,
        descripcion: descripcion || null
      },
    });
    res.json(actualizado);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el producto" });
  }
};

// Eliminar un producto
export const eliminarProducto = async (req, res) => {
  const { id } = req.params;
  try {
    const eliminado = await prisma.producto.delete({
      where: { id: parseInt(id) },
    });
    res.json({ mensaje: "Producto eliminado correctamente", eliminado });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el producto" });
  }
};
