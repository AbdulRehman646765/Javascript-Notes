// Syntax Of Ternary Operators
// const variableName = condition ? exprIfTrue : exprIfFalse;

// const username = 5 > 4 ? "Abdul Rehman" : "Bilal Hassan";
// console.log(username); // The Result is "Abdul Rehman"

// const gender = "M"
// const userMessage = `${gender.toLocaleLowerCase() === "m" ? "He" : "She"} Study in a College.`
// console.log(userMessage); // The Result is "He Study in a College." This True Condition

// const gender = "M"
// const userMessage = `${gender === "a" ? "He" : "She"} Study in a College.`
// console.log(userMessage); // The Result is "She Study in a College." This False Condition
  

// *****************************************************************************************************
// Headings Style.................................................
const h1 = document.querySelectorAll("h1");
console.log(h1);
h1[1].setAttribute("class", "title-style")
h1[2].setAttribute("class", "title-style")
