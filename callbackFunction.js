// function callbackFunction(){
//     console.log("Good bye");
    
// }

// function myFunction(a){
//     console.log("history");
    
//     a()
// }

// myFunction(callbackFunction)


function greet(name, callback) {
    console.log("Hi, " + name);
    callback();
}

function sayWelcome() {
    console.log("Welcome to JavaScript practice!");
}

greet("Mintu", sayWelcome);


function square(num, callback) {
    let result = num * num;
    callback(result);
}

function displayResult(result) {
    console.log("The result is: " + result);
}

square(6, displayResult);
