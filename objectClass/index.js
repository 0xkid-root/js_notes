// let students = {};


let students = {
    name: "alok kumar", // together represents a property 
    age: "23",
    email: "alokkumar@facebook.com",
}
// console.log(students);
// const student1 = new Object();
// student1.name = "alok kumar";
// student1.email = "alokkumar@gamil.com";

// console.log(student1);

//   dot notation :-
// console.log(students.name);
// console.log(students.age);

// bracket notation :- 
// console.log(students["name"]);
// console.log(students["age"]);



let userInfo = {
    name: "alok",
    "last name": "kumar",
    email: "alokkumar@facebook.com",
    age: "23",
    "mobile number": "9876543210",
    isLogging: true,
}
// console.log(userInfo["last name"]);
// console.log(userInfo["mobile number"])

let obj1 = {
    name: "john",
    email: "john@gmail.com",
    age: "35"
}
// console.log(obj1);
obj1.email = "johndone1234@gmail.com";
// console.log(obj1);
delete obj1.email;
// console.log(obj1);

let userInfo1 = {
    name: "alok kumar",
    email: "piecodinschoool@gmail.com",
    github: "https://github.com/0xkid_root",
    isLogged: false,
    greeting: function () {
        console.log("hello good morning");
    },
    greetingTwo: function () {
        console.log(`hello good morning ${this.name} ${this.email}`);
    },
    skills: ["java", "mysql", "javascript", "C", "DBMS"]

}
userInfo1.email = "piecodingschool1223@gmail.com";

// console.log(userInfo1);

// Object.freeze(userInfo1);

userInfo1.name = "Jay Shree Ram";
// console.log(userInfo1);

// console.log(userInfo1.greeting);
// console.log(userInfo1.greeting());
// console.log(userInfo1.greetingTwo());

// console.log();
// console.log(userInfo1);

// console.log(userInfo1.skills[3]);


// nested obejct

const finaluser = {
    email: "rohanpanday@gmaill.com",
    fullName: {
        userFullname: {
            firstName: "rohan",
            lastName: "panday",
        }

    }
}

// console.log(finaluser);

// console.log(finaluser.fullName?.userFullname)

let obje1 = {
    a: "1",
    b: 2,

}
let obje2 = {
    c: 5,
    d: 10
}

// const obj3 = { obje1, obje2 };
// console.log(obj3);
const obj3 = { ...obje1, ...obje2 }
// 

const object1 = {
    name: "gaurav",
    age: 23,
}

const object2 = {
    name: "rahul",
    city: "Lucknow",

}

const object3 = { ...object2, ...object1 };
console.log(object3);

console.log(Object.keys(object3))
console.log(Object.values(object3))


const user = [

    {
        name: "gauravKumar",
        email: "gaurav@gmail.com",
    },
    {
        "name": "alokkumar",
        "email": "alokkumar@gamil.com",
        "age": 23,
    }
    ,
    {
        name: "vikas kumar",
        email: "vikas@gamil.com",
        age: 24,
    }

]



