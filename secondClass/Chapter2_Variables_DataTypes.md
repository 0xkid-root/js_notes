# Chapter 2: Variables & Data Types

## 1. Why do we need Variables?

Programming mein hum bahut baar data ke saath kaam karte hain.
For example: `25`, `"Gaurav"`, `true`, `10.5`

Humein in values ko program ke andar store karke baad mein use karna hota hai. Iske liye hum variables use karte hain.

**Simple Definition:**
A variable is a named reference (memory location) to a value that a program can use and, when allowed, change.

**Beginner level par:** Variable = data ko ek naam dekar usse program mein access karna.

**Example:**
```javascript
let age = 25;
```
Here:
- `let` ➡️ variable declaration keyword
- `age` ➡️ variable name
- `25` ➡️ value
- `=` ➡️ assignment operator
- `;` ➡️ statement terminator

---

## 2. Easy Real-Life Example

Imagine ek box hai:
```text
┌─────────────┐
│     25      │
└─────────────┘
      ↑
     age
```
Humne `25` ko `age` naam se identify kar diya.
Ab jab bhi hum `console.log(age);` likhenge, output `25` aayega. 
Instead of remembering the exact memory address where the value is stored, we use its given name.

**Variable ka use kya hai?**
- Access kar sakte hain.
- Update/Modify kar sakte hain.
- Program mein multiple places par reuse kar sakte hain.

```javascript
let age = 25;
console.log(age); // Output: 25

age = 26; // Value updated
console.log(age); // Output: 26
```

---

## 3. JavaScript mein Variable kaise create karte hain?

JavaScript mein variables create karne ke commonly 3 keywords hain:
1. `var`
2. `let`
3. `const`

*Modern JavaScript mein generally `let` aur `const` ko prefer kiya jata hai. `var` ko mainly purane (legacy) code samajhne ke liye jaana important hai.*

---

## 4. Understanding `var` (The Old Way)

`var` ki sabse important property ye hai ki **var is function-scoped**, ye block-scoped nahi hota hai.

**Example 1: Function Scope (Works as expected)**
```javascript
function test() {
    var x = 10;
    console.log(x); // Output: 10
}
// console.log(x); // Error! x accessible nahi hoga function ke bahar.
```

**Example 2: Block Scope (The Problem with var)**
```javascript
{
    var x = 10;
}
console.log(x); // Output: 10
```
*Why?* Because `var` block (`{ }`) scope ko ignore karta hai. 

**Redeclaration & Reassignment in `var`:**
`var` ke saath same variable ko dobara declare aur reassign dono kar sakte hain.
```javascript
var x = 20;
var x = 40; // Redeclaration (Allowed)
x = 50; // Reassignment (Allowed)
```

---

## 5. The ES6 Update: Enter `let` and `const`

**Problem with `var`:** 
Kyunki `var` block scope follow nahi karta, bade codebases mein accidental overwriting aur bugs aa jate the.
Isi problem ko solve karne ke liye **2015 (ES6)** mein `let` aur `const` introduce hue.

- `var` ➡️ Function Scope (Purana tarika, errors ke chances)
- `let` ➡️ Block Scope (Naya tarika, safe aur controlled)
- `const` ➡️ Block Scope (Reassignment allowed nahi)

---

## 6. Understanding `let`

Modern JavaScript mein `let` commonly use hota hai jahan value change hone wali ho.

**Block Scoped:**
```javascript
{
    let age = 25;
    console.log(age); // Output: 25
}
// console.log(age); // ReferenceError! age ka scope block tak hi tha.
```

**Redeclaration vs Reassignment:**
- Same scope mein `let` ko dobara **declare nahi** kar sakte.
- Lekin value ko **reassign kar sakte** hain.

```javascript
let age = 20;
// let age = 30; // ❌ Error (Redeclaration not allowed)
age = 30; // ✅ Allowed (Reassignment)
```

---

## 7. Understanding `const`

`const` ka use tab karte hain jab variable binding ko reassign nahi karna ho.

```javascript
const age = 25;
// age = 30; // ❌ Error (Reassignment not allowed)
// const age = 30; // ❌ Error (Redeclaration not allowed)
```

**Important Caveat for `const`:**
Students ko ye misconception nahi dena chahiye ki *"const ki value kabhi change nahi ho sakti."* `const` prevents **reassignment** of the variable binding, but objects/arrays inside it can still be modified.

```javascript
const user = { name: "Gaurav" };
user.name = "Rahul"; // ✅ Object ke andar property change ho sakti hai!
// user = {}; // ❌ Reassigning the whole object is not allowed!
```

---

## 8. Comparison Table: var vs let vs const

