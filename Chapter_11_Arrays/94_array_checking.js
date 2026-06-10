let result = Array.isArray([1, 2, 3]);
console.log(result);

let result1 = Array.isArray(1);
console.log(result1);

//every and some
[70, 80, 90].every(s => s >= 70); //true
[70, 60, 90].every(s => s >= 70); //false

[70, 80, 90].some(s => s > 70); //true
[70, 60, 50].some(s => s > 70); //false

