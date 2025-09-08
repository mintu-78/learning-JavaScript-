// let outerVariable = "hello global" //global variable

// function grandParent(){
//     let a = 5;
//     //console.log(outerVarible);

//     function parent(){
//         let b = 10;
//         function child (){
//             let c = 15;
//             // console.log(a); //access from grandparent
//             // console.log(b); //access from parent 
//             // console.log(c); //access from local

//             console.log(outerVariable);
//         }
//         child()
//             // console.log(a); //access from grandparent
//             // console.log(b); //access from local
//             // console.log(c); //not accessible from child
//     }

//     parent()

//             console.log(a); //access from local
//             console.log(b); //not accessible from parent
//             console.log(c); //not accessible from child

// }

// grandParent()


// let a = 1;

// function first() {
//     let b = 2;
//     function second() {
//         let c = 3;
//         console.log(a, b, c);
//     }
//     second();
// }

// first(); //All variables accessible from inner function

// function demo() {
//     console.log(x);
// }

// demo(); //ReferenceError


// let count = 100;

// function outer() {
//     let count = 200;
//     function inner() {
//         let count = 300;
//         console.log(count);
//     }
//     inner();
// }

// outer();  //Accessible from inner function 

// function outer() {
//     let message = "Hello!";
//     function inner() {
//         console.log(message);
//     }
//     inner();
// }

// outer();  //Outer scope variable accessible


// function test() {
//     let value = 10;
//     console.log(value);
    
// }

// test();


let name = "Global";

function first() {
    let name = "First";
    function second() {
        console.log(name);
    }
    second();
}

first();