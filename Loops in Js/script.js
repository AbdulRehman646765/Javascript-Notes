// while loop........................................................................................

// let i = 10
// while(i > 0){
//     console.log(i);
//     i--
// }

// let i = 1;
//  while(i <= 10){
//     console.log(i * 2);
//     i++
//  }

// const friendsName = ["Ali Hassan", "Bilal Hassan", "Qasim Hussain", "Usman Ali", "Saad Shabeer"]
// let i = 0;
// while (i < friendsName.length) {
// console.log(`${i + 1}. ${friendsName[i]}`);
// i++
// }

// For loop........................................................................................

// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }

// for(let i = 1; i <= 50; i++){
//    console.log(`${i * 2}`);
// }

// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }

// Math Tables.........................................
// for (let i = 1; i <= 20; i++) {
//   console.log("");
//   console.log(`Table Number ${i}`);
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// Do While loop........................................................................................

// let i = 1
// do {
//     console.log(i);
//     i++
// } while (i <= 5);

// For of loop........................................................................................
// for of loop use a Array..........................

// const fruits = ["Apple", "Banana", "Peach", "Mango", "Water Melon"]

// for loop main hamy damag lagana parta hai ky "0" sy start karna hai or length ky equal yan less rakhna hai.
// or for of loop main hamara kaam kuch asan ho jata hai hamy yeh sab kuch mansion nai karna parta.

// for loop..........................................
// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// console.log("");

// for of loop....................................
// for (const fruit of fruits){
//   console.log(fruit);
// }

// for of loop use a String..........................
// const username = "Abdul Rehman";
// for(letter of username){
//   console.log(letter);
// }

// for in loop............................................................................................
// const person = {
//   firstName: "Abdul",
//   lastName: "Rehman",
//   age: 24,
//   eyeColor: "Black",
//   city: "Gujrat"
// }
// for(const key in person){
//   console.log(key, ":" ,person[key]);
// }

// console.log(""); ///////////////////////////////////////////////////

// const personKeys = Object.keys(person)
// console.log(personKeys);

// console.log(""); //////////////////////////////////////////////////

// for(const key of personKeys){
//   console.log(key);
// }

// console.log(""); ////////////////////////////////////////////////////

// const personValues = Object.values(person)
// console.log(personValues);

// console.log(""); //////////////////////////////////////////////////////

// for(const value of personValues){
//   console.log(value);
// }

// console.log(""); //////////////////////////////////////////////////////

// const personEntries = Object.entries(person)
// console.log(personEntries);

// ForEach() array Method...............................................................................
// const books = ["Urdu", "English", "Islamic Studies", "Physics", "Chemistry"];
// const abc = books.forEach((book) => {
//   console.log(book.toUpperCase());
//   return books;
// });

// console.log(abc);

// const animals = ["Horse", "Cat", "Dog", "Tiger", "Lion"]; 

// function abc(el){
//   console.log(el)
// }
// animals.forEach(abc)


// const vegetables = ["Potato", "Cucumber", "Beetroot", "Garlic", "Ginger"];
// const sample = vegetables.forEach((vegetable) => {
//   console.log(vegetable);
//   return vegetable;
// });
// console.log(sample);


// *****************************************************************************************************
// Headings Style.................................................
const h1 = document.querySelectorAll("h1");
console.log(h1);
h1[1].setAttribute("class", "title-style")
h1[2].setAttribute("class", "title-style")
h1[3].setAttribute("class", "title-style")
h1[4].setAttribute("class", "title-style") 
h1[5].setAttribute("class", "title-style") 
h1[6].setAttribute("class", "title-style") 
h1[7].setAttribute("class", "title-style") 
