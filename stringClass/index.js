// let a = "pie coding schools";
// let a = "35";
// let a = '89';
// let a = `pie 
// coding
//  schools`;

// console.log(a);
// console.log(typeof (a));

//empty strings:--

// let name1 = "";
// console.log(name1);
// console.log(typeof (name1));


//agar mujhe strign ka lenght find :--
// let name1 = "gaurav kumar";
// console.log(name1.length);

let firstname = "gaurav";
let lastname = "kumar";
let surname = "tiwari";


// let fullName = firstname + " " + lastname + " " + surname;
// console.log(fullName);

// let fullName = `${firstname} ${lastname} ${surname}`;
// console.log(fullName);

// let fullname = `fullname + lastname + surname`;
// console.log(fullname);

// let fullName = `${firstname + lastname}`;
// console.log(fullName)

// let name1 = new String("gaurav kumar tiwari");

// console.log(name1);
// console.log(typeof(name1));

// let name1 = "alok kumar";
// let name2 = "GAURAV";
// console.log(name1[5]);
// console.log(name1.toUpperCase());
// console.log(name2.toLowerCase());

// substring();

// let a = "pie coding school";
// a = a.substring(4);
// console.log(a);

//indexof();
// let name1 = "madam";
// console.log(name1.indexOf("a"));
// console.log(name1.lastIndexOf("a"));



// let name1 = "          gaurav "
// console.log(name1);
// console.log(name1.length);
// // console.log(name1.trim());
// // console.log(name1.trim().length);
// console.log(name1.trimStart());
// console.log(name1.trimStart().length);


// let a = "this is a sentence";
// let name1 = a.split("")
// console.log(name1);

// let fruits = "apple, banana, mango, orange, gra"
// let data = fruits.split(",");
// console.log(data);

// string ==> split(); ====array ====> operation appoly ====>join() === string;

// let name1 = "pie coding schools";
// let words = name1.split(" ");
// console.log(words);
// let finalWords = words.join("-");
// console.log(finalWords)

// slice(firstIndex, lastIndex)
// let name1 = "alok kumar";
// name1 = name1.slice(2);
// console.log(name1);



let a = "pie coding school";
//find length  of string 
console.log(a.length);

for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}

let str = "alok kumar";

let length1 = str.length;

console.log(str[0]);

console.log(str[length1 - 1]);


// let str = "madam"

// let reversed = "";

// for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
// }

// console.log(reversed);

// if (str === reversed) {
//     console.log("palidrome!");
// } else {
//     console.log("not palidrome");
// }

// find the frequency of a character

let str = "programming bshjdshdjsdhjmmmmm";
let target = "m";
let count = 0;

let lenght1 = str.length;
console.log(lenght1);

for (let i = 0; i < str.length; i++) {

    if (str[i] === target) {
        count++;

    }
}

console.log("count", count);



