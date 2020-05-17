//setTimeout(() => {
//    console.log("Hola mundo");
//}, 3000);


let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Jean',
        id
    }

    if (id === 20) {
        callback(`El usuario con el id ${ id }, no existe en la base de datos`);
    } else {
        callback(null, usuario);
    }

}

getUsuarioById(10, (err, usuario) => {
    if (err) {
        return console.log(err);
    }
    console.log('Usuario de la base de datos ', usuario);
});