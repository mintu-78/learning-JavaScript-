// block scope
// {
//    let x = 5;
   
//     console.log(x)
// }

// console.log(x) // cannot access outside the block


// {
//     var x2 = 55;
// }

// console.log(x2) // can be access outside the block



// functional scope

// function myFunction(){
//     let a = 5;
//     // console.log(a);

//     var b = 55;
//     console.log(b)
// }


// myFunction();

// console.log(a) // can not access outside the function
// console.log(b)



//  Global scope

// let x = 2; // global scope
// const y = 5; // global scope
// var z = 7; // global scope


// {
//     console.log("access inside block")
//     console.log(x)
//     console.log(y)
//     console.log(z)
// }

// function myFun(){
//     console.log("access inside function")
//     console.log(x)
//     console.log(y)
//     console.log(z)
// }

// myFun()

// console.log("access outside")
// console.log(x)
// console.log(y)
// console.log(z)

// let x = 10;
// function test() {
//     console.log(x);
// }
// test();

// function demo() {
//     let a = 5;
// }
// console.log(a);  


// var a = 1;
// function foo(){
//     var a = 2;
//     console.log(a); 
// }
// foo();
// console.log(a);


// if (true) {
//     var x = 100;
//     let y = 200;
// }
// console.log(x);
// console.log(y);


// for (var i = 0; i < 3; i++) {}
// console.log(i);

// for (let j = 0; j < 3; j++) {}
// console.log(j);


// function demo() {
//   let b = 5;
//   console.log(b);
// }
// demo();
// console.log(b);


// if (true) {
//   var x = 100;
//   let y = 200;
// }
// console.log(x);
// console.log(y);


var c = 1;
function test() {
  var c = 2;
  console.log(c);
}
test();
console.log(c);  
