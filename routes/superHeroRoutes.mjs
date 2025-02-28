import express from "express";
import {
  obtenerSuperheroePorIdContoller,
  obtenerTodosLosSuperheroesController,
  buscarSuperheroesPorAtributoController,
  obtenerSuperheroesMayoresDe30Controller,
} from "../controllers/superheroesController.mjs";

const router = express.Router();

router.get("/heroes", obtenerTodosLosSuperheroesController);
router.get("/heroes/:id", obtenerSuperheroePorIdContoller);
router.get("/heroes/buscar/:atributo/:valor",buscarSuperheroesPorAtributoController);
router.get("/heroes/mayores-30", obtenerSuperheroesMayoresDe30Controller);

export default router;
