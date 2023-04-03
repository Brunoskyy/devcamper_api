import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import colors from "colors";

import bootcamps from "./routes/bootcamps";
import { connectDB } from "./config/db";

dotenv.config({ path: "./config.env" });

connectDB();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(
    colors.yellow.bold(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
  );
});

process.on("unhandledRejection", (err: Error, promise) => {
  console.log(colors.red(`Error: ${err.message}`));
  // Close server & exit process
  server.close(() => process.exit(1));
});

process.on("uncaughtException", (err: Error, promise) => {
  console.log(colors.red(`Error: ${err.message}`));
  // Close server & exit process
  server.close(() => process.exit(1));
});
