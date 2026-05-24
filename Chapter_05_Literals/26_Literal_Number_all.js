// ============================================
// JavaScript Number Types & Literals
// File: 26_Literal_Number_all.js
// ============================================

// --------------------------------------------
// 1. INTEGER (Whole Numbers)
// --------------------------------------------
let age = 25;
let temperature = -10;
let zero = 0;

console.log("Integer:", age, temperature, zero);
console.log("Type:", typeof age); // "number"


// --------------------------------------------
// 2. FLOATING POINT (Decimal Numbers)
// --------------------------------------------
let price = 19.99;
let pi = 3.14159;
let negativeFloat = -0.5;

console.log("Float:", price, pi, negativeFloat);
console.log("Type:", typeof price); // "number"


// --------------------------------------------
// 3. SCIENTIFIC / EXPONENTIAL NOTATION
//    (e or E means ×10^power)
// --------------------------------------------
let bigNumber = 1e5;      // 1 × 10^5  = 100000
let smallNumber = 1e-3;   // 1 × 10^-3 = 0.001
let electronMass = 9.1e-31;

console.log("Scientific (1e5):", bigNumber);      // 100000
console.log("Scientific (1e-3):", smallNumber);     // 0.001
console.log("Scientific (9.1e-31):", electronMass); // 9.1e-31


// --------------------------------------------
// 4. HEXADECIMAL (Base 16) — starts with 0x or 0X
//    Digits: 0-9 and A-F (or a-f)
// --------------------------------------------
let hexColor = 0xFF;      // 255 in decimal
let hexGreen = 0x00FF00;  // 65280 in decimal
let hexBlue = 0x0000FF;   // 255 in decimal

console.log("Hex (0xFF):", hexColor);       // 255
console.log("Hex (0x00FF00):", hexGreen);   // 65280
console.log("Hex (0x0000FF):", hexBlue);    // 255


// --------------------------------------------
// 5. OCTAL (Base 8) — starts with 0o or 0O
//    Digits: 0-7 only
// --------------------------------------------
let octal = 0o10;   // 8 in decimal
let octalTwo = 0o77; // 63 in decimal

console.log("Octal (0o10):", octal);    // 8
console.log("Octal (0o77):", octalTwo); // 63


// --------------------------------------------
// 6. BINARY (Base 2) — starts with 0b or 0B
//    Digits: 0 and 1 only
// --------------------------------------------
let binary = 0b1010;   // 10 in decimal
let binaryByte = 0b11111111; // 255 in decimal

console.log("Binary (0b1010):", binary);         // 10
console.log("Binary (0b11111111):", binaryByte); // 255


// --------------------------------------------
// 7. BIGINT (Arbitrary Precision Integers)
//    For numbers larger than Number.MAX_SAFE_INTEGER
//    Append 'n' at the end
// --------------------------------------------
let bigIntNormal = 9007199254740991n; // 2^53 - 1
let hugeNumber = 123456789012345678901234567890n;
let bigFromConstructor = BigInt(999);

console.log("BigInt:", bigIntNormal);
console.log("Huge BigInt:", hugeNumber);
console.log("BigInt from constructor:", bigFromConstructor);
console.log("Type of BigInt:", typeof bigIntNormal); // "bigint"

// Cannot mix BigInt and regular Number directly:
// console.log(10n + 5); // ERROR!
console.log("Mixing types:", 10n + BigInt(5)); // 15n


// --------------------------------------------
// 8. SPECIAL NUMERIC VALUES
// --------------------------------------------

// Infinity — result of dividing by zero or overflow
let positiveInfinity = Infinity;
let negativeInfinity = -Infinity;
let divByZero = 1 / 0;
let negDivByZero = -1 / 0;

console.log("Positive Infinity:", positiveInfinity); // Infinity
console.log("Negative Infinity:", negativeInfinity); // -Infinity
console.log("1 / 0 =", divByZero);                   // Infinity
console.log("-1 / 0 =", negDivByZero);                 // -Infinity

// NaN — "Not a Number" (invalid numeric operation)
let notANumber = NaN;
let invalidMath = "hello" / 2;
let sqrtNegative = Math.sqrt(-1);

