// // function greet (){
// //     console.log("Hello JavaScript");
    
// // }
// // greet()



// //***********function expression************//


// // let greet = function (){
// //     console.log("hello javascript");
// // }

// // greet();



// //*********** Anonymous function expression************//
 

// // const square = function(num){
// //     console.log(num * num);
    
// // }
// // square(8)




// //*********** Arrow function************//



// // const greet = () => {
// //     console.log("hello");
    
// // }
// // greet()


// // const square = (num) =>{
// //     console.log(num * num);
    
// // }
// // square(5)




// // const add = (num1, num2) => console.log(num1 + num2);

// // add(5,7)



// // const add2 = (num1, num2) =>{
// //     console.log(num1 + num2);
    
// // }
// // add2(5,5)


// // const sum = ( a, b) => {
// //     console.log(a + b);
    
// // }
// // sum(100,100)


// // const data = function(num){
// //     console.log(num * num);
    
// // }
// // data(8, )


// // let access = function (){
// //     console.log("Hi Brothers");
// // }

// // access();

// function subtract(a, b) {
//   return a - b;
// }

// // console.log(subtract(10, 4)); // 6



// function divide(a, b) {
//   return a / b;
// }

// // console.log(divide(10, 2)); // 5


// function isPositive(num) {
//   if (num > 0) {
//     return true;
//   }
//   return false;
// }

// console.log(isPositive(5));  // true
// console.log(isPositive(-2)); // false


// const max = (a, b) => (a > b ? 'a' : 'b');

// console.log(max(15, 9));  // 15
// console.log(max(4, 20));  // 20


// const subtract = (a, b) => a - b;

// console.log(subtract(10, 4)); // 6
// console.log(subtract(5, 8));  // -3


const checkSign = num => (num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero");

console.log(checkSign(10));  // Positive
console.log(checkSign(-5));  // Negative
console.log(checkSign(0));   // Zero



// 9. Factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120


function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("JavaScript")); // 3