| Feature | `var` | `let` | `const` |
| :--- | :---: | :---: | :---: |
| **Function scoped** | ✅ | ❌ | ❌ |
| **Block scoped** | ❌ | ✅ | ✅ |
| **Redeclaration** | ✅ | ❌ | ❌ |
| **Reassignment** | ✅ | ✅ | ❌ |
| **Modern Preferred**| ❌ | ✅ | ✅ |

---

## 9. Variable Naming Rules

1. **Meaningful names:** `let studentName = "Gaurav";` (Good) vs `let a = "Gaurav";` (Bad)
2. **No spaces:** `let student name` is invalid. Use camelCase: `let studentName`.
3. **Cannot start with a number:** `let 1name` is invalid. `let name1` is valid.
4. **Special Characters:** Sirf `_` (underscore) and `$` (dollar sign) allowed hain.
5. **Reserved Keywords:** Language keywords use nahi kar sakte (e.g., `let`, `const`, `function`, `if`).
6. **Case Sensitive:** `age` aur `Age` dono alag variables hain.

---

## 10. Data Types Overview

A **data type** tells us what kind of value we are working with.
JavaScript has two broad categories of data types:
1. **Primitive Data Types** (Basic, built-in)
2. **Non-Primitive / Object** (Complex data structures)

*Note: For now, we are focusing purely on Primitive Data Types.*

---

## 11. The 7 Primitive Data Types

### 1. Number
Integers aur decimals dono `Number` type mein aate hain.
```javascript
let age = 25;
let price = 99.50;
```
*(Advanced Note: Safe integer range is `-(2^53 - 1)` to `+(2^53 - 1)`. Beyond this, use BigInt).*

### 2. String
Sequence of characters (text). You can use single quotes, double quotes, or backticks.
```javascript
let name = "Gaurav";
let message = 'Hello';
```

### 3. Boolean
Sirf do values hoti hain: `true` ya `false`. Mostly used for conditions.
```javascript
let isLoggedIn = true;
```

### 4. Undefined
A variable that is declared but NOT assigned a value.
```javascript
let age;
console.log(age); // Output: undefined
```

### 5. Null
Intentionally assigned as "no value" or "empty value".
```javascript
let selectedUser = null; 
```
**Null vs Undefined:** `undefined` is a mistake/uninitialized state, `null` is a deliberate empty state.

### 6. BigInt
Used for extremely large integers beyond the safe `Number` limit. Ends with an `n`.
```javascript
let bigNumber = 9007199254740993n;
```

### 7. Symbol
Used to create unique identifiers (usually for object properties).
```javascript
let id = Symbol("id");
```

---

## 12. The `typeof` Operator

`typeof` ek operator hai jo batata hai ki value ka data type kya hai.

```javascript
console.log(typeof 25);           // "number"
console.log(typeof "Gaurav");     // "string"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof 100n);         // "bigint"
console.log(typeof Symbol("id")); // "symbol"
```

**The Famous JavaScript Quirk:**
```javascript
console.log(typeof null); // "object"
```
*Note for teaching:* `null` is a primitive, but `typeof null` returns `"object"` due to a historical bug in early JavaScript. Do not teach that null is an object!

---

## 13. Dynamic Typing

JavaScript is a **dynamically typed** language. This means a variable's data type is not fixed; it can change based on the value assigned to it.

```javascript
let value = 20;       // Type is Number
value = "Gaurav";     // Type is now String
value = true;         // Type is now Boolean
```

**Crucial Distinction to remember:**
- `age` ➡️ Variable (Identifier)
- `25` ➡️ Value
- `Number` ➡️ Data Type

---

## 14. Class 2 Practical & Final Map

**Practical Exercise:**
Write this code, guess the output, and check the `typeof` for each:
```javascript
let studentName = "Rahul";
let studentAge = 20;
let course = "BCA";
let isStudent = true;
let phoneNumber;
let result = null;
```

### Final Revision Map

```text
                   JAVASCRIPT
                         │
                    VARIABLES
                         │
             ┌───────────┼───────────┐
             │           │           │
            var         let        const
             │           │           │
        function       block       block
         scoped        scoped      scoped
             │           │           │
       redeclare ✓   redeclare ✗  redeclare ✗
       reassign ✓    reassign ✓   reassign ✗


                  DATA TYPES
                       │
             ┌─────────┴─────────┐
             │                   │
         Primitive            Object
             │
   ┌─────────┼─────────┬──────────┐
   │         │         │          │
 Number    String   Boolean    Undefined
   │
   ├── Null
   ├── BigInt
   └── Symbol
```

**5 Lines Students Must Remember:**
1. **Variable:** Data ko ek naam dena.
2. **var:** Function scoped, redeclaration allowed.
3. **let:** Block scoped, reassignment allowed.
4. **const:** Block scoped, reassignment NOT allowed.
5. **Data Type:** Batata hai ki value kis type ki hai.
