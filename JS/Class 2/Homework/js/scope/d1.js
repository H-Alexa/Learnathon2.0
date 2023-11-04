//Q: why is x's value unchanged here
var x = 10;
function myFunc()
{
    var x=20; //different functional scope
    console.log(x);
}
myFunc();
console.log(x);