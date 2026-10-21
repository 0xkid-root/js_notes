const student = [
    {
        id: 101,
        name: "gaurav kumar",
        age: 19,
        course: "react",
        skills: ["HTML", "CSS", "javascript"],
        marks: 85,
        city: "Lucknow",
        isPlaced: false,
    },

    {
        id: 102,
        name: "alok kumar",
        age: 23,
        course: "node ",
        marks: 85,
        city: "Delhi",
        isPlaced: true,
    },

    {
        id: 103,
        name: "mohit kumar",
        age: 22,
        course: "Full stack",
        skills: ["javascript", "node js", "MongoDB"],
        marks: 82,
        city: "Mumbai",
        isPlaced: false,
    },

    {
        id: 104,
        name: "john kumar",
        age: 19,
        course: "java",
        marks: 75,
        city: "pune",
        isPlaced: true,
    },
    {
        id: 105,
        name: "rohit kumar",
        age: 19,
        course: "java",
        skills: ["java", "spring"],
        marks: 79,
        city: "pune",
        isPlaced: true,
    },
    {
        id: 106,
        name: "vikas kumar",
        age: 19,
        course: "java",
        skills: ["java", "spring", "react", "javascript"],

        marks: 89,
        city: "pune",
        isPlaced: true,
    },
    {
        id: 106,
        name: "anjali kumari",
        age: 19,
        course: "java",
        skills: ["java", "spring", "react", "javascript"],
        marks: 67,
        city: "pune",
        isPlaced: true,
    },
    {
        id: 107,
        name: "virat kumar",
        age: 22,
        course: "react",
        skills: ["HTML", "CSS", "Javascript", "REACT"],
        marks: 82,
        city: "Mumbai",
        isPlaced: false,
    },
    

];



// find a student id whose id is 104;
// find, filter, map 

// let result = student.find((value) => {
//     let result = value.id === 104;
//     return result;
// })

// console.log(result);


// find marks above 85;


// let result = student.filter((elements) => {
//     let result = elements.marks >= 85;

//     return result;

// });

// console.log(result);

// let result = student.filter((elements) =>

//     elements.course === "react"

// )

// let answer = result.map((value) => {
//     let name1 = value.name;
//     return name1;

// })

//marks react develoepr ka 

// let marksReact = result.map((value)=>{
//     let marks1 = value.marks;
//     return marks1;

// })
// console.log("marks of the react develoepr",marksReact)
// console.log(answer);
// console.log(result);


// Question 1:- gets all student names




// let result =  student.map(value=>value.name

// )

// console.log(result);



// get names of students scoring above 80 ?


// let result = student.filter((value) => {

//     let result = value.marks >= 80
//     return result;

// }).map((value) => {
//     return value.name
// })

// console.log(result);

// let result = student.filter(value=>value.marks > 80).map(value=>value.name);

// console.log(result);

// create new array  contain only names and marks 

// let result = student.map((value) => {
//     return {
//         name: value.name,
//         marks: value.marks,



//     };
// })

// console.log(result);

// let arr1 = ["mango", "apple", "orange", "banana"];

// const result1 = arr1.includes("kiwi");
// console.log(result1);



let result = student.filter((value) => {
    let result = value.skills?.includes("javascript");
    return result;

})

console.log(result);