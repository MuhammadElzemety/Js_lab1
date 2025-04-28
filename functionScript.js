function printVariables(value1, value2, value3) {
    localVar = 3;
    testingVar = 5; 
    
    console.log(localVar);
    console.log(testingVar);
    
    console.log(arguments);
    
    return [value1, value2, value3];
}


var printVariables = function(value1, value2, value3) {
    localVar = 3;
    testingVar = 5; 

    console.log(localVar);
    console.log (testingVar);
       
    console.log(arguments);
    
    return [value1, value2, value3];
};


function addNumbers(num1 = 0, num2 = 0) {

        if (isNaN(num1) || isNaN(num2)) {
          console.log("not valid");
        }
    

    return num1 + num2;
}