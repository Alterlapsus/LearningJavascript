let a = 5; 




if ( a >= 10 ){ //undefined, null, una asignación
    console.log('A es mayor o igual a 10');
}else{
    console.log('A es menor a 10');
}

// console.log('Fin de programa');

const hoy = new Date();

let dia = hoy.getDay();//0: Domingo, 1: Lunes, 2: Martes... 
console.log({dia});

if ( dia === 0 ){
    console.log('Domingo');
}else if ( dia === 1 ){
    console.log('Lunes');
    
    // if ( dia === 1 ){
    //     console.log('Lunes');
    // }else{
    //     console.log('No es Lunes ni Domingo');
    // }
}else if ( dia === 2 ){
    console.log('Martes');
}else {
    console.log('No es Lunes, Martes o Domingo');
}

//dia = 0  regresa una asignación, no es una condición boleana 
//dia == 0 quiero confirmar si el día es igual al valor 1 pero no me importa el tipo es decir que no importa si es un número un string
//dia === evalua que no solo los valores internos sean los mismos si no que también el tipado de los mismos tiene que ser identico. Compara si realmente es un número con número o string con string 

// Sin usar if else, o swtich, únicamente objetos o arrays para realizar la misma tarea e imprimir en consola el día de la semana

// utilizando un objeto

dia = 5; //0: domingo, 1: Lunes...

const diasLetras = {
   0: 'Domingo',    
   1: 'Lunes',
   2: 'Martes',
   3: 'Miercoles',
   4: 'Jueves',
   5: 'Viernes',
   6: 'Sabado' ,
}

console.log(diasLetras[dia]);


// utilizando un array

const diasLetras2 = ['Domingo','Lunes','Martes','Miercoles','Jueves','Sabado', 'Domingo'];

console.log( diasLetras2[dia]);