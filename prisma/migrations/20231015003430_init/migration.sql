/*
  Warnings:

  - You are about to drop the column `files` on the `submission` table. All the data in the column will be lost.
  - Added the required column `resource_id` to the `submission` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `submission` DROP COLUMN `files`,
    ADD COLUMN `resource_id` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `submission_resource` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url_resource` VARCHAR(191) NOT NULL,
    `activity_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `submission_resource` ADD CONSTRAINT `submission_resource_activity_id_fkey` FOREIGN KEY (`activity_id`) REFERENCES `submission`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
