
function x(){
    var a = 20;
    function z()
    {
        function y()
        {
            function l()
            {
                a=9;
            }

            l();
            console.log(a);
        }
        y();
    }
    z();
}

a=100;
x(); //Output 7
