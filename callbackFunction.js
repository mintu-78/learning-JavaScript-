// function callbackFunction(){
//     console.log("Good bye");
    
// }

// function myFunction(a){
//     console.log("history");
    
//     a()
// }

// myFunction(callbackFunction)


// function greet(name, callback) {
//     console.log("Hi, " + name);
//     callback();
// }

// function sayWelcome() {
//     console.log("Welcome to JavaScript practice!");
// }

// greet("Mintu", sayWelcome);


// function square(num, callback) {
//     let result = num * num;
//     callback(result);
// }

// function displayResult(result) {
//     console.log("The result is: " + result);
// }

// square(6, displayResult);


// function addNumbers(a, b, callback) {
// }

// addNumbers(5, 10, function(result) {
//   console.log("Result =", result);
// });

// function calculate(a, b, callback) {
// }

// calculate(4, 5, function(x, y) {
//   return x * y;
// });



// console.log("Start");

// setTimeout(function() {
//   console.log("Hello after 2 seconds");
// }, 2000);

// console.log("End");


function multiply(a, b, callback) {
  let result = a * b;
  callback(result);
}

multiply(4, 5, function(ans) {
  console.log("Answer = " + ans);
});
