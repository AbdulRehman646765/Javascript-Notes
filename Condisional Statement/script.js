// // const prompt = require('prompt-sync')();
// let a = prompt("Enter your Marks and Check your Grade?");
// a = Number.parseInt(a);
// console.log(typeof a);
// // 90 to 100
// if(a>89 && a<101){
//     console.log("Amna's grade is A+.");
//     console.log("your Marks Grade is A+")
//     console.log("Excellent!")
// }
// // 85 to 89
// else if(a>84 && a<90){
//     console.log("your Marks Grade is A")
//     console.log("Excellent!")
// }
// // // 80 to 84
// else if(a>79 && a<85){
//     console.log("your Marks Grade is A-")
//     console.log("Very Good!")
// }
// // // 75 to 79
// else if(a>74 && a<80){
//     console.log("your Marks Grade is B+")
//     console.log("Very Good!")
// }
// // // 70 to 74
// else if(a>69 && a<75){
//     console.log("your Marks Grade is B")
//     console.log("Very Good!")
// }
// // // 65 to 69
// else if(a>64 && a<70){
//     console.log("your Marks Grade is C+")
//     console.log("Good!")
// }
// // // 60 to 64
// else if(a>59 && a<65){
//     console.log("your Marks Grade is C")
//     console.log("Good!")
// }
// // // 55 to 59
// else if(a>54 && a<60){
//     console.log("your Marks Grade is D+")
//     console.log("Passable!")
// }
// // // 50 to 54
// else if(a>49 && a<55){
//     console.log("your Marks Grade is D")
//     console.log("Passable!")
// }
// // // 40 to 49
// else if(a>39 && a<50){
//     console.log("your Marks Grade is E")
//     console.log("Failure!")
// }
// else{
//     console.log("You are Fail")
// }



// // const prompt = require('prompt-sync')();
// let a = prompt("Hey whats your age?")
// a = Number.parseInt(a); // Converting the string to a number
// // console.log(typeof a);
// if(a<=0){
//     console.log("This is an invalid age");
// }
// else if(a<9){
//     console.log("You are a kid and you cannot even think of driving");
// }
// else if(a<18 && a>=9){
//     console.log("You are a kid and you can think of driving after 18")
// }
// else{
//     console.log("You can now drive as you are above 18");
// }
// console.log("You can", ( a<18 ? "Not Drive" : "Drive"));



// // const prompt = require('prompt-sync')();
// const username = prompt("please Enter Your Name.") || "Chaudhary";
// const userAge = parseInt(prompt("please Enter Your Age.")) || 23;

// console.log(`Name: ${username}`);
// console.log(`Age: ${userAge}`);

// if(userAge <0){
//     console.log("Please Enter a Valid Age.");
// }

// else if(userAge >=0 && userAge <=4){
//     console.log(`${username} is a Kid.`);
//     console.log("This Age is Playing Age.");
// }

// else if(userAge >=5 && userAge <=18){
//     console.log(`${username} is a School Student.`);
//     console.log("He/She Study in Jinnah Public School.");
// }

// else if(userAge >=18 && userAge <=21){
//     console.log(`${username} is a College Student.`);
//     console.log("He/She Study in Punjab College.");
//     console.log("He/She Learning in Computer Science.");
// }

// else if(userAge >=21 && userAge <=26){
//     console.log(`${username} is a University Student.`);
//     console.log("He/She Study in UOG (University Of Gujrat).");
// }

// else if(userAge >=26 && userAge <=50){
//     console.log(`${username} is a Working Professional.`);
//     console.log("He/She is a Software Engineer.");
//     console.log("He/She Work in Devsinc Company.");
// }

// else{
//     console.log(`${username} is a Software Engineer Retired.`);
//     console.log("He/She was a Working Professional.");
// }

// console.log("Thank You Dear User!");


// Odd and Even Number Define.................................................................
// let num = prompt("Number")
// num = Number.parseInt(num);
// if(num%2 == 0){
//     console.log("This Number is even");
// }
// else{
//     console.log("This Number is odd");
// }


// *****************************************************************************************************
// Headings Style.................................................
const h1 = document.querySelectorAll("h1");
console.log(h1);
h1[1].setAttribute("class", "title-style")
h1[2].setAttribute("class", "title-style")