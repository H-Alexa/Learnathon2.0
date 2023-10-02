function x(){
    var a =10;
    function y(){
        let b= 20;
        function z()
        {
            console.log(a,b);
        }
        z();
    }
    y();
}
x();