//forEach//



// let arr = [1,3,3,4,6,5]

// // arr.forEach( (currentValue , index, array) => {
// //     console.log(currentValue, '-', index, '-', array);
    
// // })

// arr.forEach((currentValue) => {
//     console.log(currentValue );
    
// })



//map//




// let arr = [2,3,4,5,6,7]
//  const val2 = arr.map((currentValue) => {
//     return currentValue * 2;
//  })
//  console.log(val2);
//  console.log(arr);



//filter//



// let age = [22,17,28,35,11,15]

// const eligibleAgelist = age.filter((currentValue) => {
//     if(currentValue > 18){
//         return currentValue
//     }
// })

// console.log(eligibleAgelist);




 
 //reduce//


 let marks = [70,75,80,85,90]

 const totalmarks = marks.reduce((accumulatar, currentValue,index, array) =>{
    accumulatar = accumulatar + currentValue;
    return accumulatar;
 },10)

 console.log(totalmarks);
 