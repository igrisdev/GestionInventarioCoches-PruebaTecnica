import { prisma } from "../src/infrastructure/database/prisma.client";

async function main() {
  // 1. Crear o actualizar un Usuario
  const usuario = await prisma.usuario.upsert({
    where: { correo: "admin@admin.com" },
    update: {},
    create: {
      correo: "admin@admin.com",
      contraseña: "password123",
    },
  });

  // 2. Buscar o crear una Marca junto con sus Coches anidados
  let marca = await prisma.marca.findFirst({
    where: { nombre: "Toyota" },
  });

  if (!marca) {
    marca = await prisma.marca.create({
      data: {
        nombre: "Toyota",
        coches: {
          create: [
            {
              modelo: "Corolla",
              año: 2024,
              precio: 25000,
              color: "Blanco",
              numero_puertas: 4,
              tipo_combustible: "Gasolina",
              imagen: "https://ejemplo.com/corolla.jpg",
            },
            {
              modelo: "Yaris",
              año: 2023,
              precio: 20000,
              color: "Rojo",
              numero_puertas: 5,
              tipo_combustible: "Híbrido",
              imagen: "https://ejemplo.com/yaris.jpg",
            },
          ],
        },
      },
    });
  }

  console.log("Datos creados exitosamente:");
  console.log({ usuario, marca });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
