import { Request, Response } from 'express';
import {sequelize} from '../instances/mysql';
import { Product } from '../models/Product';
import { User } from '../models/User';
import {Op} from 'sequelize'
import { userInfo } from 'os';



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


export const novoUsuario = async (req:Request,res:Response) =>{
    let { nome, age } = req.body;

    if (age == "") {
      age = 18;
    }

    const user = await User.create({ name: nome, age: age });
    res.redirect("/");
}

export const aumentarIdade = async (req:Request, res:Response)=>{

    let id:string  = req.params.id
    let results = await User.findAll({ where: { id:id }});

    if(results.length > 0 ){
        let usuario = results[0];
        usuario.age += 1;
        await usuario.save();
    }
   
    
    res.redirect('/')
}

export const excluirUsuario = async (req:Request, res:Response)=>{
   let meuId : string = req.params.id;
   await User.destroy( {where: { id:meuId }})
    res.redirect('/')
}

export const diminuirIdade = async (req:Request, res:Response)=>{
    let meuId: string = req.params.id;
    let results =  await User.findAll( {where: { id: meuId}});

    if (results.length > 0){
        let usuario = results[0];
        usuario.age -= 1;
        await usuario.save();
    }
   
    res.redirect('/')
}