// if ("hello") console.log("string is truthy");
// if (12) console.log("number is truthy");
// if ({}) console.log("Empty object is truthy");
// if ([]) console.log("Empty array is truthy");

// if ("") console.log("wont print");
// if (null) console.log("wont print");
// if (undefined) console.log("wont print");
// if (NaN) console.log("wont print");
// if (0) console.log("wont print");

let name = undefined;
if (name) {
    console.log("hello")
}
else {
    console.log("BYE")
}