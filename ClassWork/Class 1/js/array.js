const first = [1,2,3];
const second = [6,7,8];

const result = [...first, ...second];
const addedResult = [...first, 'added with', ...second];

console.log(first);
console.log(second);
console.log(result);
console.log(addedResult);