// If object has one or more methods, it's said that the object has behaviors. If object has behavior, it's problematic to use object literals every time.

//So we can use factory function instead like this
function createCircle(radius) {
    return {
        // radius: radius,
        radius,
        draw: function (){
            console.log('Drawing using factoryyyyy '+radius);
        }
    }
};

const circle = createCircle(10);
circle.draw();