// The Three Operators

// 1️⃣ = → Assignment Operator


// 👉 Used to assign a value to a variable.
// let x = 5;   // assign 5 to x




// 2️⃣ == → Equality Operator (Loose Equality)

// 👉 Compares values only, ignores type.
// 👉 JavaScript will do type conversion if needed.

// ✅ Example:

// console.log(5 == "5");   // true  (string "5" converted to number)
// console.log(true == 1);  // true  (true converted to 1)








// 3️⃣ === → Strict Equality Operator

// 👉 Compares both value and type.
// 👉 No type conversion (more reliable).

// ✅ Example:

// console.log(5 === "5");   // false (number vs string)
// console.log(5 === 5);     // true  (same type & value)
// console.log(true === 1);  // false (boolean vs number)




// Use === (strict equality) in modern JavaScript for safer comparisons.

// Use = only for assigning values.

// Avoid == unless you really want type conversion.