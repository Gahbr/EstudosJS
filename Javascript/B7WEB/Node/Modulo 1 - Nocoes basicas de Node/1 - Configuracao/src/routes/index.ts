import { Router,Request,Response } from "express"

const router = Router();

router.get('/', (req: Request, res:Response)=>{
    //pegar os produtos dos banco de dados
    //organizar as informações desses produtos
    //envia para o template engine

    let user = {
        name : 'Passarosuke',
        age:9
    };
    let showOld :boolean = false;
    user.age>50 ? showOld=true : showOld=false;

    res.render('pages/home',{
        user,
        showWelcome: true,
        showOld,
        products: [
            {title:'Produto x',price:10},
            {title:'Produto y',price:15},
            {title:'Produto w',price:20}
        ],
        frasesDoDia: [
            'Kisama ka',
            'Peck peck'
        ]

    }); //renderizar o home.mustache
 });

router.get('/contato', (req: Request, res:Response)=>{
res.render('pages/contato');
});

router.get('/sobre', (req: Request, res:Response)=>{
res.render('pages/sobre');
});

export default router;