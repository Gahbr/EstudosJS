import express, {Request,Response} from 'express';
import mainRoutes from './routes/index';
import painelRoutes from './routes/painel';
import path from 'path';
import mustache from 'mustache-express';
import dotenv from 'dotenv';

dotenv.config(); // configurando as variacoes de ambiente .env

const server = express ();

// console.log(path.join(__dirname,'../public'));

//configurando o template engine
server.set('view engine', 'mustache');
server.set('views',path.join(__dirname,'views'));
server.engine('mustache', mustache());


server.use('/static',express.static(path.join(__dirname,'../public'))); // torna a pasta publica estatica e acessivel
server.use(express.urlencoded({extended:true}));  //habilitando para manipular dados via POST dentro da rota 
server.use('/', mainRoutes); //usar as rotas de outro arquivo
server.use('/painel', painelRoutes); // atencao nos prefixos

server.use((req:Request,res : Response)=>{ //erro 404
    res.status(404).send('Página não encontrada');
})


server.listen(process.env.PORT); //abre o server na porta de acordo com o .env
















/* 
server.get('/', (req:Request, res:Response)=>{
    res.send("Hello world.")
});

//rota dinamica
server.get('/noticia/:slug', (req:Request, res:Response)=>{
    let slug:string =  req.params.slug;

    res.send('noticia: '+slug);

});

server.get('/voo/:origem-:destino', (req:Request, res:Response)=>{
   
    let {origem,destino} = req.params;
    res.send(`Procurando voos de ${origem.toUpperCase()} até ${destino.toUpperCase()}`);
});



 */