let outerVariable = "hello global" //global variable

function grandParent(){
    let a = 5;
    //console.log(outerVarible);

    function parent(){
        let b = 10;
        function child (){
            let c = 15;
            // console.log(a); //access from grandparent
            // console.log(b); //access from parent 
            // console.log(c); //access from local

            console.log(outerVariable);
        }
        child()
            // console.log(a); //access from grandparent
            // console.log(b); //access from local
            // console.log(c); //not accessible from child
    }

    parent()

            // console.log(a); //access from local
            // console.log(b); //not accessible from parent
            // console.log(c); //not accessible from child

}

grandParent()