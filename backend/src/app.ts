import express from "express";
import helmet from "helmet";
import cors from "cors";
import swaggerIU from "swagger-ui-express";

import { errorHandler } from "./infrastructure/middleware/errorHandle.middleware";
import { routerCar } from "./infrastructure/router/car.router";
import specs from "../swagger/swagger";
import { routerBrand } from "./infrastructure/router/brand.router";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

// Ruta documentación de la API
app.use("/api-docs", swaggerIU.serve, swaggerIU.setup(specs));

// Ruta de CRUD de carros, marcas
app.use("/api/car", routerCar);
app.use("/api/brand", routerBrand);

// middleware para manejar errores de toda la aplicación
app.use(errorHandler);

export default app;
