const regresaTrue = () => {
    console.log('Regresa true')
    return true; 
}

const regresaFalse = () => {
    console.log('Regresa false')
    return false; 
}

console.warn('Not o la negación00');
console.log( true ); //true
console.log( !true ); //false ! con este signo niego por eso su salida es false 
console.log( !false ); //true

console.log( !regresaFalse() ); //true

console.warn('And'); //true si todos los valores son verdaderos
console.log( true && true); //true
console.log( true && false); //false
console.log( true && !false); //true

console.log('==============');
console.log( regresaFalse() && regresaTrue() ); //false
console.log( regresaTrue() && regresaFalse() ); //false 

console.log('====== && ========');
regresaFalse() && regresaTrue();