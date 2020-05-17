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



let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id)

    if (!empleadoDB) {
        callback(`No existe un empleado con el id ${id} en la base de datos`);
    } else {
        callback(null, empleadoDB);
    }

}

let getSalario = (empleado, callback) => {
    let empSal = salarios.find(salario => salario.id === empleado.id)

    if (!empSal) {
        callback(`No existe un salario para el empleado ${empleado.nombre}`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: empSal.salario
        });
    }
}


getEmpleado(2, (err, empleado) => {

    if (err) {
        return console.log(err);
    };
    console.log('Empleado', empleado);

    getSalario(empleado, (err, resp) => {
        if (err) {
            return console.log(err);
        };
        console.log(`El empleado ${resp.nombre} es de ${resp.salario}$`);
    });

});