function x(){
    var i =10; // 2. i = 10 is assigned
    setTimeout(() => {
        console.log("hi "+i); // 3. i's reference is bundled here using closure
    }, 2000); //4. Timer set as 2 secs. After 2 secs, console.log line will be executed
    i = 20;// 5. Meanwhile, i's value is changed. i = 20 now
    console.log("Started"); //6. Started is printed and timer is running

    //7. After 2 seconds have passed, closure comes into play. i's reference were bundled here which is 
    //altered afterwards as  20. So now it will print hi 20
}

x(); // 1. It invokes the function


