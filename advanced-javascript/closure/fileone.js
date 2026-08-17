//closures: a closure is a function that has access to its own scope and the scope of its outer funcitons.
//closures are useful for creating private variables and functions that can be accessed only within a specific scope.

function outer(){
    let x = 10;
    function inner(){
        console.log(x);
    }
    return inner;
}

const innerFunc = outer();
innerFunc();
//output: 10

//callback function being used in closure 
function map(arr, callback){
    const result = [];
    for (let i=0; i <arr.length;i++){
        result.push(callback(arr[i]))}
        return result;
    }

const numbers = [1,2,3,4,5,6,7,8,9,10];
const doubledNumbers = map(numbers, (x) => x *2);
console.log(doubledNumbers);

//benefits of closures 
// encapsulation, abstraction, modularity, flexibility

//closures and higher order functions are powerful concepts in javascript
//  that enable developers to write more efficient nad scalable code
// developers create more modular, fleible and maintainable code
//  that is easier to test and debug
