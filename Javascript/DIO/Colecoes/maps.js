function getAdmins(map) {
    let admins = [];
    for ([key,value] of map) {
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();
usuarios.set('parakeet','Admin');
usuarios.set('passarosuke','Admin');
usuarios.set('birbovski','User');


console.log(getAdmins(usuarios));