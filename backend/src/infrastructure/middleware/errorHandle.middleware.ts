import type { Request, Response, NextFunction } from "express";
import { Prisma } from "../../../generated/prisma/client";

// Middleware para manejar errores
export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Error interno del servidor";

  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    // P2025 = "Record not found" (Al actualizar o eliminar algo que no existe)
    if (err.code === "P2025") {
      statusCode = 404;
      message = "El registro que intentas modificar o eliminar no existe.";
    }
    // P2002 = "Unique constraint failed" (Ej: Si intentas crear dos marcas con el mismo nombre y tu esquema lo prohíbe)
    else if (err.code === "P2002") {
      statusCode = 400;
      message = "Ya existe un registro con esos datos únicos.";
    }
  }

  res.status(statusCode).json({
    success: false,
    message: message,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
};
