const person = {
    name: 'Tatinee',
    profession: 'Student'
};

console.log(person);

const clone = {...person};
console.log(clone);

const cloneA = {...person, location: 'Dhaka'};
console.log(cloneA);