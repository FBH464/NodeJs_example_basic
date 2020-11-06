const Operacion = require('./Operaciones.js');
var x1=2;
var x2=6;
console.log("El primer número es: ",x1," y el segundo núnmero es: ",x2)

console.log("La suma es: ",Operacion.add(x1,x2));
console.log("La resta es:",Operacion.substract(x1,x2));
console.log("La multiplicación es:",Operacion.multiply(x1,x2));
console.log("La división es:",Operacion.divide(x1,x2));
