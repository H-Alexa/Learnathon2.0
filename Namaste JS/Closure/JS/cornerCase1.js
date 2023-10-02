function x()
{
    a = 30; //-----------2. a = 30;
    function y()
    {
        console.log(a);
        //here a along with it's value 9 is retained as closure and this will be bundled together
        //that's why this function is gonna print 9 despite any further alterations of a
    }
    a=9; //---------------3. a=9
    y();
}
var a=4; //--------------1. a = 4 (global)
x(); //output will be 9 