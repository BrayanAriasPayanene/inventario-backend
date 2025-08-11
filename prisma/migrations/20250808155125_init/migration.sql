-- CreateTable
CREATE TABLE "public"."Producto" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "descripcion" TEXT,
    "stock" INTEGER NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Producto_pkey" PRIMARY KEY ("id")
);
