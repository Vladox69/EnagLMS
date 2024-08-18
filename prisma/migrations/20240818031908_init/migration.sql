/*
  Warnings:

  - Added the required column `date` to the `activity_intern` table without a default value. This is not possible if the table is not empty.
  - Added the required column `planif` to the `module` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "activity_intern" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "module" ADD COLUMN     "planif" TEXT NOT NULL;
