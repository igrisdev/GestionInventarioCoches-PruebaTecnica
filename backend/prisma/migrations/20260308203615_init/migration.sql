-- DropForeignKey
ALTER TABLE `Coche` DROP FOREIGN KEY `Coche_marcaId_fkey`;

-- DropIndex
DROP INDEX `Coche_marcaId_fkey` ON `Coche`;

-- AlterTable
ALTER TABLE `Coche` MODIFY `marcaId` INTEGER NULL;

-- CreateTable
CREATE TABLE `Prueba` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Coche` ADD CONSTRAINT `Coche_marcaId_fkey` FOREIGN KEY (`marcaId`) REFERENCES `Marca`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
