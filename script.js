// script.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    // Aquí hacemos una consulta simple a la tabla "producto"
    const productos = await prisma.producto.findMany();
    console.log('✅ Productos en la base de datos:', productos);
  } catch (error) {
    console.error('❌ Error al conectar o consultar:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
