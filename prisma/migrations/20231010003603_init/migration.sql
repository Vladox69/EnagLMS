/*
  Warnings:

  - Added the required column `end_at` to the `course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start_at` to the `course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `course` ADD COLUMN `end_at` DATETIME(3) NOT NULL,
    ADD COLUMN `start_at` DATETIME(3) NOT NULL;
