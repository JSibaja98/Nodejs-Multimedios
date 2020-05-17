let empleados = [{
    id: 1,
    nombre: 'Jean'
}, {
    id: 2,
    nombre: 'Roger'
}, {
    id: 3,
    nombre: 'Vero'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleado = empleados.find(empleado => empleado.id === id);
        if (!empleado) {
            reject(`No existe un empleado con el ID ${id}`);
        } else {
            resolve(empleado);
        }
    });
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salariobd = salarios.find(salario => salario.id === empleado.id);
        if (!salariobd) {
            reject(`No existe un salario para el empleado ${empleado.nombre}`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salariobd.salario
            });
        }
    });
}

getEmpleado(1).then(empleado => {
    console.log('Empleado de bd', empleado);

    getSalario(empleado).then(resp => {
        console.log(`El empleado ${resp.nombre} tiene un salario de ${resp.salario}$`);
    }, (err) => {
        console.log(err);
    });

}, (err) => {
    console.log(err);
});


// una de las formas mejor de manejar promesas en cadena 

getEmpleado(3).then(empleado => {
    return getSalario(empleado); // Retorna una promesa
}).then(resp => { // este then es de la segunda promesa que fue retornada arirriba
    console.log(`El empleado ${resp.nombre} tiene un salario de ${resp.salario}$`);
}).catch(err => {
    console.log(err); // el err depende de cual promesa sea la del error
});