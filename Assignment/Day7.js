// Write a function arrayToObject that takes an array of numbers as an argument 
// and returns an object where each key is the value of an array element, 
// and the corresponding value is the same as the key.





function arrayToObject(arr) {
    return Object.fromEntries(arr.map(num => [num, num]));
}


const numbers = [1, 2, 3, 4, 5];
const obj = arrayToObject(numbers);
console.log(obj);
