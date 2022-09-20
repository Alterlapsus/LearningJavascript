


let a = 10; 
let b = a;

a = 30;

console.log({ a,b });

let israel = {nombre: 'Israel'};
let ana    = israel;
ana.nombre = 'Ana';

console.log({israel, ana});

const cambiaNombre = ( persona )