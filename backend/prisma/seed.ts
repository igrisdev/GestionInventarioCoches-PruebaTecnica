import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();

async function main() {
  console.log("Iniciando el poblado de la base de datos (Seeding)...");

  // 1. Crear Marca Toyota y sus coches
  const marca1 = await prisma.marca.upsert({
    where: { id: 1 },
    update: {},
    create: {
      nombre: "Toyota",
      coches: {
        create: [
          {
            modelo: "Corolla",
            año: 2023,
            precio: 25000,
            color: "Blanco",
            numero_puertas: 4,
            tipo_combustible: "Híbrido",
            imagen: "https://ejemplo.com/corolla.jpg",
          },
          {
            modelo: "Hilux",
            año: 2024,
            precio: 45000,
            color: "Gris",
            numero_puertas: 4,
            tipo_combustible: "Diesel",
            imagen: "https://ejemplo.com/hilux.jpg",
          },
        ],
      },
    },
  });

  // 2. Crear Marca Honda y sus coches
  const marca2 = await prisma.marca.upsert({
    where: { id: 2 },
    update: {},
    create: {
      nombre: "Honda",
      coches: {
        create: [
          {
            modelo: "Civic",
            año: 2022,
            precio: 28000,
            color: "Negro",
            numero_puertas: 4,
            tipo_combustible: "Gasolina",
            imagen: "https://ejemplo.com/civic.jpg",
          },
        ],
      },
    },
  });

  console.log("Base de datos poblada exitosamente.");
}

main()
  .catch((e) => {
    console.error("Error al poblar la base de datos:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
