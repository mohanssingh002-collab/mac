// 1. camelCase - Used for variables, functions, methods
let firstName = "John";
let totalAmount = 100;
let isLoggedIn = true;
function getUserData() {
  return { name: "John", age: 25 };
}
function calculateTotalPrice(price, tax) {
  return price + tax;
}
// 2. PascalCase - Used for classes, constructor functions, React components
class UserAccount {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }
}
function Person(name) {
  this.name = name;
}
const UserProfile = () => {
  return { name: "John" };
};
// 3. UPPER_SNAKE_CASE (Screaming Snake Case) - Used for constants
const MAX_SIZE = 100;
const API_BASE_URL = "https://api.example.com";
const PI = 3.14159;
const DEFAULT_TIMEOUT = 5000;
const HTTP_STATUS_OK = 200;
// 4. snake_case - Rare in JavaScript, common in Python/other languages
let user_id = 123;
let first_name = "John";

