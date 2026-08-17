let name = 'John Doe';const age = 30;
var occupation = 'Software Developer';


let num = 10;
let str = 'hello owlrd, this is basic javascript, im a noob never heard of this before. ';
let nullValue = null;
let undefinedValue; //undefined hell no


//declaring object
let obj = {name: 'John Doe', age:30};

let array = [1,2,3,4,5];

let x = 10;
let y = 20;

console.log(x+y);
console.log(x - y);
console.log(x * y);
console.log(x/y);


//logical operators very basic javascript
console.log(x && y);
console.log(x  || y);
console.log(!x);

// conditional statements

let x = 20;
if(x > 5){
    console.log('x is greater than 5');
} else{
    console.log(' x is less than or equal to 5');
}


//switch statements

let colour = 'red';
switch(colour){
    case 'red':
        console.log('The colour is red');
        break;
    case 'blue':
        console.log('The colour is blue');
        break;
    default:
        console.log('The colour is not red or anything else');
}

//loops

for (let i = 0; i<5 ; i++){
    console.log(i);
}
//while loop

let i = 0;
while (i<5){
    console.log(i);
    i++;
}

//do while

let i = 0;
do{
    console.log(i);
    i++;
} while(i<5);

//jump statements (new)
for (let i = 0; i < 5; i++){
    if (i === 3){
        break;
    }

}

//functions
function greet(name){
    console.log("Hello, ${name}")
}
greet('John Doe')