//Example of alteration of global variable value

var x = 23;
function myFunc()
{
    x=20;
    console.log(x); //20
}

myFunc();
console.log(x); //20
