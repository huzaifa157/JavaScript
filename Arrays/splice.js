// splice() mainly JavaScript ka method hai jo arrays ke sath use hota hai. Ye array ko change (mutate) karta hai — matlab original array modify hota hai.

// 📌 Syntax:
// array.splice(start, deleteCount, item1, item2, ...)

// 📌 Parameters:

// start → kaha se operation start karna hai (index number).
// deleteCount → kitne elements delete karne hain.
// item1, item2, ... → naye elements jo insert karne hain.

// 📚 Examples:

// 1. Remove elements

// let arr = [10, 20, 30, 40, 50];
// arr.splice(2, 2); // index 2 se 2 elements delete
// console.log(arr); 
// // [10, 20, 50]

// 2. Add elements
// let arr = [10, 20, 30];
// arr.splice(1, 0, 15, 17); // index 1 par delete 0, aur insert 15, 17
// console.log(arr); 
// // [10, 15, 17, 20, 30]

// 3. Replace elements
// let arr = [10, 20, 30, 40];
// arr.splice(1, 2, 25, 35); // index 1 se 2 delete, aur 25, 35 insert
// console.log(arr); 
// // [10, 25, 35, 40]

// 📝 Summary:

// splice() array ko badal deta hai.

// Ye elements remove, add, ya replace karne ke liye use hota hai.

// Return value → jo elements delete hue hain, wo ek naya array banake return karta hai.