// function init() {
//     let name = "Mozilla"; // name is a local variable created by init
//     function displayName() {
//       // displayName() is the inner function, that forms the closure
//       console.log(name); // use variable declared in the parent function
//     }
//     displayName();
//   }
//   init();

// Lexical Scope....................................................................................
// outer function ky ander jitny b inner function hon un sab ko outer function ka access hota hai.
// function outer(){
//     let username = "Abdul Rehman";
//     // console.log(secret); // yeh variable (secret) inner function main define kia gya hai. is ko hum outer ky ander access nai kar sakty. kio ky hum outer function ky ander inner function ko access nai kar sakty.
//     function innerOne(){
//         // let secret = my123; // is variable ka access sirf isi inner function ky pass hai. is ky ilawa or dosry inner function ky pass b nai hai. jo ky hamary is code main dosra innerTwo function hai.
//         console.log("innerOne", username);
//     }
//     function innerTwo(){
//         console.log("innerTwo", username);
//         // console.log(secret); // yeh b access nai ho ga.
//     }
//     function innerThree(){
//         console.log("innerThree", username);
//     }
//     innerOne()
//     innerTwo()
//     innerThree()
// }
// outer()
// console.log("too outer",username); isy b hum outer ky ander hi access kar sakty hain. outer ka bahir nai.

// Closures............................................................................................
// function makeFunc() {
//   const name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }

// const myFunc = makeFunc();
// myFunc();

// function outer(){
//     const username = "Abdul Rehman";
//     function inner(){
//         console.log(username);
//     }
//     return inner;
// }

// const myFunction = outer();
// outer();

  
  // ager hum ny parent function main 2 variables define kye (a and b) name sy. phir hum ny ik child function define kia us main hum ny (a) ko use kia lekin (b) ko nai kia. (b) ko hum ny parent function main hi use kia. tu ho ga kuch is tarah.
  // (a) variable ki memory create ho gi phir us main (a) ki value rakhy ga. phir (b) variable ki memory create ho us main (b) ki value ko rakhy ga. phir (b) console ho jye ga. phir hum ny jo (a) variable ko child function main use kia hai us ki memory wahan rahy gi. Phir jab hum child function ko return karyn gy tu (b) ki value delete ho jye gi lekin (a) ki value wahan rahy gi. wo delete nai ho gi. (a) ki value ka jo reference hai wo child function ko dy dya jye ga.
  
  // jo b variable hum use karty hain tu child function (inner function) aik closure bana leta hai. Closure ka matlb yeh hai ky jab function end ho jye ga to wo variables delete nai hoon gay wo memory main hi rahayn gay. or un ka reference jo b un main function tha us ko dy dya jye ga. ager hum us function ko return b kar dety hain tu us ka reference wahan rahy ga wo delete nai ho ga.
  //
  
  //
  
  // function parent() {
  //   const a = 10;
  //   function child() {
  //     console.log(a);
  //   }
  //   return child;
  // }
  // const y = parent();
  // console.dir(y);
  
  // function doSomething(){
  //   const username = "Abdul Rehman";
  
  //   function callBackFunction(){
  //     console.log(username);
  //   }
  //   console.dir(callBackFunction);
  //   setTimeout(callBackFunction, 2000)
  // }
  // doSomething()
  
  // function createOnceFunction() {
  //   let executed = false;
  
  //   return function () {
  //     if (!executed) {
  //       executed = true;
  //       console.log("Congratulations! you have called the function.");
  //     }
  //   };
  // }
  // const z = createOnceFunction();
  // console.dir(z);
  

// *****************************************************************************************************
// Headings Style.................................................
const h1 = document.querySelectorAll("h1");
console.log(h1);
h1[1].setAttribute("class", "title-style")
h1[2].setAttribute("class", "title-style")
h1[3].setAttribute("class", "title-style")
h1[4].setAttribute("class", "title-style") 
