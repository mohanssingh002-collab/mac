# JavaScript Variable Declarations: `var`, `let`, and `const`

## Comparison Table

| Feature | `var` | `let` | `const` |
|---------|-------|-------|---------|
| **Introduced in** | ES1 (1997) | ES6 (2015) | ES6 (2015) |
| **Scope** | Function scope or Global scope | Block scope `{}` | Block scope `{}` |
| **Hoisting** | Hoisted (initialized with `undefined`) | Hoisted (not initialized - Temporal Dead Zone) | Hoisted (not initialized - Temporal Dead Zone) |
| **Can be reassigned?** | Yes | Yes | No |
| **Can be redeclared?** | Yes (in same scope) | No (in same scope) | No (in same scope) |
| **Must be initialized at declaration?** | No | No | Yes |
| **Can be declared without value?** | Yes | Yes | No |
| **Properties of global object** | Yes (becomes property of `window`) | No | No |
| **Use in modern JS** | Avoid | Use for variables that change | Use for variables that don't change |

---

## Quick Code Examples

### `var` - Function Scoped
```javascript
function example() {
    if (true) {
        var x = 10;
    }
    console.log(x); // 10 - accessible outside the block
}
```

### `let` - Block Scoped
```javascript
function example() {
    if (true) {
        let y = 20;
    }
    console.log(y); // ReferenceError: y is not defined
}
```

### `const` - Block Scoped & Immutable Binding
```javascript
const PI = 3.14159;
PI = 3.14; // TypeError: Assignment to constant variable

// Note: const objects/arrays can have their contents modified
const person = { name: "Alice" };
person.name = "Bob"; // This is allowed!
person = {}; // TypeError: Assignment to constant variable
```

---

## Best Practices

1. **Default to `const`** - Use it for variables that won't be reassigned
2. **Use `let` when reassignment is needed** - For counters, loops, conditionals
3. **Avoid `var`** - It can lead to unexpected behavior due to function scoping and hoisting
4. **Use meaningful names** - Regardless of the keyword, clarity is key

---

## Hoisting Behavior

```javascript
// var hoisting
console.log(a); // undefined (not an error!)
var a = 5;

// let hoisting
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;

// const hoisting
console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 15;
```

---

## Summary

| When to use | Declaration |
|-------------|-----------|
| Variable that will be reassigned | `let` |
| Variable that won't be reassigned | `const` |
| Constants, configuration values | `const` |
| Loop counters | `let` |
| Legacy code / maintain old code | `var` |
