


const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0; 

// while( i < carros.length ){
//     console.log( carros[i] );
//     // i = i + 1;   
//     i++;   
// }

console.warn('While');


// condiciones falsas son 

// undefined
// null
// false

// en el ciclo while tiene que ser siempre la condición verdadera

while( carros[i] ){
    if ( i === 1 ){
        // break;
        i++;
        continue;
    }
    console.log( carros[i] );
    // i = i + 1;   
    i++;   
}

console.warn('Do While');
let j = 0;
do {
    console.log( carros[j]);
    
}while();