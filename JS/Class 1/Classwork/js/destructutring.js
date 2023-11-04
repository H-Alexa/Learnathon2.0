const person = {
    name: 'Tatinee',
    profession: 'Student'
};

const cloneA = {...person, location: 'Dhaka'};

// const name = cloneA.name;
// const profession = cloneA.profession;
// const loc = cloneA.location;

// console.log(name);
// console.log(profession);
// console.log(loc);

const {name, profession, location:loc} = cloneA;

const {name:nc} = cloneA;
console.log(nc);
console.log(profession);
console.log(loc);