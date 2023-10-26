-- CreateTable
CREATE TABLE `asistance_register` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` ENUM('PRESENTE', 'ATRASO', 'FALTA') NOT NULL DEFAULT 'PRESENTE',
    `student_id` INTEGER NOT NULL,
    `asistance_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `asistance_register` ADD CONSTRAINT `asistance_register_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `student`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `asistance_register` ADD CONSTRAINT `asistance_register_asistance_id_fkey` FOREIGN KEY (`asistance_id`) REFERENCES `asistance`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
