let a = 20;
{
    // var a = 20; // <- This is illegal shadowing. Throws error
}
var x = 100;
{
    let x = 200; //It will work as let is hoisted in different block
}


let xy = 109;
function smth()
{
    let xy = 105;
    console.log(xy); 
}
smth();
console.log(xy);