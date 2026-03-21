import app from "./app.ts";
import { prisma } from "./infrastructure/database/prisma.client.ts";

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`http://localhost:${port}/api`);
});

// Ctrl+C en la terminal (SIGINT)
process.on("SIGINT", async () => {
  console.log("🛑 Apagando el servidor...");
  await prisma.$disconnect();
  console.log("🔌 Prisma desconectado correctamente.");
  process.exit(0);
});

// Docker apaga el contenedor (SIGTERM)
process.on("SIGTERM", async () => {
  console.log("🛑 Apagando el servidor...");
  await prisma.$disconnect();
  console.log("🔌 Prisma desconectado correctamente.");
  process.exit(0);
});
