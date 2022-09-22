/*
Días de semana abrirmos a las 11, 
pero los fines de semana abrimos a las 9

*/

//Entra a un sitio web, para consultar si está abierto hoy...

const dia = 0; //0: domingo... 1: Lunes...
const horaActual = 8;  

let horaApertura;
let mensaje; // está abierto, está cerrado, hoy abrimos a las xx

// if ( dia === 0 || dia === 6){
// ota forma de realizarlo
// if ( [0,6].includes( dia ) ){ 
//     console.log('Fin de semana');
//     horaApertura = 9;
// }else{
//     console.log('Día de la semana');
//     horaApertura = 11;
// }
horaApertura = ([0,6].includes( dia )) ? 9 : 11;


// if ( horaActual >= horaApertura ){
//     mensaje = 'Está abierto';
// }else{
//     mensaje = `Está cerrado, hoy abrimos a las ${ horaApertura }`;
// }

mensaje = (horaActual >= horaApertura ) ? 'Está abierto' : `Está cerrado, hoy abrimos a las ${ horaApertura }`;

console.log({ horaApertura, mensaje });