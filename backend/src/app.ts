import express from "express";
import helmet from "helmet";
import cors from "cors";
import { errorHandler } from "./infrastructure/middleware/errorHandle.middleware";
import { routerCar } from "./infrastructure/router/car.router";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

// Rutas
app.use("/api/car", routerCar);
// app.use("/api/brand", brandRouter);

// middleware para manejar errores de toda la aplicación
app.use(errorHandler);

export default app;
