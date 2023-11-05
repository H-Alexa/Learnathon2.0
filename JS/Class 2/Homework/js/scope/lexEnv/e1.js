function a() {
    console.log(b); //At first js will try to look for b in the local scope
    //It's not here. Then it will look up in global scope and will take b's value and log that here
    var d = 100;
    function c() {
        console.log(b);
        console.log(d); //it tries to find d in local environment.Then if not found goes to the lexical environment of it's parent, and upon finding prints the value
    }
    c();
}

var b = 10;
a();
// console.log(d); //D uncaught error as it's out of it's function scope