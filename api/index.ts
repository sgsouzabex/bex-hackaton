import express from "express";
import { routes } from "./router";
import "dotenv/config"

export const app = express();

// TODO: Configurar cors

const port = process.env.PORT || 8080;
app.use(express.json());

app.listen(port, () => {
  console.log("started at:", port);
});

app.use(routes);

