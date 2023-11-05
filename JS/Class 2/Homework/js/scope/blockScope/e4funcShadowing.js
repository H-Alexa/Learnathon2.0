const c = 100;
function x() {
    const c = 10;
    console.log(c + " c");
}
x();
console.log(c + " c out");
var a = 20;

function y()
{
    var a = 200;
    console.log(a); 
}
console.log(a +" out before");
y();
console.log(a+" out after");
