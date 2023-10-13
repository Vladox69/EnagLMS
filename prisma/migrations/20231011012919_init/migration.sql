-- CreateTable
CREATE TABLE `module_resource` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url_resource` VARCHAR(191) NOT NULL,
    `module_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `section_resource` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url_resource` VARCHAR(191) NOT NULL,
    `section_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `module_resource` ADD CONSTRAINT `module_resource_module_id_fkey` FOREIGN KEY (`module_id`) REFERENCES `module`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `section_resource` ADD CONSTRAINT `section_resource_section_id_fkey` FOREIGN KEY (`section_id`) REFERENCES `section`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
