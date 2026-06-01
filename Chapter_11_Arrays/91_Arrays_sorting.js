let fruits = ["cheeku", "apple", "banana"]
fruits.sort();
console.log(fruits);

// let num = [4, 2, 5, 3]
// num.sort();
// console.log(num);

// let num = [14, 2, 15, 3]
// num.sort();
// console.log(num);

let num = [14, 2, 15, 3]
num.sort();
console.log(num);
num.sort((a, b) => (a - b));
console.log(num);

num.sort((a, b) => (b - a));
console.log(num);