let year = 2020;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("its a Leap year");
}
else {
    console.log("not a leap year");
}