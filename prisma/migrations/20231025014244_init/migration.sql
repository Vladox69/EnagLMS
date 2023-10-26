/*
  Warnings:

  - You are about to drop the column `status` on the `asistance` table. All the data in the column will be lost.
  - You are about to drop the column `student_id` on the `asistance` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `asistance` DROP FOREIGN KEY `asistance_student_id_fkey`;

-- AlterTable
ALTER TABLE `asistance` DROP COLUMN `status`,
    DROP COLUMN `student_id`;
