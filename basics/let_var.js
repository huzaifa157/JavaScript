// Scope

// var → Function-scoped
//  It means the variable exists throughout the function where it is declared.

// let → Block-scoped
//  It means the variable exists only inside the block { ... } where it is declared.


// function testVar() {
//     if (true) {
//         var x = 10;

//     }
//     console.log(x); // 10 → accessible outside the block
// }



// function testLet() {
//     if (true) {
//         let y = 20;
//     }
//     // console.log(y); // Error → not accessible outside the block
// }

// testVar();
// testLet();


// 2. Redeclaration

// var → Can be redeclared in the same scope.
// let → Cannot be redeclared in the same scope.


// var a = 5;
// var a = 10; // ✅ Works

// let b = 5;

// let b = 10; // ❌ Error


// 3. Hoisting

// var → Hoisted to the top, but initialized as undefined.
// let → Hoisted but not initialized, so using it before declaration causes an error.


// console.log(c); // undefined
// var c = 30;

// console.log(d); // ReferenceError
// let d = 40;


// 🟢 What is Hoisting in JavaScript?

// 👉 Hoisting means that in JavaScript, variable and function declarations are moved to the top of their scope (before code execution).

// ⚠️ But only declarations are hoisted, not initializations (values).

// 🟡 Example with var
// console.log(a); // undefined (not error)
// var a = 5;
// console.log(a); // 5



// ✅ Why? Because JavaScript internally treats it like this:

// var a;          // declaration hoisted
// console.log(a); // undefined
// a = 5;          // initialization stays in place
// console.log(a); // 5

// 🔵 Function Hoisting

// ✅ Function Declarations are fully hoisted.

// sayHello();  // Works fine
// function sayHello() {
//   console.log("Hello!");
// }


// ⚠️ Function Expressions are NOT hoisted:

// sayHi(); // ❌ Error: Cannot access 'sayHi' before initialization
// let sayHi = function() {
//   console.log("Hi!");
// };

// 🔴 let and const with Hoisting

// let and const are also hoisted, but they stay in a "Temporal Dead Zone" (TDZ) until initialized.

// Accessing them before declaration causes an error, not undefined.

// console.log(x); // ❌ ReferenceError
// let x = 10;
