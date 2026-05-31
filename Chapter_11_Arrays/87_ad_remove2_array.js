let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);

// arr.splice(3, 2);
// console.log(arr);

// arr.splice(3, 0, 99); //add
// console.log(arr);


// arr.splice(3, 1, 99); //replace
// console.log(arr);

arr.splice(1, 2, 99, 100);
console.log(arr);