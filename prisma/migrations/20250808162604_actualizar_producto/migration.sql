/*
  Warnings:

  - You are about to drop the column `stock` on the `Producto` table. All the data in the column will be lost.
  - Added the required column `cantidad` to the `Producto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Producto" DROP COLUMN "stock",
ADD COLUMN     "cantidad" INTEGER NOT NULL;
