function run() {
    const two = 2;
    let count = 0;
    function run2() {}
    console.log(two);
    console.log(count);
    console.log(run2);
}

run();
//These won't run and will throw uncaught referrence error: these are not defined as they are not in this scope
console.log(two);
console.log(count);
console.log(run2);