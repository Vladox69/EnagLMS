/*
  Warnings:

  - Added the required column `state_gra` to the `submission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state_sub` to the `submission` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `submission` ADD COLUMN `state_gra` VARCHAR(191) NOT NULL,
    ADD COLUMN `state_sub` VARCHAR(191) NOT NULL;
