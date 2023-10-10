-- CreateTable
CREATE TABLE `inscription` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `student_id` INTEGER NOT NULL,
    `course_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `inscription` ADD CONSTRAINT `inscription_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `student`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inscription` ADD CONSTRAINT `inscription_course_id_fkey` FOREIGN KEY (`course_id`) REFERENCES `course`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
