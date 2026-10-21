// function sayhello() {
//     console.log("hello Pie coding schools");
//     console.log("hello good morning");
// }


// sayhello();


// sayhello();


// let a = 20;
// let b = 30;
// let sum = a + b;
// console.log(sum);

// function add(a,b){
//     console.log(a+b);
// }

// add(10,20);
// add(50,30);

// for (i = 0; i <= 5; i++) {
//     console.log(i);
// }

// function sayhello() {
//     console.log("hello pie coding ");
// }

// function welcome() {
//     console.log("welcome to pie coding schools");
// }


// welcome();

// function printNumber(number) {
//     console.log(number);
// }

// printNumber(5);

// function getSum(a,b) {
//     console.log(a + b);
// }


// getSum(23, 9);
// getSum(20, 30);


// function getMultiply(a, b) {
//     // let result = a * b;
//     return a*b ;
// }


// let answer = getMultiply(10, 20);

// console.log(answer);



// function getAverage(num1, num2) {
//     // let average = num1 + num2 / 2;
//     return num1 + num2 / 2;
//     return num1*num2;



// }

// let answer = getAverage(30, 49);
// console.log(answer);

// const getMultiply = function (a, b) {
//     let result = a * b;
//     return result;
// }

// let answer = getMultiply(12,10);

// ;


// console.log(getMultiply(12, 10));
// // console.log(answer);



// const getSquare = (a, b) => a ** b;


// let answer = getSquare(4, 3);
// console.log(answer);

// const getSum = function (a = 0, b = 10) {
//     let result = a + b;
//     return result;


// }
// const answer = getSum();
// const answer1 = getSum(32);
// const answer2 = getSum(23, 0);
// console.log(answer);
// console.log(answer1);
// console.log(answer2)

// function calculate(a,b,operation){
//     return operation(a,b);
// }

// const add = (a,b) => a+b;
// const multiply = (a,b)=> a*b;

// console.log(calculate(20,10,add));


// one function call another fucntion 

// function add(a, b) {
//     return a + b;
// }

// function multiply(a, b) {
//     let result = a * b;
//     return result;

// }

// function calculate() {
//     return add(5, 3);
// }

// function findcalculate() {
//     return multiply(5, 3);
// }
// console.log(calculate());
// console.log(findcalculate());

//higher order function

//passing a fucntion as an arguemnt 

// function add(a, b) {
//     return a + b;
// }

// function calculate(X) {
//     return X(5, 3);

// }

// console.log(calculate(add));
// let a = "alok kumar";
// a[0] = "s";
// console.log(a);
// console.log(a.toUpperCase());
// let name = "alok kumar";
// let oldName = name;
// console.log(oldName);

// name = name.toUpperCase();
// console.log(name);



// const getSquare = (num) => {
//     return num * num;
// }

// let answer = getSquare(10);
// console.log(answer);

// const reverseString = (str) => {
//     //body
//     let result = str.split("").reverse().join("");
//     return result;
// }

// const answer = reverseString("alok");
// console.log(answer);




function createMultiply(multiplier) {
    return function (number) {
        return number * multiplier;
    }
}

const square = createMultiply(4);
console.log(square(5))

