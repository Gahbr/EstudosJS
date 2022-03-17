import { Request, Response } from 'express';
import {sequelize} from '../instances/mysql';
import { Product } from '../models/Product';
import { User } from '../models/User';
import {Op} from 'sequelize'

export const home = async(req: Request, res: Response)=>{
/*    
//build + save
const user = User.build({
    name: "Lil'keet",
    
})
// await user.save(); para salvar
  */

/* //create 
const user = await User.create({
    name:'Peckmaster',
    age:99
});
console.log("nome: "+ user.name);
console.log(user.age);

 */

   /* 
   testando conexao com DB
    try {
        await sequelize.authenticate();
        console.log("Conexão estabelecida com sucesso.");
        
    } catch (error) {
        console.log("Deu erro: ", error);
        
    }
 */

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
        frasesDoDia: [],users

        
    });
};