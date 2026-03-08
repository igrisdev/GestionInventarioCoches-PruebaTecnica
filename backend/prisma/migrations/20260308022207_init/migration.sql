-- CreateTable
CREATE TABLE `Coche` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `modelo` VARCHAR(191) NOT NULL,
    `año` INTEGER NOT NULL,
    `precio` INTEGER NOT NULL,
    `color` VARCHAR(191) NOT NULL,
    `numero_puertas` INTEGER NOT NULL,
    `tipo_combustible` VARCHAR(191) NOT NULL,
    `imagen` VARCHAR(191) NOT NULL,
    `marcaId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Marca` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Coche` ADD CONSTRAINT `Coche_marcaId_fkey` FOREIGN KEY (`marcaId`) REFERENCES `Marca`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
