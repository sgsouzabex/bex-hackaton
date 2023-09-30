import express from "express";
import { createDossie } from "./src/controller";

export const routes = express.Router();

// TODO: Adicionar cors

routes.post("/dossie", createDossie);
