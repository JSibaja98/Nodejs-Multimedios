function sumar(a, b) {
    return a + b;
}

let sumarFlecha1 = (a, b) => a + b;

let sumarFlecha2 = (a, b) => {
    return a + b;
}

let saludar = () => 'Hola mundo';

let saludar2 = (nombre) => `Hola ${nombre}`;

console.log(sumar(10, 20));
console.log(sumarFlecha1(10, 20));
console.log(sumarFlecha2(10, 20));

console.log(saludar());
console.log(saludar2('Jean'));


let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre() {
        return `${this.nombre} ${this.apellido} tiene el poder de ${this.poder}`
    }
};

console.log(deadpool.getNombre());