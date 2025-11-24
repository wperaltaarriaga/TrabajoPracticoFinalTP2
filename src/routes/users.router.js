import express from "express";
import { UsersController } from "../controllers/users.controller.js";
const UsersRouter = express.Router();

UsersRouter.get("/all", UsersController.getAllUsers);

//CRUD
UsersRouter.get("/user/:id", UsersController.getById);
UsersRouter.delete("/delete/:id", UsersController.deleteById);
UsersRouter.post("/create", UsersController.createByJson);
UsersRouter.patch("/update", UsersController.updateByJson);
UsersRouter.patch("/status/:id", UsersController.updateStatus);

export default UsersRouter;
