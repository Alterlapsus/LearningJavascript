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
console.log( retornoDeSaludar [0], retornoDeSaludar [1]);
// saludar2( 'Israel' );

// saludarFlecha();
// saludarFlecha2('Israel');

