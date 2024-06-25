// Switch Statement ...................................................................
// Example...................................................................
// const dayNumber = 9;
// switch (dayNumber) {
//   case 0:
//     console.log("It is Sunday Today.");
//     break;
//   case 1:
//     console.log("It is Monday Today.");
//     break;
//   case 2:
//     console.log("It is Tuesday Today.");
//     break;
//   case 3:
//     console.log("It is Wednesday Today.");
//     break;
//   case 4:
//     console.log("It is Thursday Today.");
//     break;
//   case 5:
//     console.log("It is Friday Today.");
//     break;
//   case 6:
//     console.log("It is Saturday Today.");
//     break;
//   default:
//     console.log("Please Enter a Valid Day Number.");
// }

// Another Example.....................................................................
// // const prompt = require('prompt-sync')();
// const username = prompt("Please Enter Your Name.") || "Chaudhary";
// const userAge = parseInt(prompt("Please Enter Your Age.")) || 23;

// console.log(`Name: ${username}`);
// console.log(`Age: ${userAge}`);

// switch (true) {
//   case userAge < 0:
//     console.log("Please Enter a Valid Age.");
//     break;
//   case userAge >= 0 && userAge <= 4:
//     console.log(`${username} is a Kid.`);
//     console.log("This Age is Playing Age.");
//     break;
//   case userAge >= 5 && userAge <= 18:
//     console.log(`${username} is a School Student.`);
//     console.log("He/She Study in Jinnah Public School.");
//     break;
//   case userAge >= 18 && userAge <= 21:
//     console.log(`${username} is a College Student.`);
//     console.log("He/She Study in Punjab College.");
//     console.log("He/She Learning in Computer Science.");
//     break;
//   case userAge >= 21 && userAge <= 26:
//     console.log(`${username} is a University Student.`);
//     console.log("He/She Study in UOG (University Of Gujrat).");
//     break;
//   case userAge >= 26 && userAge <= 50:
//     console.log(`${username} is a Working Professional.`);
//     console.log("He/She is a Software Engineer.");
//     console.log("He/She Work in Devsinc Company.");
//     break;
//   default:
//     console.log(`${username} is a Software Engineer Retired.`);
//     console.log("He/She was a Working Professional.");
// }
// console.log("Thank You Dear User!");
  

// *****************************************************************************************************
// Headings Style.................................................
const h1 = document.querySelectorAll("h1");
console.log(h1);
h1[1].setAttribute("class", "title-style")
h1[2].setAttribute("class", "title-style")
