import express from 'express'; //gerenciador de rotas http
import errorHandler from './middlewares/error-handler.middleware';
import authorizationRoute from './routes/authorization.route';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';
import jwtAuthenticationMiddleware from './middlewares/jwt-authentication.middleware';



const app = express();

//configuracoes da aplicacao
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//configurações de rotas
app.use(usersRoute);
app.use(statusRoute);
app.use(authorizationRoute);
app.use(jwtAuthenticationMiddleware);

//Configuração dos Handlers de erro
app.use(errorHandler)

//Inicialização do servidor
app.listen (3000, ()=>{
    console.log("Aplicação executando na porta 3000.");
    
})