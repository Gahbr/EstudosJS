import { Request, Response } from 'express';
import {sequelize} from '../instances/mysql';
import { Product } from '../models/Product';
import { User } from '../models/User';
import {Op} from 'sequelize'
import { resourceLimits } from 'worker_threads';

export const home = async(req: Request, res: Response)=>{


    let adicionar = 10;

    //listar 
    let users = await User.findAll(); 
    //--------------------------
    let age: number = 90;
    let showOld: boolean = false;

    if(age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Parakeet',
        lastName: 'Kun',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: [],
        users,
        adicionar
       
    });
};