import { prisma } from "../../infrastructure/database/prisma.client.ts";

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });

export const createCar = async () => {
  try {
    const car = await prisma.coche.create({
      data: {
        modelo: "Tesla Model 3",
        año: 2023,
        precio: 10000,
        color: "rojo",
        numero_puertas: 4,
        tipo_combustible: "eléctrico",
        imagen:
          "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
      },
    });

    const findCar = await prisma.coche.findMany();

    return "ok";
  } catch (error) {
    console.error("Error in createCar:", error);
  }
};
