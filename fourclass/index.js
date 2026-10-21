// for ()

//     syntax 

//     for(){
//         logic//
//         body// code 
//     }
//     initialization ;
//     condition ;
//     update/increment;

//     for(initialization; condition;update){

//         //body
//         //logic



//     }

// for (let i = 1; i <= 10; i++) {

//     if (i === 3) {
//         continue;
//     }
//     console.log(i);
// }

// print 1 to 5;



// let i = 1;
// while (i < 10) {

//     if (i === 6) {
//         break;
//     }
//     console.log(i);
//     i++;


// }


//do while loop

// let i = 11;
// do {

//     console.log(i);
//     i++;
// } while (i <= 10);




// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log("even", i);;
//     }
// }

// let sum = 0;
// for (let i = 1; i <= 30; i++) {
//     sum = sum + i;

// }

// console.log("sum of 1 to 10 number:", sum);

// let num = 58392;
// let digit = 0;
// while (num > 0) {
//     num = Math.floor(num / 10);
//     digit++;
// }
// console.log(digit);


let num = 1234; 
// 54321
let reverse = 0;
while (num > 0) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);

}




console.log(reverse);