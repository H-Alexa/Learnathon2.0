//Functional and block scope

function scope()
{
    if(true)
    {
        var a= "functional scope";
        let b= "block scope";
    }
    console.log(a); //prints a
    console.log(b); //uncaught error
}
scope();