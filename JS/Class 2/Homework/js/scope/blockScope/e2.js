{
    var a=10;
    let b=20;
    const c=30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a); //a can be accessed as a is var and it's not block scoped. It's function scoped.
console.log(b); //let and const can't be accessed for being block scoped and hence will throw error
console.log(c);

