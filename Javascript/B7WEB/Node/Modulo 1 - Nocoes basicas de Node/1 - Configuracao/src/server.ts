import express, {Request,Response} from 'express';
import mainRoutes from './routes/index';
import painelRoutes from './routes/painel';

const server = express ();


server.use('/', mainRoutes); //usar as rotas de outro arquivo
server.use('/painel', painelRoutes); // atencao nos prefixos

server.use((req:Request,res : Response)=>{ //erro 404
    res.status(404).send('Página não encontrada');
})


server.listen(80); //abre o server na porta 
















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