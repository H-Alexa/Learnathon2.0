//Print 1 2 3 4 5 after 1,2,3,4,5 seconds consecutively

//Buggy code
function x()
{
    var i = 1;
        for(i=1;i<6;i++){
            setTimeout(()=>{
                console.log(i);
            },i*1000)
        }
}

x();
//This prints 6 5 times
//The loop iterates and timeout is set as 1,2,3,4,5 seconds. But first console log happens after 1 sec. By then
//