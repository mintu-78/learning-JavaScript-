function fun1(){   //parent function

    let a = 3;   //parent variable
    console.log(a);
    

    function fun2(){  //child function
    let b = 5;
    console.log(b);  //access from local variable
    console.log(a);  //access from parent variable
    }
    fun2();
    console.log(b);  //cannot access from child variable
}
fun1();