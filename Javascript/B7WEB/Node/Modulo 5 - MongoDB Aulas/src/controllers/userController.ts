import { Request, Response } from 'express';
import internal from 'stream';
import User from '../models/User';

export const nome = (req: Request, res: Response) => {
    let nome: string = req.query.nome as string;
    let idade: string = req.query.idade as string;

    res.render('pages/nome', {
        nome,
        idade
    });
};

export const idadeForm = (req: Request, res: Response) => {
    res.render('pages/idade');
};

export const idadeAction = (req: Request, res: Response) => {
    let mostrarIdade: boolean = false;
    let idade: number = 0;

    if(req.body.ano) {
        let anoNascimento: number = parseInt(req.body.ano as string);
        let anoAtual: number = new Date().getFullYear();
        idade = anoAtual - anoNascimento;
        mostrarIdade = true;
    }

    res.render('pages/idade', {
        idade,
        mostrarIdade
    });
};

export const addUserAction = async (req:Request, res:Response) => {
    let newUser = new User();
    
    let primeiroNome = req.body.firstName as string;
    let sobrenome = req.body.lastName as string;
    let idade = parseInt(req.body.age); 
    let eMail = req.body.email;
    let interesses = (req.body.interests).split(',');
   
    newUser.name = {firstName: primeiroNome, lastName: sobrenome};
    newUser.age = idade;
    newUser.interests = interesses;
    newUser.email = eMail;


    try {
        await newUser.save();
        console.log("Usuário criado com sucesso");
        
    } catch (error) {
        console.log("Houve um erro ao criar usuário!", error);
        
    }
  res.redirect('/');
}

export const addAge = async (req:Request, res:Response) =>{
    let idUser = req.params.id;
    let boneco = await User.findById(idUser);
    try {
        if(boneco){
            boneco.age++;
            boneco.save();
        }

    } catch (error) {
        console.log("nao foi possivel add idade");
        
    }
    res.redirect('/');
}
