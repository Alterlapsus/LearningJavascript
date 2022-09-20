function saludar(nombre){
    // console.log(arguments);
    // console.log('Hola ' + nombre);
    return [1, 2];

    // esto nunca se va ha ejecutar    
    console.log('Soy un código que esta depués del return');
}


const saludar2 = function( nombre ){
    console.log('Hola ' + nombre);
}

const saludarFlecha = () => {
    console.log('Hola Flecha');
}

const saludarFlecha2 = ( nombre ) => {
    console.log('Hola ' + nombre);
}


const retornoDeSaludar = saludar( 'Israel', 40, true, 'Guatemala' );
// console.log( retornoDeSaludar [0], retornoDeSaludar [1]);
// saludar2( 'Israel' );

// saludarFlecha();
// saludarFlecha2('Israel');

function sumar(a, b){
    return a + b;
}

// transformar a función de Flecha

// const sumar2 = (a,b) => {
//     return a + b;
// }

// podemos resumir la información de la función flecha
// esto solo aplica si tenemos un solo return

const sumar2 = (a,b) =>  a + b;

// function getAleatorio(){
//     return Math.random();
// }

// convertir en una función de flecha, que no tenga llaves {}
// y asignarle el nombre de getAleatorio2
 
const getAleatorio2 = () => Math.random();

console.log(getAleatorio2());