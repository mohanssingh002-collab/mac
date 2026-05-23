// JavaScript Identifier Rules & Naming Conventions

// 1. Basic Rules
// - Must start with a letter, underscore (_), or dollar sign ($)
// - Subsequent characters can be letters, digits, underscores, or dollar signs
// - Cannot be reserved keywords
// - Case-sensitive

// Valid identifiers
let myVariable = 1;
let _privateVar = 2;
let $element = 3;
let variable123 = 4;
let π = 3.14; // Unicode letters are allowed

// Invalid identifiers (commented out to prevent errors)
// let 1variable = 1; // Cannot start with digit
// let my-variable = 2; // Hyphens not allowed
// let class = 3; // Reserved keyword
// let hello world = 4; // Spaces not allowed

// 2. Naming Conventions

// Camel Case (most common in JavaScript)
let firstName = "John";
let lastName = "Doe";
let getUserData = function() {};
let isLoggedIn = true;

// Pascal Case (used for classes and constructors)
class UserProfile {
  constructor(name) {
    this.userName = name;
  }
}

function EmployeeRecord() {}

// Snake Case (less common, but valid)
let user_name = "Jane";
let first_name = "John";
let get_user_data = function() {};
let is_logged_in = false;

// Constant Case / Upper Snake Case (for constants)
const MAX_RETRIES = 3;
const API_BASE_URL = "https://api.example.com";
const DEFAULT_TIMEOUT = 5000;
const PI_VALUE = 3.14159;

// Hungarian Notation (prefix indicates type, rarely used now)
let strName = "John";
let intAge = 30;
let arrItems = [1, 2, 3];
let objConfig = {};

// 3. Special Characters
let $_mixed = "valid";
let _$test = "valid";
let __private = "valid";
let $ = "jQuery style";

// 4. Unicode identifiers
let café = "coffee";
let résumé = "document";
let 名前 = "name"; // Japanese

// 5. Examples of reserved words that cannot be used
// break, case, catch, class, const, continue, debugger, default
// delete, do, else, export, extends, finally, for, function, if
// import, in, instanceof, new, return, super, switch, this, throw
// try, typeof, var, void, while, with, yield
