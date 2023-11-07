/*
  Warnings:

  - You are about to drop the column `acticity_id` on the `submission` table. All the data in the column will be lost.
  - Added the required column `title` to the `activity_resource` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `module_resource` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `section_resource` table without a default value. This is not possible if the table is not empty.
  - Added the required column `activity_id` to the `submission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `submission_resource` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `submission` DROP FOREIGN KEY `submission_acticity_id_fkey`;

-- AlterTable
ALTER TABLE `activity_resource` ADD COLUMN `title` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `module_resource` ADD COLUMN `title` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `section_resource` ADD COLUMN `title` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `submission` DROP COLUMN `acticity_id`,
    ADD COLUMN `activity_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `submission_resource` ADD COLUMN `title` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `submission` ADD CONSTRAINT `submission_activity_id_fkey` FOREIGN KEY (`activity_id`) REFERENCES `activity`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
