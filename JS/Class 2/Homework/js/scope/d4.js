if(true) {
    const foo = "foo";
    console.log(foo); //will print
}

if(true) {
    const bar = "bar";
    console.log(foo,bar); //uncaught referrenceerror: foo outside of it's scope
    if(true) {
        const hello = "hello";
        //console.log(hello,bar); 
        console.log(foo,bar,hello); //uncaught referrenceerror: foo outside of it's scope
    }
    console.log(foo,bar,hello); //uncaught referrenceerror: foo and hello outside of it's scope

}

