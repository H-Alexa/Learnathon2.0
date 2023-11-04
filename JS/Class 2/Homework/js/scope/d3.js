let str1 = "Hello";
function greet() {
    let str2 = "World";
    console.log(str1 + ' ' + str2); //can access str1 due to lexical scoping
    if(str2 == "World")
    {
        let str3 = "Hello";
        console.log(str1 + " " + str2 + " "+str3); //Can access str2 and str1 due to lexical scoping
    }
    console.log(str1 + " " + str2 + " "+str3); //Uncaught ReferreceError: str3 not defined
    //out of it's block scope
}
greet();