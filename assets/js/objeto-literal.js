let personaje = {
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
    }
};

console.log(personaje );
console.log('nombre',personaje.nombre );
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad );
console.log('coords',personaje.coords.lat );
console.log('direccion', personaje.direccion );