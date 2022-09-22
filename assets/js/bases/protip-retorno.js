// function crearPersona(nombre, apellido){
//     return{
//         nombre, 
//         apellido
//     }
// }

const crearPersona = (nombre, apellido) =>  ({ nombre, apellido});


const persona = crearPersona('Israel', 'Zacarías')
console.log(persona);

function imprimeArgumentos(){
    console.log( arguments);
}

// despues del parametro rest que pide que se haga un array no puede venir nada más. 
const imprimeArgumentos2 = (edad,...args) => {
    // console.log({edad}, args);
    return args;
}

const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Israel', 'Hola');
console.log({casado, vivo, nombre, saludo});



const {apellido: nuevoApellido} = crearPersona('Israel', 'Zacarías')
console.log(nuevoApellido);



const tony  = {
    nombre: 'Tony Stark',
    codeName: 'IronMan',
    vivo: false, 
    edad: 40, 
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// const imprimePropiedades = ( personaje ) => {
//     console.log('nombre',personaje.nombre);
//     console.log('deName',personaje.codeName);
//     console.log('vivo',personaje.vivo);
//     console.log('edad',personaje.edad);
//     console.log('Trajes',personaje.Trajes);
// }

const imprimePropiedades = ( {nombre, codeName, vivo,edad = 15, trajes} ) => {    
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades(tony);

