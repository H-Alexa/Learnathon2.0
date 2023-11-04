// console.log(carName); //here carName isn't hoisted yet though being a global variable as the function isn't invoked yet
myFun();
function myFun()
{
    carName = "Toyota"; //carName isn't declared, that's why it goes to global scope and is accessible from anywhere like any other global variables. No function scope is applied in this
    console.log(carName);
}
console.log(carName);

function anotherFunc()
{
    var carAnother = "Volvo";
    console.log(carAnother);
}
anotherFunc();
console.log(carAnother); //This will show uncaught refError because here var was in function scope and it's not accessible from outside