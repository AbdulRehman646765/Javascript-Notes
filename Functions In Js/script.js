// // Function Definition................
// function UserIntro() {
//   console.log("Hi!");
//   console.log("My Name is Abdul Rehman");
//   console.log("I'm a Web Developer.");
// }
// // Function Call................
// UserIntro()

// // Function example with Default Parameters....................................................
// function introduceMe(username = "Procoder", skill = "Professional", age) {
//   // console.log("Hi!");
//   console.log(`My Name is ${username}.`);
//   console.log(`I'm a ${skill}.`);
//   console.log(`I'm ${age} Years Old.`);
// }

// introduceMe("Abdul Rehman", "Web Developer", "23")
// introduceMe("Bilal Hassan", "Software Engineer", "26")
// introduceMe()

// Return Value in JS.............................................................................
// function subjects(urdu,english,math,physics,chemistry) {
//   const margeSubjects = urdu+english+math+physics+chemistry;
//   return margeSubjects;
// };
// const sumMarks = subjects(100,90,80,80,90);
// console.log("Marks Obtain - "+ sumMarks); // The Result is "Marks Obtain - 440"

// function percentage(totalMarks){
//   const marksResult = totalMarks/500*100;
//   return marksResult;
// }
// const finalResult = percentage(sumMarks);
// console.log("Your Marks is " + finalResult + "%"); // The Result is "Your Marks is 88%"

// Return Example..................................................................................
// function addTwoNumbers(a, b){
//   return a+b;
// }
// const result = addTwoNumbers(addTwoNumbers(8,12), addTwoNumbers(4,6));
// console.log(result);

// Execution Context in JavaScript..................................................................
// const username = "Abdul Rehman";
// const userAge = 23;
// console.log(username, userAge);

// function sayHi(){
//   console.log("Hi!");
// }
// console.log(sayHi());

// What is Hoisting in JS...........................................................................
// Function Definition..............................................................................
// Function Declaration.............................................................................
// function books(){
//   console.log("Urdu", "English", "Math", "Physics", "Chemistry");
// }
// books()

// // This is also the definition of a Function........................................................
// // Function Expression..............................................................................
// var codingLang = function(){
//   console.log("Html", "Css", "JavaScript", "Python");
// }
// codingLang()

// // jis Function ko koi Naam na dia ho usy "(Anonymous Function)" kehty hain. jesy ky yeh below example main clear ho jye ga.
// var codingLang = function(){
//   console.log("Html", "Css", "JavaScript", "Python");
// }
// codingLang()

// // Lexical Scope & Block Scope........................................................................
// const username = "Abdul Rehman";
// const userAge = 23

// function subtract(){
//   const x = 18
//   const y = 12
//   console.log(x-y);
// debugger
//   function child(){
//     const childName = "Golu"
//     console.log(childName);
//   }
//   child()
// }
// subtract()

// // Block Scope.......................................................................................
// {
//   const book = "English";
//   console.log(book);
// }

// Higher Order and Callbacks Functions.................................................................

// // Higher Order Function..............................................
// function sample(b){
//   console.dir(b);
//   b()
// }

// // Callback Function..................................................
// function sayHi(){
//   console.log("Salam");
// }

// sample(sayHi)

// // Callback Function..................................................
// // Anonymous Function.................................................
// sample(function (){
//   console.log("Hello");
// })

// Difference between Methods and Function...............................................................
// const maths = {
//   E: 5787689873297403,
//   add: function (a, b) {
//     return a + b;
//   },
//   square: function (num) {
//     return num * num;
//   },
//   subtract: function (a, b) {
//     return a - b;
//   },
//   multiple(a, b) {
//     return a * b;
//   },
//   cube: function(num){
//     // return num * num * num
//     return num ** 3
//   }
// };

// Arrow Functions...................................................................................................
// // Explicit Return........................................
// add = (a,b) => {
//   return a + b;
// }

// // implicit Return........................................
// const add = (a,b) => a + b;

