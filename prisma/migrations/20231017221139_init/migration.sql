/*
  Warnings:

  - You are about to drop the column `course_id` on the `asistance` table. All the data in the column will be lost.
  - You are about to drop the column `teacher_id` on the `course` table. All the data in the column will be lost.
  - Added the required column `module_id` to the `asistance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teacher_id` to the `module` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `asistance` DROP FOREIGN KEY `asistance_course_id_fkey`;

-- DropForeignKey
ALTER TABLE `course` DROP FOREIGN KEY `course_teacher_id_fkey`;

-- AlterTable
ALTER TABLE `asistance` DROP COLUMN `course_id`,
    ADD COLUMN `module_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `course` DROP COLUMN `teacher_id`;

-- AlterTable
ALTER TABLE `module` ADD COLUMN `teacher_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `module` ADD CONSTRAINT `module_teacher_id_fkey` FOREIGN KEY (`teacher_id`) REFERENCES `teacher`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `asistance` ADD CONSTRAINT `asistance_module_id_fkey` FOREIGN KEY (`module_id`) REFERENCES `module`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
