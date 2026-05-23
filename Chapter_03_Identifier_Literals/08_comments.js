// ============================================================
// 08_comments.js
// Demonstrates the different types of comments in JavaScript
// ============================================================

// 1. SINGLE-LINE COMMENTS
// -----------------------
// Starts with // and continues to the end of the line.
// Used for brief explanations or notes.

let userName = "Alice"; // This is an inline comment

// The following function greets a user
function greet(name) {
    return `Hello, ${name}!`;
}

// 2. MULTI-LINE COMMENTS
// ----------------------
/*
    Starts with  and ends with 
    Can span multiple lines.
    Useful for longer explanations or temporarily disabling blocks of code.
*/

/*
function oldGreet(name) {
    console.log("Hi, " + name);
}
*/

/* This is a multi-line comment
   that spans across two lines */

// 3. DOCUMENTATION COMMENTS (JSDoc)
// ---------------------------------
/**
 * Calculates the sum of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of a and b.
 */
function add(a, b) {
    return a + b;
}

/**
 * Represents a user in the system.
 * @class
 */
class User {
    /**
     * Creates a new User instance.
     * @param {string} name - The user's name.
     * @param {number} age - The user's age.
     */
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// 4. INLINE COMMENTS
// ----------------
// Placed on the same line as a statement.

let counter = 0;          // Initialize counter
const MAX_RETRY = 3;    // Maximum number of retries
let isActive = true;    // Flag to check if session is active

// 5. TODO / FIXME COMMENTS
// ------------------------
// Special markers used to indicate tasks or issues to address later.

// TODO: Add input validation
// FIXME: Handle edge case when name is null
// HACK: Temporary workaround for legacy API

// 6. SHEBANG COMMENT (Node.js scripts)
// ------------------------------------
// #!/usr/bin/env node
// Placed at the very top of a file to indicate the interpreter.

// ============================================================
// BEST PRACTICES FOR COMMENTING
// ============================================================
//
//  1. Keep comments concise and relevant.
//  2. Explain WHY, not WHAT. The code shows what it does.
//  3. Keep comments up-to-date when you change the code.
//  4. Avoid obvious comments like:
//         i++; // increment i  (Unnecessary!)
//  5. Use JSDoc for public APIs and reusable functions.
//  6. Use TODO/FIXME to track future improvements.
//
// ============================================================
