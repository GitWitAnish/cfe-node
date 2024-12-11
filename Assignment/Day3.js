/* Write a function that accepts array of integers and 
return the sum of all the integers provided in the array using loop.*/



function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
      sum += num;
    }
    return sum;
  }
  
  const numbers = [1, 2, 3];
  console.log(sumArray(numbers));


