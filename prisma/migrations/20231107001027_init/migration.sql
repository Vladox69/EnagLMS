/*
  Warnings:

  - Added the required column `last_names` to the `student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `names` to the `student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_names` to the `teacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `names` to the `teacher` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `student` ADD COLUMN `last_names` VARCHAR(191) NOT NULL,
    ADD COLUMN `names` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `teacher` ADD COLUMN `last_names` VARCHAR(191) NOT NULL,
    ADD COLUMN `names` VARCHAR(191) NOT NULL;
