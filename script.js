// let a = 5;
// console.log(a)

// var b = 5;
// console.log(b);

// const c = 5;
// console.log(c)

// c = 9;
// console.log(c)

function example() {
  {
    var a = 5;
    var a = 6; /*can be redeclared with var*/
  }
  console.log(`var is function scope `,a);
}

example();
console.log("..............................")



function example1() {
  {
    let a = 5;
    // let a = 6 /*can not be redeclared with let
    console.log(`let is a block scope `,a);
}
  }
  

example1();


let a = null ;
console.log(typeof(a))
console.log(a)

console.log(b);
var b = 8;
