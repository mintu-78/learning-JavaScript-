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


function addNumbers(a, b, callback) {
}

addNumbers(5, 10, function(result) {
  console.log("Result =", result);
});

function calculate(a, b, callback) {
}

calculate(4, 5, function(x, y) {
  return x * y;
});
