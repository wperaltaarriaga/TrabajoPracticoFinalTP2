import express from "express"
import CancionesController from "../controllers/canciones.controller.js"

const CancionesRouter = express.Router()

CancionesRouter.get("/all", CancionesController.getAllSongs)

//CRUD
CancionesRouter
    .get("/song/:id", CancionesController.getById)
    .delete("/:id", CancionesController.deleteById)
    .post("/create", CancionesController.createByJson)
    .patch("/update", CancionesController.updateByJson)

export default CancionesRouter

