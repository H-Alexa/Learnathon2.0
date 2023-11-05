var a = 100;
{
    var a=10; //a is shadowed and will modify the previous a value too as they both point to the same memory location
    let b=20;
    const c=30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);

let b = 50;
{
    let b=500;
    console.log(b); //500 for shadowing
}
console.log(b); //50 for being block scoped

const c = 100;
{
    const c = 10;
    console.log(c + " c");
}
console.log(c + " c out");