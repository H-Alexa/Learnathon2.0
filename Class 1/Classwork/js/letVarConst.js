// var -> function scope

var a=10;
a=12; //Doesn't work
console.log(a);

//let -> block scope
let b = 12;
b=23;
console.log(b);
 
//const -> Can't be redeclared
const c = 20;
// c=90; //error
console.log(c);