


let a = 10; 
let b = a;

a = 30;

console.log({ a,b });

let israel = {nombre: 'Israel'};
let ana    = { ...israel };
ana.nombre = 'Ana';

console.log({israel, ana});

const cambiaNombre = ( persona ) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter'};
let tony  = cambiaNombre( peter );

console.log({ peter, tony });

//arreglos

const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');



otrasFrutas.push('Mango');

console.table({frutas, otrasFrutas});