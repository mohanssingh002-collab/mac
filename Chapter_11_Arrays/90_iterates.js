let tests = ["login", "checkout", "search"]
console.log(tests);
console.log("--------");

for (a of tests) {
    console.log(a);
}
console.log("--------");

tests.forEach((tests, index) => {
    console.log(tests, index);
});

