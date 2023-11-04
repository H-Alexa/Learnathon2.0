//Accessible from anywhere
var globalVariable = "I am global";
console.log(globalVariable);

var myFunc = function () {
    console.log(globalVariable);
};

myFunc();

let globalVariableLet = "I am global let";
console.log(globalVariableLet);

var myFunc = function () {
    console.log(globalVariableLet);
};

myFunc();

const globalVariableConst = "I am global Const";
console.log(globalVariableConst);

var myFunc = function () {
    console.log(globalVariableConst);
};

myFunc();
