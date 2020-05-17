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


let getEmpleado = async(id) => {
    let empleado = empleados.find(empleado => empleado.id === id);
    if (!empleado) {
        throw new Error(`No existe un empleado con el ID ${id}`);
    } else {
        return empleado;
    }
}

let getSalario = async(empleado) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
        throw new Error(`No existe un salario para el empleado ${empleado.nombre}`);
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioDB.salario
        };
    }
}


let getInformacion = async(id) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);

    return `${resp.nombre} tiene un salario de ${resp.salario}$`;
}


getInformacion(2)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));