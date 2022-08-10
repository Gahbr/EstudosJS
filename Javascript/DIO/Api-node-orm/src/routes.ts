import { Router } from "express";
import { Request, Response } from "express";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();
const createUserController = new CreateUserController();

router.get("/", (request: Request, response: Response) => {
  return response.json({ Mensagem: "Bem vindo a API" });
});

router.post("/usuarios", createUserController.handle );

export {router}