console.log("NaN:", notANumber);           // NaN
console.log("'hello' / 2 =", invalidMath); // NaN
console.log("Math.sqrt(-1):", sqrtNegative); // NaN

// NaN is the ONLY value not equal to itself!
console.log("NaN === NaN:", NaN === NaN);  // false
console.log("isNaN('hello'):", isNaN("hello")); // true
console.log("isNaN(123):", isNaN(123));         // false


// --------------------------------------------
// 9. NUMBER OBJECT CONSTANTS
// --------------------------------------------
console.log("\n--- Number Constants ---");
console.log("MAX_VALUE:", Number.MAX_VALUE);           // ~1.79e308
console.log("MIN_VALUE:", Number.MIN_VALUE);           // ~5e-324
console.log("MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log("MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log("POSITIVE_INFINITY:", Number.POSITIVE_INFINITY);
console.log("NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY);
console.log("EPSILON:", Number.EPSILON);               // smallest difference between 2 numbers


// --------------------------------------------
// 10. CONVERTING STRINGS TO NUMBERS
// --------------------------------------------
console.log("\n--- String to Number Conversion ---");
console.log("parseInt('42'):", parseInt("42"));             // 42
console.log("parseInt('42px'):", parseInt("42px"));          // 42 (stops at non-digit)
console.log("parseFloat('3.14'):", parseFloat("3.14"));     // 3.14
console.log("parseFloat('3.14abc'):", parseFloat("3.14abc")); // 3.14
console.log("parseInt('FF', 16):", parseInt("FF", 16));     // 255 (hex string parsed)
console.log("Number('99'):", Number("99"));                 // 99
console.log("Number(true):", Number(true));                   // 1
console.log("Number(false):", Number(false));                 // 0


// --------------------------------------------
// 11. NUMBER FORMATTING METHODS
// --------------------------------------------
let num = 1234.56789;

console.log("\n--- Number Formatting ---");
console.log("Original:", num);                            // 1234.56789
console.log("toFixed(2):", num.toFixed(2));               // "1234.57" (rounds)
console.log("toFixed(0):", num.toFixed(0));               // "1235"
console.log("toPrecision(4):", num.toPrecision(4));       // "1235" (total digits)
console.log("toPrecision(6):", num.toPrecision(6));       // "1234.57"

// toString(radix) — convert to different bases
let dec = 255;
console.log("255 to binary:", dec.toString(2));  // "11111111"
console.log("255 to octal:", dec.toString(8));   // "377"
console.log("255 to hex:", dec.toString(16));    // "ff"


// --------------------------------------------
// 12. NUMBER CHECKING METHODS
// --------------------------------------------
console.log("\n--- Number Checking ---");
console.log("isNaN(NaN):", Number.isNaN(NaN));                 // true
console.log("isNaN('hello'):", Number.isNaN("hello"));         // false (string is not NaN)
console.log("isFinite(10):", Number.isFinite(10));             // true
console.log("isFinite(Infinity):", Number.isFinite(Infinity)); // false
console.log("isInteger(5):", Number.isInteger(5));             // true
console.log("isInteger(5.5):", Number.isInteger(5.5));         // false
console.log("isSafeInteger(9007199254740991):", Number.isSafeInteger(9007199254740991)); // true


// --------------------------------------------
// Summary Table (in comments)
// --------------------------------------------
/*
| Literal     | Example       | Description                 |
|-------------|---------------|-----------------------------|
| Integer     | 42, -7, 0     | Whole numbers               |
| Float       | 3.14, -0.5    | Decimal numbers             |
| Exponential | 1e5, 2.5e-3   | Scientific notation         |
| Hexadecimal | 0xFF, 0xABC   | Base 16 (colors, memory)    |
| Octal       | 0o10, 0o77    | Base 8                      |
| Binary      | 0b1010        | Base 2 (flags, permissions) |
| BigInt      | 123n, 0xFFn   | Arbitrary large integers    |
| Infinity    | Infinity      | Too large / divide by 0     |
| NaN         | NaN           | Invalid number operation    |
*/
