import "reflect-metadata"

import express from "express";
import { router } from "./routes";

// Swagger
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json";

// Importing database
import "./database"

import "./shared/container"

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

// Start the server
app.listen(3333, () => console.log("Server is running"));