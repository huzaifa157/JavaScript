// 🟢 What is Scope?

// 👉 Scope means the current area in the code where variables are accessible.
// If a variable is not in scope, you cannot use it.





// 🟡 Types of Scope in JavaScript


// 1️⃣ Global Scope


// Variables declared outside any function or block.

// Can be accessed anywhere in the program.

// let globalVar = "I am global";

// function show() {
//   console.log(globalVar); // ✅ accessible
// }

// show();
// console.log(globalVar); // ✅ accessible










// 2️⃣ Function Scope (Local Scope)

// Variables declared inside a function are only accessible inside that function.

// function myFunc() {
//   let localVar = "I am local";
//   console.log(localVar); // ✅ accessible
// }

// myFunc();
// console.log(localVar); // ❌ Error (not accessible outside)











// 3️⃣ Block Scope (let and const)


// Variables declared with let and const inside { } (block) are only available inside that block.

// var ❌ does not follow block scope.

// if (true) {
//   let a = 10;
//   const b = 20;
//   var c = 30;
// }

// console.log(c); // ✅ works (var is not block-scoped)
// console.log(a); // ❌ Error
// console.log(b); // ❌ Error





// 4️⃣ Lexical Scope (Closure)


// Inner functions can access variables from outer functions.

// function outer() {
//   let outerVar = "Outer";

//   function inner() {
//     console.log(outerVar); // ✅ accessible (lexical scope)
//   }

//   inner();
// }

// outer();