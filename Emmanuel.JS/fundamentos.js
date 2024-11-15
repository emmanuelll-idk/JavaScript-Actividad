// VARIBLES  Y TIPOS DE DATOS
let nombre = 'Luis Felipe Restrepo'; // Declaración e inicialización
let edad = 27;
let mayorEdad = true;
let estatura;


console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof mayorEdad);
console.log(typeof estatura);


// Tipos de datos complejos

let frutas = ['Pera', 'Melón', 'Manzana', 'Mango', 'Durazno'];

let auto = {
    placa: 'TML29C',
    marca: 'Chevrolet',
    modelo: 2024,
    tipo : 'Camioneta',
    unicoDueno: true,
    kilometraje: 50000
}

//CONCATENANDO VARIABLES

console.log('Bienvenido usuario' + nombre + 'su edad es:' + edad + ', su fruta favorita es ' + frutas[0]);

//ESTRUCTURASDE CNTROL CONDICIONAL

let edad2 = 19;
let genero = 'Masculino';

if(edad2 > 17 && edad2 < 26) {

    if (genero == 'Masculino'){
        console.log('Pal camión mi so!');
    } else {
    console.log('Se salvó de la trasquilada por joven o por remiso');
}
}

let tipoSuscripcion = 'Gold';

switch (tipoSuscripcion) {
    case 'Bronze':
            console.log('Pobre')
        break;
    case 'Silver':
            console.log('Bien, pero puede mejorar');
        break
    case 'Gold':
            console.log('Este es el mejor plan o paquete');
        break
    default:
            console.log('No existe un tipo de suscripción');
        break;
}

// Estructura de control de bucles

let contador = 0;

while(contador < 11){
    console.log('El contador es el número: '+ contador);
    contador = contador + 1;
}

for(let i = 100; i>= 0; i = i - 10){
    console.log('El contador con for es: ' +  i)
}