import { Router,Request,Response } from "express"

const router = Router();

router.get('/', (req: Request, res:Response)=>{
    //pegar os produtos dos banco de dados
    //organizar as informações desses produtos
    //envia para o template engine

    res.render('home'); //renderizar o home.mustache
    });
router.get('/contato', (req: Request, res:Response)=>{
res.send('Formulario de contato')
});

router.get('/sobre', (req: Request, res:Response)=>{
res.send('Pagina institucional sobre a empresa')
});

export default router;