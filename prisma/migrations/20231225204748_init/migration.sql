/*
  Warnings:

  - Added the required column `modality` to the `course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `objective` to the `course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `periods` to the `course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `qualification` to the `course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `requirements` to the `course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `visible` to the `course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hours` to the `module` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `course` ADD COLUMN `modality` VARCHAR(191) NOT NULL,
    ADD COLUMN `objective` VARCHAR(191) NOT NULL,
    ADD COLUMN `periods` INTEGER NOT NULL,
    ADD COLUMN `qualification` VARCHAR(191) NOT NULL,
    ADD COLUMN `requirements` VARCHAR(191) NOT NULL,
    ADD COLUMN `type` VARCHAR(191) NOT NULL,
    ADD COLUMN `visible` BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE `module` ADD COLUMN `hours` INTEGER NOT NULL;
