function outerFunc(a)
{
    var outerVar = "Outer "+a;
    console.log(outerVar);

    function innerFunc(b) {
        var innerVar = "Inner "+ a;
        console.log(innerVar + b);
        console.log(outerVar+b);
    }

    innerFunc("in innerFunc");
    console.log(innerVar); //UncaughtError innerVar is not defined
}

outerFunc("variable");