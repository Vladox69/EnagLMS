/*
  Warnings:

  - Added the required column `date` to the `asistance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `asistance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `asistance` ADD COLUMN `date` DATETIME(3) NOT NULL,
    ADD COLUMN `description` VARCHAR(191) NOT NULL;
