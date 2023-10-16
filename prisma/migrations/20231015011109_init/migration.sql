/*
  Warnings:

  - You are about to drop the column `resource_id` on the `submission` table. All the data in the column will be lost.
  - You are about to drop the column `activity_id` on the `submission_resource` table. All the data in the column will be lost.
  - Added the required column `submission_id` to the `submission_resource` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `submission_resource` DROP FOREIGN KEY `submission_resource_activity_id_fkey`;

-- AlterTable
ALTER TABLE `submission` DROP COLUMN `resource_id`;

-- AlterTable
ALTER TABLE `submission_resource` DROP COLUMN `activity_id`,
    ADD COLUMN `submission_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `submission_resource` ADD CONSTRAINT `submission_resource_submission_id_fkey` FOREIGN KEY (`submission_id`) REFERENCES `submission`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
