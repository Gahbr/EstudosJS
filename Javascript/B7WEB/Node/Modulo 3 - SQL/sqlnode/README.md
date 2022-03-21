Arquivos do módulo inicial de Node + Typescript, da estrutura MVC aplicada.

### Pré-requisitos globais:
`npm i -g nodemon typescript ts-node`

### Instalação
`npm install`

### Para rodar o projeto
`npm run start-dev`

----------------------

## <B> <i> NOTAS CRUD </i></B>

    
## <B>BUILD + SAVE</B>
~~~
const user = User.build({
    name: "Lil'keet",
    
})
 await user.save(); para salvar
~~~
<hr>

 ## <B>CREATE</B> 
 ~~~
const user = await User.create({
    name:'Peckmaster',
    age:99
});

console.log("nome: "+ user.name);
console.log(user.age);
~~~
<hr>

## <B>TESTANDO CONEXÃO COM DB</B>
~~~
try {
    await sequelize.authenticate();
    console.log("Conexão estabelecida com sucesso.");
    
} catch (error) {
    console.log("Deu erro: ", error);
    
}
~~~
<hr>

## <B>UPDATE</B>
~~~
await User.update( { name:"Sr. passaro" },{ 
    where: {
        id:16
    }})
 ~~~       
    
### update forma 2
    let results = await User.findAll({ where:{  id:7 }})
        
    if(results.length > 0 ){
        let usuario = results[0];
        usuario.age = 18;
        usuario.name = 'Peckmaster alterado';
        await usuario.save();
    } 
    
    
<hr>

## <B>DELETE</B>
~~~
  await User.destroy({ where : { age: { [Op.lte]: 18}}})
~~~
### forma 2 (recomendada)
    let results = await User.findAll({where: {name: 'Seedmaster'}});
    if(results.length > 0 ){
        let usuario = results[0]
        usuario.destroy()
    }

 