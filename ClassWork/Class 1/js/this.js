const people = {
    name: 'Tatinee',
    age: '21',
    walk(){
        console.log('Walking',this);
    }
}
people.walk();
console.log(this); //window object

