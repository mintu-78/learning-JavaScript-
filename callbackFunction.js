function callbackFunction(){
    console.log("Good bye");
    
}

function myFunction(a){
    console.log("history");
    
    a()
}

myFunction(callbackFunction)