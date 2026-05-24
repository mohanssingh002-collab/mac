// ============================================
// Confusing Comparison: ==  vs  ===
// File: 38_confusing_comparison.js
// ============================================

console.log("=== STRICT EQUALITY (===) ===");
// Compares VALUE + TYPE. No type conversion happens.

console.log(5 === 5);          // true  (same value, same type)
console.log(5 === "5");        // false (same value, different type)
console.log(true === 1);       // false (boolean vs number)
console.log(null === undefined);// false (different types)
console.log(0 === false);      // false (number vs boolean)


console.log("\n=== LOOSE EQUALITY (==) ===");
// Compares VALUE after TYPE CONVERSION (coercion).
// This is where JavaScript gets weird and confusing.

console.log(5 == "5");         // true  -> string "5" becomes number 5
console.log(0 == false);       // true  -> false becomes 0
console.log(1 == true);        // true  -> true becomes 1
console.log("" == false);      // true  -> empty string becomes 0, false becomes 0
console.log("0" == false);     // true  -> "0" -> 0, false -> 0
console.log(null == undefined);// true  -> special JS rule


console.log("\n=== CONFUSING / TRICKY CASES ===");

// Empty array vs empty string vs zero
console.log([] == "");         // true   -> [] becomes "", "" stays ""
console.log([] == 0);          // true   -> [] -> "" -> 0
console.log("" == 0);          // true   -> "" becomes 0
console.log([] == false);      // true   -> [] -> "" -> 0, false -> 0
console.log([""] == false);    // true   -> [""] -> "", "" -> 0, false -> 0

// Arrays with values
console.log([1] == 1);          // true   -> [1] becomes "1" -> 1
console.log([1,2] == "1,2");  // true   -> [1,2] becomes "1,2"

// Objects (surprise!)
console.log({} == "[object Object]"); // true (object to string conversion)
console.log({} == {});               // false (different objects in memory)

// Weird number cases
console.log(NaN == NaN);        // false  -> NaN is never equal to anything, even itself
console.log(null == 0);         // false  -> null only equals undefined, not 0!
console.log(undefined == 0);    // false  -> undefined only equals null

// Boolean vs string
console.log(true == "1");       // true  -> true -> 1, "1" -> 1
console.log(false == "0");      // true  -> false -> 0, "0" -> 0
console.log(true == "true");    // false -> true -> 1, "true" -> NaN

// Three or more equals in a row (left-to-right)
console.log(1 == "1" == true);  // true  -> (1 == "1") is true, then true == true is true
console.log(0 == "" == 0);      // true  -> (0 == "") is true, then true == 0 -> true -> 1 == 0? Wait! Let's check:
// Actually: 0 == "" is true, then true == 0 -> true becomes 1, 1 == 0 is FALSE!
console.log("(0 == \"\" == 0):", 0 == "" == 0); // false


console.log("\n=== THE GOLDEN RULE ===");
// Always use === (strict equality) in real code.
// It avoids hidden type conversion bugs.
// Use == only if you truly understand what will be converted.
