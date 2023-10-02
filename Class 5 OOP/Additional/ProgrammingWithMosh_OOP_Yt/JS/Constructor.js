//Constructor function -> Alternative of Factory function with 3 new thing
//Returns nothing
//Gotta use this and new keyword
//Naming convention: First letter uppercase of that function like class in other languages
//In JS, they don't have classesss??????? dhim dhim tanananaaaa!! OMG!!!!! Classless is it??

function Circle(radius) {
    console.log(this);
    this.radius = radius; //Not in the key value pair convention, rather assignment convention
    this.draw = function() {
        console.log('Drawing with constructors yayyyy '+radius);
    }
};

const circleOne  = new Circle(10); //The new creates an empty object and then makes "this" point to that empty object
//If we don't use new, the this in Circle fuction will point to our global/window object, leading to unexpected error in code

circleOne.draw();