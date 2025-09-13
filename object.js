const collage = {
    name: "Aisect University Hazaribag",
    city: "Hazaribag",
    course: "BCA",
    admissionFee: 20000 ,
    collageTime: "10Am to 3Pm",
    facility: "library",
    distance: "15km"
}

//*********access *********//

// console.log(collage["name"]);
// console.log(collage["pin code"]);



//*********update *********//

// collage.name = "Rajeev" //using (.) notaion
// collage["height"] = 5.8 // using brakets [] notation

// console.log(collage);


//*********adding new properties *********//

// collage.city = "patna" //using (.) notaion
// collage["state"] = "Bihar" // using brakets [] notation
// console.log(collage);



//*********Deleting object *********//


// delete collage.facility  //using (.) notaion
// delete collage["facility"] // using brakets [] notation

// console.log(collage);

//*********checking if a property exist or not*********//

console.log("xyz" in collage); //false
console.log(collage.hasOwnProperty("name")); //true











