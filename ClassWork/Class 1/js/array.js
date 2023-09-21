const first = [1,2,3];
const second = [6,7,8];

const result = [...first, ...second];
const addedResult = [...first, 'added with', ...second];

console.log(first);
console.log(second);
console.log(result);
console.log(addedResult);

addedResult.map(value=>console.log(value));
first.map(value=>console.log('<li>'+value+'</li>'));
second.map(value=> console.log(`<li>${value}</li>`));

// Array.find .concat .filter