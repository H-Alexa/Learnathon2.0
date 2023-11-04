function x()
{
    var a = 20;
    return function y()
    {
        console.log(a);
    }
}
var b = x();
a=1000;
console.log(b());