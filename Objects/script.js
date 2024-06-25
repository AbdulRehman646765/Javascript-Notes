// Object Literals...............................................................

// Syntax
// const variableName = {
//   Property: PropertyValue,
//   Property: PropertyValue
// }

// const user = {
//     firstName: "Abdul",
//     lastName: "Rehman",
//     fatherName: "Muhammad Mehdi",
//     age: 23,
//     isEducate: true,
// }
// console.log(user); // The Result is "{firstName: 'Abdul', lastName: 'Rehman', fatherName: 'Muhammad Mehdi', age: 23, isEducate: true}"

// const myIntro = {
//     firstName: "Abdul",
//     lastName: "Rehman",
//     age: 23
// }
// // You can access object properties in two ways:
// console.log(myIntro.firstName); // Dot Notation
// console.log(myIntro["firstName"]); // Square Bracket Notation

// object into object.............................
// const userIntro = {
//     firstName: "Abdul",
//     lastName: "Rehman",
//     age: 23,
//     city:{cityName: "Gujrat", postalCode: 50700, province: "Punjab"}
// }
// console.log(userIntro);

// add new property after make object......................................
// const userIntro = {
//     username: "Abdul Rehman",
// }
// userIntro.fatherName = "Muhammad Mehdi";
// userIntro.age = 23;
// console.log(userIntro); // The Result is "{username: 'Abdul Rehman', fatherName: 'Muhammad Mehdi', age: 23}"

// Delete property after make object......................................
// const userIntro = {
//     username: "Abdul Rehman",
//     age: 23,
//     phoneNumber: "0340 3148438"
// }
// delete userIntro.phoneNumber
// // Before Delete Result
// console.log(userIntro); // The Result is "{username: 'Abdul Rehman', age: 23, phoneNumber: '0340 3148438'}"
// // After Delete Result
// console.log(userIntro); // The Result is "{username: 'Abdul Rehman', age: 23}"

// Object.seal()..........................................................
// Object.seal() property sy na koi property add ho gi or na hi delete ho gi. magar kisi b property ko change kar sakty hain.

// const userIntro = {
//     firstName: "Abdul",
//     lastName: "Rehman",
//     age: 23,
// }
// Object.seal(userIntro)
// userIntro.lastName = "Qadeer" // This Change Property
// delete userIntro.lastName // This Delete Property
// userIntro.isGraduate = true // This Add New Property
// console.log(userIntro);

// Object.freeze().......................................................
// Object.freeze() property sy na koi property add ho gi na hi delete ho gi or na hi change ho gi.

// const userIntro = {
//     firstName: "Abdul",
//     lastName: "Rehman",
//     age: 23,
// }
// Object.freeze(userIntro)
// userIntro.lastName = "Qadeer" // This Change Property
// delete userIntro.age // This Delete Property
// userIntro.isGraduate = true // This Add New Property
// console.log(userIntro);

// in keyword in JavaScript
// const user = {
//     firstName: "Abdul",
//     lastName: "Rehman",
//     age: 23
// }
// "Abdul" in user
// console.log(user);
// console.log("firstName" in user);  // Result is "True"
// console.log("phoneNumber" in user); // The Result is "False"


// *****************************************************************************************************
// Headings Style.................................................
const h1 = document.querySelectorAll("h1");
console.log(h1);
h1[1].setAttribute("class", "title-style")
h1[2].setAttribute("class", "title-style")
h1[3].setAttribute("class", "title-style")
h1[4].setAttribute("class", "title-style") 
h1[5].setAttribute("class", "title-style") 
