// Exercise 1: 
// Write a function named destructureExample that takes in an object and an array as parameters. The function should use destructuring to extract the values 'name' and 'age' from the object and the values at index 0 and index 2 from the array. The function should then return an object with the extracted values as properties with name and age.

// Example:

// Input:
// const obj = { name: 'John', age: 30, city: 'New York' };
// const arr = [10, 20, 30, 40];
// Output:
// { name: 'John', age: 30 }

function destructureExample(obj, arr) {
    const { name, age } = obj;
    const [val1, , val2] = arr;
    return { name, age };
  }
  const obj = { name: 'John', age: 30, city: 'New York' };
  const arr = [10, 20, 30, 40];  
  
  console.log(destructureExample(obj,arr))

  
// Exercise 2:
// Write a function named sumNumbers that takes in multiple numbers as arguments using the rest operator. The function should return the sum of all the numbers.

// Example:
// Input: sumNumbers(1, 2, 3, 4, 5);
// Output:15


function sumNumbers(...numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
  }
  console.log(sumNumbers(1, 2, 3, 4, 5));
  
