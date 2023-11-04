var a = 10;
function check() {
    console.log(a); //10
    console.log(y); //undefined
    console.log(a+y); //NaN
}
check();
var y = 5;