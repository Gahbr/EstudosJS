import  express, {Request, Response}  from "express";
import { router } from './routes';

const server = express();
server.use(express.json()) // para receber jsons na aplicação
server.use(router)

server.listen(5000, ()=>{ console.log("Servidor ON => http://localhost:5000/")})
