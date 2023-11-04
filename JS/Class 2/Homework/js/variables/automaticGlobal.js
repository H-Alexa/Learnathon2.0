// console.log(carName); //here carName isn't hoisted yet as the function isn't invoked
myFun();
function myFun()
{
    carName = "Toyota";
    console.log(carName);
}
console.log(carName);