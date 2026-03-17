import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.4",
    info: {
      title: "Gestor Inventario Coches API",
      version: "1.0.0",
      description: "API para el gestor de inventario de coches",
      contact: {
        name: "Johan Alvarez",
      },
      servers: [
        {
          url: "http://localhost:3000",
          description: "Local server",
        },
      ],
    },
  },
  apis: ["./swagger/docs/*.yml"],
};

const specs = swaggerJsdoc(options);
export default specs;
