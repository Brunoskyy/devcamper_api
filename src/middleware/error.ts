import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Log to console for dev
  console.log(err?.stack?.red);

  res.status(500).json({
    success: false,
    error: err.message,
  });
};
