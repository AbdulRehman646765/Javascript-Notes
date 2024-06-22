// Arguments Keyword in JavaScript.......................................................................

// Named Function.............................................................
// jab hum function ko call karyn gy tu us main pehle parameters ka result aye ga phir array like object aye ga.
// function add(a,b){
// 	console.log(arguments);
// 	console.log(a+b);
// }
// add(5,6)

// Anonymous Function..........................................................
// Ager hum ny jitny b parameters define kye un sy ziaada arguments pass karyn. tu jitny parameters define kye un ka tu result aa jye ga or baqi arguments skip ho jyen gy.
// const subtract = function(a,b){
// 	console.log(arguments);
// 	console.log(a-b);
// }
// subtract(10,8,7,9)

// Ager arguments ko access karna ho...............................................
// function subtract() {
// 	console.log(arguments[0]);
// 	console.log(arguments[1]);
// 	console.log(arguments[2]);
// 	console.log(arguments[3]);
// }
// subtract(7,2,8,5)

// Argument Keyword example with for loop...........................................
// function add() {
//   let sum = 0
//   for (let i = 0; i < arguments.length; i++) {
//   sum += arguments[i];
//   }
//   return sum;
// }
// const result = add(10,20,500,120,100,36);
// console.log(result); 


// Arrow Function...................................................................
// const square = (num) => {
//   console.log(arguments);
//   console.log(num * num);
// }
// square(12)


function add(a,b){
  console.log(a + b);
  Array.from(arguments)
}
const result =  add(10,7)
console.log(result);