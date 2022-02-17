function resumo(usuario) {
    return "Ola ".concat(usuario.nome, ", tudo bem? Voc\u00EA tem ").concat(usuario.idade, " anos");
}
// implementação da função  
var u = {
    nome: 'Passarosuke',
    idade: 90
};
resumo(u);
