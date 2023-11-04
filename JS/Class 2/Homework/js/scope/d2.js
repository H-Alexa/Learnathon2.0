function myFunc() {
    const y = 10;
    y=20; //redeclaring not allowed in const, so it will get uncaught Typeerror: invalid assignment to const 'y'
    //After this error next lines aren't executed, so console log prints nothing
    console.log("check");
    console.log(y);

}

myFunc();
console.log("smth");
console.log(y);
