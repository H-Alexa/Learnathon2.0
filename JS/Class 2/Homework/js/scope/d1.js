//Q: why is x's value unchanged here
var x = 10;
function myFunc()
{
    var x=20; //different functional scope 
    console.log(x); //shadowing comes into play
}
myFunc();
console.log(x); //shadowing