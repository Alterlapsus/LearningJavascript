const personaje = {
    nombre: 'Tony Stark',
    codeName: 'IronMan',
    vivo: false, 
    edad: 40, 
    coords: {
        lat: 34.034,
        lng: -118.70

    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
     zip: '10880, 90265',
     ubicacion: 'Malibu, California',   
    },
    'ultima_pelicula': 'Infinity War'
};

console.log(personaje );
console.log('nombre',personaje.nombre );
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad );
console.log('coords',personaje.coords.lat );
console.log('direccion', personaje.direccion.zip );

console.log('No. trajes', personaje.trajes.length);
console.log('Último Traje', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('vivo', personaje[x]);

console.log('ultima pelicula', personaje['ultima_pelicula']);

// mas detalles

delete personaje.edad; 
console.log( personaje);  

personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log( entriesPares);

// personaje = true;
console.log( personaje );  

Object.freeze( personaje );

personaje.dinero = 10000000000000000;
console.log( personaje );
personaje.direccion.ubicacion = 'Guatemala';
console.log( personaje );

const propiedades = Object.getOwnPropertyNames( personaje );
const valores = Object.values( personaje );
console.log( {propiedades, valores} );