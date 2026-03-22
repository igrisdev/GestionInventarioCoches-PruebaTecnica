import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Iniciando el poblado de la base de datos (Seeding)...");

  // 1. Upsert de Usuario (Buscamos por correo porque tiene @unique)
  const admin = await prisma.usuario.upsert({
    where: { correo: "admin@ejemplo.com" },
    update: {},
    create: {
      correo: "admin@ejemplo.com",
      contraseña: "password123", // Nota: En producción, esto debería estar hasheado con bcrypt
    },
  });

  // 2. Upsert de Marca "Toyota" con sus Coches anidados
  // Como Marca no tiene @unique en nombre, usamos el id para el upsert
  const toyota = await prisma.marca.upsert({
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

  // 3. Upsert de Marca "Honda" con su Coche anidado
  const honda = await prisma.marca.upsert({
    where: { id: 2 },
    update: {},
    create: {
      nombre: "Honda",
      coches: {
        create: {
          modelo: "Civic",
          año: 2022,
          precio: 28000,
          color: "Negro",
          numero_puertas: 4,
          tipo_combustible: "Gasolina",
          imagen: "https://ejemplo.com/civic.jpg",
        },
      },
    },
  });

  console.log("✅ Datos creados exitosamente:");
  console.log({ admin, toyota, honda });
}

main()
  .then(async () => {
    // Desconexión limpia al terminar el script
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    // Si algo falla, mostramos el error y forzamos la salida y desconexión
    console.error("❌ Error al poblar la base de datos:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
