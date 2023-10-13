-- CreateTable
CREATE TABLE `activity_resource` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url_resource` VARCHAR(191) NOT NULL,
    `activity_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `asistance` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` ENUM('PRESENTE', 'ATRASO', 'FALTA') NOT NULL DEFAULT 'PRESENTE',
    `student_id` INTEGER NOT NULL,
    `course_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `activity_resource` ADD CONSTRAINT `activity_resource_activity_id_fkey` FOREIGN KEY (`activity_id`) REFERENCES `activity`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `asistance` ADD CONSTRAINT `asistance_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `student`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `asistance` ADD CONSTRAINT `asistance_course_id_fkey` FOREIGN KEY (`course_id`) REFERENCES `course`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
