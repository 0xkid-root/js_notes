// remove duplicate elements from an array 

// const arr1 = [10, 20, 10, 30, 40, 10, 20, 10, 10];

// let result = arr1.filter((value, index) => {
//     return arr1.indexOf(value) === index;

// })

// console.log(result);



// const arr1 = [10, 20, 10, 30, 40, 10, 20, 10, 10];
// console.log(arr1.length);

// let sum = 0;

// for (let i = 0; i < arr1.length; i++) {
//     sum = sum + arr1[i];

// }

// console.log(sum)

// find the second laregt elements in array 

// const number = [10, 45, 20, 80, 60];

// let largest = number[0];
// let secondLargest = number[0];
// // let thirdLargest = number[0];

// for (let i = 0; i < number.length; i++) {

//     if (number[i] > largest) {
//         secondLargest = largest;
//         largest = number[i];
//     }

//     else if (number[i] > secondLargest) {
//         secondLargest = number[i];
//     }
// }
// console.log("second Largest Number", secondLargest);
// console.log("first largest number is here:", largest);

let arr = ["hello", "alok", "aakriti", "ram", "pie"];

let result = arr.map((value) => {
    return value.split("").reverse().join("");

})
console.log(result)