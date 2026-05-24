// ============================================
// null vs undefined in JavaScript
// ============================================

// 1. undefined
//    - Means a variable has been declared but has NOT been assigned a value yet
//    - JavaScript automatically assigns 'undefined' when you forget to give a value
//    - It means "value is missing by accident or not initialized"

let name;
console.log(name);          // Output: undefined
console.log(typeof name);   // Output: "undefined"


// 2. null
//    - Is an actual assignment value that represents "empty" or "no value"
//    - It is intentionally set by the programmer to say "this is blank on purpose"
//    - It means "there is no value here by design"

let age = null;
console.log(age);           // Output: null
console.log(typeof age);    // Output: "object" (this is a known JS bug since the beginning)


// ============================================
// Simple analogy
// ============================================
// undefined = You ordered a pizza but the box came empty (missing/unexpected)
// null      = You ordered an empty box on purpose (intentional nothing)


// ============================================
// Key Differences
// ============================================

// Difference 1: Automatic vs Intentional
let a;              // 'a' is undefined automatically
let b = null;       // 'b' is null set by programmer

// Difference 2: typeof
console.log(typeof undefined);  // "undefined"
console.log(typeof null);       // "object"  <-- known JavaScript quirk/bug

// Difference 3: Loose equality vs Strict equality
console.log(null == undefined);   // true  (they are loosely equal)
console.log(null === undefined);  // false (different types)


// ============================================
// Practical Example
// ============================================

let user = {
    firstName: "John",
    middleName: undefined,  // we don't know / forgot to fill
    lastName: "Doe",
    nickname: null          // we know there is no nickname
};

console.log(user.middleName); // undefined
console.log(user.nickname);   // null
console.log(user.email);      // undefined (property doesn't exist)


// ============================================
// When to use which?
// ============================================
// Use undefined -> When JavaScript handles it ( uninitialized variables, missing props )
// Use null      -> When YOU want to explicitly say "this has no value"
//                  ( clearing an object, resetting a variable, API responses )

let score = 100;
score = null;   // programmer clears the score intentionally
console.log(score); // null
