import { Request, Response } from 'express';
import User from '../models/User';
import { Product } from '../models/Product';

export const home = async (req: Request, res: Response)=>{
  
  /*
    let usuarios = await User.find({
      age : {$gt:18}
    }).skip(1).limit(2);
    console.log("Usuários",usuarios);
    */

    // Primeiro metodo de criar usuário
    /*
    let newUser = await User.create({
        name: {firstName: 'Birbowski', lastName:'Kun'},
        email:'birb@birb.com',
        age:5,
        interests:['seeds','pecking']
    });
*/
    // Segundo metodo de criar usuário
/*
    let newUser = new User();
    newUser.name = {firstName: 'Nameless', lastName:'Birb'};
    newUser.age = 6;
    newUser.email = 'birb@birb.com';
    newUser.interests = ['singing'];

    let resultado = await newUser.save();
    console.log("NOVO USUARIO" + resultado);
    */

    let updateUser =  await User.updateOne({email:'ajisodfjasio'},{email:'jinping@zhonguo.com'})
    let users = await User.find({}).sort({"name.firstName":1});

    res.render('pages/home', {
        users
    });
};