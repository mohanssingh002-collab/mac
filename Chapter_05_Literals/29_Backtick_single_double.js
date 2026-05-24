// ============================================
// Single vs Double vs Backtick Quotes
// File: 29_Backtick_single_double.js
// ============================================

// 1. Single (') and Double (") are exactly the same.
//    Just pick one and stick to it in your project.
let a = 'Hello';
let b = "Hello";
console.log(a === b); // true

// 2. Backtick (`) does everything single/double do,
//    PLUS two extra powers: multi-line & interpolation.
let name = "Mohan";
let msg = `Hi ${name},
Welcome back!`;   // inserts variable + line break
console.log(msg);

// --- ONLY 1 EXPLANATION ---
// '  ' and "  "  = plain boxes that hold text.
// `  `           = magic box that holds text + variables + line breaks.
// Always use backticks — they do everything.
