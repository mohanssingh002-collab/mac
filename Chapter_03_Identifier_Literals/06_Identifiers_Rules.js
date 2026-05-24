//Here are practical examples to help you understand JavaScript identifier rules:
//Valid Identifiers:
let firstName = "John";        // starts with letter
let _age = 25;                 // starts with underscore
let $price = 100;              // starts with dollar sign
let user123 = "admin";         // contains digits (not at start)
let myVar = 10;                // camelCase
let MyVar = 20;                // PascalCase
let __private = "hidden";      // double underscore
let $ = "jQuery";              // just dollar sign
let _ = "lodash";              // just underscore
let firstName2 = "Jane";       // letters + digit at end

//Invalid Identifiers:
//let 2name = "John";            // starts with digit
//let my-var = "test";           // contains hyphen
//let first name = "Jane";       // contains space
//let class = "A";               // reserved word
//let function = "test";         // reserved word
//let my@var = "test";           // contains special char @
//let user#id = 123;             // contains special char #
//let 123abc = "test";           // starts with digits
//  Case Sensitivity Demo:
let myVar = 10;
let MyVar = 20;
let MYVAR = 30;
