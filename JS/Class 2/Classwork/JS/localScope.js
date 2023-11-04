//Accessible only inside it's scope (Block (let) or Function (var)) 
//initialised or declared inside of functions
var globalVariable = "I am global";
var checkV = "Global";
var myFunc = function () {
    var checkV = "Local";
    var localVar = "I am local";
    console.log(globalVariable);
    console.log(localVar);
    console.log(checkV + " checkV inside function");
}

myFunc();
console.log(globalVariable);
console.log(localVar); //Error