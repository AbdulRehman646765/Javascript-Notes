// Map Method..............................................................................................

// // ager hum kuch b return nai karyn gy tu return main aik array aye ga jis main har value ko undefined print kary ga.
// const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",];
// const mapExample = days.map((day) => {
//     console.log(day);
// });
// console.log(mapExample);

// // is main hum ny days ko upperCase return kia hai. jis ki return value mapExample variable main save hai. ager hum is variable ko access karyn gy tu return value show ho gi.
// const days = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
//   "Sunday",
// ];
// const capitalMonths = days.map(function (day) {
//   console.log(day);
//   return day.toUpperCase();
// });
// console.log(capitalMonths);

// // Ager array ka index define karna ho tu hum perameter two main perameter define karyn gy. phir isy argument main pass karyn gy tu array ka index aa jye ga.
// const fruits = ["Apple", "Banana", "Peach", "Mango", "Orange"];
// fruits.map((fruit, index, arr) => {
// 	// console.log(index + 1 ,fruit);
// 	console.log(arr);
// });

// Filter Method...........................................................................................
// const vegetables = ["Garlic", "Ginger", "Onion", "Cucumber", "Tomato"];
// const filteredVegetables = vegetables.filter((vegetable) => {
//     console.log(vegetable, ":" ,vegetable.length);
//     return vegetable.length < 7;
// });
// console.log(filteredVegetables);

// const vegetables = ["Garlic", "Ginger", "Onion", "Cucumber", "Tomato"];
// const filteredVegetables = vegetables.filter((vegetable) => {
//     console.log(vegetable);
//     return vegetable.toLocaleUpperCase().includes("O");
// });
// console.log(filteredVegetables);

// filter index example..........................................................
// const vegetables = ["Garlic", "Ginger", "Onion", "Cucumber", "Tomato"];
// const filteredVegetables = vegetables.filter((vegetable, index) => {
//     console.log(index, vegetable);
//     return vegetable, index > 2;
// });
// console.log(filteredVegetables);

// // Separate adultStudents...............................................
// const students = [
//   {
//     name: "Ali Hassan",
//     age: 29,
//   },
//   {
//     name: "Bilal Hassan",
//     age: 27,
//   },
//   {
//     name: "Abdul Rehman",
//     age: 18,
//   },
//   {
//     name: "Qasim Hussain",
//     age: 17,
//   },
//   {
//     name: "Baber",
//     age: 15,
//   },
// ];

// const adultStudent = students.filter((student) => {
//   console.log(student);
//   return student.age >= 18;
// });
// console.log(adultStudent);

// // Ager adultStudents ky sirf name access karny hoon....................
// const adultStudentName = adultStudent.map((student) => {
//     return student.name
// })
// console.log(adultStudentName);

// // Chaining array method.................................................
// const students = [
//   {
//     name: "Ali Hassan",
//     age: 29,
//   },
//   {
//     name: "Bilal Hassan",
//     age: 27,
//   },
//   {
//     name: "Abdul Rehman",
//     age: 18,
//   },
//   {
//     name: "Qasim Hussain",
//     age: 17,
//   },
//   {
//     name: "Baber",
//     age: 15,
//   },
// ];
// const adultStudent = students
//   .filter((student) => {
//     return student.age >= 18;
//   })
//   .map((student) => {
//     return student.name;
//   })
//   .filter((student) => {
//     return student.includes("A");
//   })
//   .map((student) => {
//     return student.toUpperCase();
//   });
// console.log(adultStudent);

// // Reduce Method...........................................................................................
// const numbers = [1, 2, 3,];
// const sum = numbers.reduce((accumulator, current, index) => {
//   console.log(accumulator, current);
//   return accumulator + current;
// }, 0);
// console.log(sum);


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
h1[8].setAttribute("class", "title-style") 
