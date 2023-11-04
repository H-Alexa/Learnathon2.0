function a() {
    console.log(b); //At first js will try to look for b in the local scope
    //It's not here.  
    function c() {
        console.log(b);
    }
}

var b = 10;
a();