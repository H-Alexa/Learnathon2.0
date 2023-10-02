// What if we are told to print 10 as i's value even after altering i's value as 10 from the last example file setTimeout1.js?
function x(){
    {
        let i =10; // 2. i = 10 is assigned. Let uses block scope. As it's in a new block now, it's reference will be stored at some other specific place
    setTimeout(() => {
        console.log("hi "+i); // 3. i's reference is bundled here using closure
    }, 2000); //4. Timer set as 2 secs. After 2 secs, console.log line will be executed
    }
    i = 20;// 5. Meanwhile, i's value is changed. i = 20 now
    console.log("Started"); //6. Started is printed and timer is running
    }
    //7. After 2 seconds have passed, closure comes into play. i's reference were bundled here. 
    //But in this case for using let and a distinct bundle to store i=10, i=10 is retained in closure
    //despite further alterations. That's why now 10 will be printed
    x(); // 1. It invokes the function