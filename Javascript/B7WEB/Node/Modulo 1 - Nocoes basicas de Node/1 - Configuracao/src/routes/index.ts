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

router.get ('/nome', (req:Request, res:Response)=>{
    
    console.log(req.query);
    
    let nome: string = req.query.nome as string ; // pegando o nome enviado do form
    let idade : string = req.query.idade as string;
    res.render('pages/nome',{
        nome,
        idade
    });
    
});

router.get('/idade' , (req:Request, res:Response) => {
    res.render('pages/idade');
});

router.post('/idade-resultado', (req:Request, res:Response)=>{
    let mostrarIdade :boolean = false;
    let idade:number = 0;

    if(req.body.ano){
        let anoNascimento : number = parseInt(req.body.ano as string);
        let anoAtual : number  = new Date().getFullYear();
         idade = anoAtual - anoNascimento;
         mostrarIdade = true;
    }
    res.render('pages/idade', {idade,mostrarIdade});
})
export default router;