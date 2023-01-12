let array = [1, 2, 3, 4];
let result = array[1]; // 2

// Search value, using built in functions
let isIncluded = array.indexOf(2);

// O(1)
// Add elements to the end of the array
array.push(1);

// O(n)
// Add elements at the start of the array
array.unshift(2);

// O(k) k: size of elements to append
array.push([1, 2, 4, 5, 6]);

// O(n)
// Delete element of the array
let indexOfElToDel = array.indexOf(3);
array.splice(indexOfElToDel, 1);

// Exercise #1

let months = [2200, 2350, 2600, 2190];

console.log(months[1] - months[0]);

for (let index = 0; index < 2; index++) {
  console.log(months[index]);
}

for (let index = 0; index < months.length; index++) {
  console.log(months[index] === 2000);
}

months.push(1980);

console.log((months[3] = months[3] + 20));
