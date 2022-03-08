"use strict";
exports.__esModule = true;
var express_1 = require("express");
var index_1 = require("./routes/index");
var painel_1 = require("./routes/painel");
var server = (0, express_1["default"])();
server.use(express_1["default"].static('public')); // torna a pasta publica estatica
server.use('/', index_1["default"]); //usar as rotas de outro arquivo
server.use('/painel', painel_1["default"]); // atencao nos prefixos
server.use(function (req, res) {
    res.status(404).send('Página não encontrada');
});
server.listen(80); //abre o server na porta 
/*
server.get('/', (req:Request, res:Response)=>{
    res.send("Hello world.")
});

//rota dinamica
server.get('/noticia/:slug', (req:Request, res:Response)=>{
    let slug:string =  req.params.slug;

    res.send('noticia: '+slug);

});

server.get('/voo/:origem-:destino', (req:Request, res:Response)=>{
   
    let {origem,destino} = req.params;
    res.send(`Procurando voos de ${origem.toUpperCase()} até ${destino.toUpperCase()}`);
});



 */ 
