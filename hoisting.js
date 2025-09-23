// // variable hoasting.
// console.log(a);
// var a;
// a = 7;
// console.log(a);

// console.log(b);
// let b =7;


// // function hoisting


// fun1()

// function fun1(){
//     console.log("hello from");
    
// }

// fun1()



// let and const hoisting 


// console.log(e);  //here e is hoisted and produce undefined
// console.log(d); // here d produce and reference error(i.e. d is defined)
// var e = 10;
// let d = 20;  //here d is in temporal dead zone


// var num = 20;
// function test() {
//   console.log(num);
//   var num = 50;
// }
// test();


// foo();
// function foo() {
//   console.log("First");
// }
// function foo() {
//   console.log("Second");
// }


function demo() {
  console.log("hello");
  console.log("hi");
  var a1 = 10;
  let b1 = 20;
}
demo();