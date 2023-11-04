//Factory function

function createCircle(radius) {
    return {
        radius,
        draw: function (){
            console.log('Drawing using factoryyyyy '+radius);
        }
    }
};

const factoryFun = createCircle(10);

//Constructor

function Circle(radius) {
    console.log(this);
    this.radius = radius; 
    this.draw = function() {
        console.log('Drawing with constructors yayyyy '+radius);
    }
};

const constructorFun  = new Circle(10); 

let obj = {};
const string = " ";
const booli = true;