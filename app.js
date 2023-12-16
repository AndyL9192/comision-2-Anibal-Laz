import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

import { startConnection } from "./src/settings/database.js";

import { config } from "./src/settings/config.js";

import { productRouter } from "./src/routes/product.router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());
app.use(cors);

app.use("/api/products", productRouter);

app.listen(config.PORT, async () => {
  await startConnection();
  console.log(`Server running on http://localhost:${config.PORT}`);
});
