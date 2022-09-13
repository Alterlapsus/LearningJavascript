let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo;', juegos.length );

let primero = juegos[2 - 2];
let ultimo = juegos[ juegos.length - 1];

console.log( primero, ultimo);

juegos.forEach( (elemento, indice, arr) => {
      console.log({elemento, indice, arr });
});

// agrega array al final
let nuevaLongitud = juegos.push( 'F-Zero');
console.log({nuevaLongitud, juegos});

// agrega array al principio
nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({nuevaLongitud, juegos});

// Eliminar un array
let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos});

//eliminar array no importando su posición
let pos = 1; 

console.log( juegos);
let juegosBorrados = juegos.splice( pos, 2);
console.log({ juegosBorrados, juegos});

// con indexOf si sale -1 es porque no encontro el array, si sale 1 es porque encontró el array
let metroidIndex = juegos.indexOf('Metroid');
console.log({ metroidIndex});


