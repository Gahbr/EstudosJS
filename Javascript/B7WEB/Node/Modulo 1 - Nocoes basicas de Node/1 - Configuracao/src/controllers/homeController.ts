import { Request,Response } from "express";
import {Product} from '../models/Product';

export const home = (req: Request, res:Response)=>{
    //pegar os produtos dos banco de dados
    //organizar as informações desses produtos
    //envia para o template engine

    let user = {
        name : 'Passarosuke',
        age:9
    };
    let showOld :boolean = false;
    user.age>50 ? showOld=true : showOld=false;

    let list = Product.getAll();
    let expensiveList = Product.getPriceAfter(12);

    res.render('pages/home',{
        user,
        showWelcome: true,
        showOld,
        products: list,
        expensive:expensiveList,
        frasesDoDia: [
            'Kisama ka',
            'Peck peck'
        ]

    }); //renderizar o home.mustache
 };