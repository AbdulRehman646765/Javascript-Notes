// Arrays in JavaScript.............................................................

// const fruitsCollection = ["Apple", "Banana", "Grape", "Mango"];
// console.log(fruitsCollection); // The Result is "(4) ['Apple', 'Banana', 'Grape', 'Mango']"

// const vegetablesCollection = ["Giner", "Garlic", "Potato", "Carrot "];
// console.log(vegetablesCollection); // The Result is "(4) ['Ginger', 'Garlic', 'Potato', 'Carrot']"

// Rainbow Colors (red, orange, yellow, green, blue, indigo, and violet.)
// const rainbowColors = [
//   "Red",
//   "Orange",
//   "Yellow",
//   "Green",
//   "Blue",
//   "Indigo",
//   "Violet"
// ]
// console.log(rainbowColors);

// Index Of Array In JavaScript.................................................

// const vegetablesCollection = ["Giner", "Garlic", "Potato", "Carrot "];
// console.log(vegetablesCollection);
// console.log(vegetablesCollection[1]); // The Result is "Garlic"

// Update Value after Make a Array.................................................

// const vegetablesCollection = ["Giner", "Garlic", "Potato", "Carrot "];
// // Before Update Result
// console.log(vegetablesCollection); // The Result is "(4) ['Ginger', 'Garlic', 'Potato', 'Carrot']"
// console.log(vegetablesCollection[2] = "Spinach" );
// // After Update Result
// console.log(vegetablesCollection); // The Result is "(4) ['Ginger', 'Garlic', 'Spinach', 'Carrot']"

// Array into Array...................................................................
// const animalsName = [
//     "Horse",
//     "Cat",
//     "Rabbit",
//     ["Lion", "Elephant", "Cow", "Sheep", "Goat", "Parrot"]
// ]
// console.log(animalsName); // The Result is "(4) ['Horse', 'Cat', 'Rabbit', Array(6)]"

// Add Value after Make a Array.................................................
// const booksName = ["Urdu", "English", "Islamic Studies", "Pak Studies"]
// // Before Add Value Result
// console.log(booksName); // The Result is "(4) ['Urdu', 'English', 'Islamic Studies', 'Pak Studies']
// booksName[4] = "Math"
// // After Add Value Result
// console.log(booksName); // The Result is "(5) ['Urdu', 'English', 'Islamic Studies', 'Pak Studies', 'Math']"

// We Can add Value for This Way But It's Not Common.................................................
// const booksName = ["Urdu", "English", "Islamic Studies", "Pak Studies"]
// // Before Add Value Result
// console.log(booksName); // The Result is "(4) ['Urdu', 'English', 'Islamic Studies', 'Pak Studies']
// booksName[booksName.length] = "Arabic"
// // After Add Value Result
// console.log(booksName); // The Result is "(5) ['Urdu', 'English', 'Islamic Studies', 'Pak Studies', 'Arabic']"

// Key Value Pairs in Arrays......................................................
// const user = []
// user.firstName = "Abdul"
// user.lastName = "Rehman"
// console.log(user);

// Array Methods in JavaScript.......................................................................

// pop() Define......................................................................
// Is Method sy Hum End Wali Value ko Remove Kar Sakty Hain...........................
// const courses = ["Html", "Css", "JavaScript", "Python", "Java", "C++"]
// console.log(courses); // The Result is "(6) ['Html', 'Css', 'JavaScript', 'Python', 'Java', 'C++']
// courses.pop() // Remove End "C++" Value
// courses.pop() // Remove End "Java" Value
// console.log(courses); // The Result is "(5) ['Html', 'Css', 'JavaScript', 'Python']"

// push() Define......................................................................
// Is Method sy Hum Array main New Value add kar Sakty Hain...........................
// const courses = ["Html", "Css", "JavaScript"]
// console.log(courses); // The Result is "(3) ['Html', 'Css', 'JavaScript']"
// courses.push("Python", "Java")
// console.log(courses); // The Result is "(5) ['Html', 'Css', 'JavaScript', 'Python', 'Java']"

// shift() Define.....................................................................
// Is Method sy Hum Start Wali Value ko Remove Kar Sakty Hain...........................
// const courses = ["Html", "Css", "JavaScript", "Python", "Java", "C++"]
// console.log(courses); // The Result is "(6) ['Html', 'Css', 'JavaScript', 'Python', 'Java', 'C++']
// courses.shift() // Remove Start "Html" Value
// courses.shift() // Remove Start "Css" Value
// console.log(courses); // The Result is "(4) ['JavaScript', 'Python', 'Java', 'C++']"

// unshift() Define.....................................................................
// Is Method sy Hum Start Wali Value ko Return Kar Sakty hain jo Remove Hoi Thi.......................
// const courses = ["Html", "Css", "JavaScript", "Python", "Java", "C++"]
// console.log(courses); // The Result is "(6) ['Html', 'Css', 'JavaScript', 'Python', 'Java', 'C++']"
// courses.unshift() // Return Value Jo Remove Hoi thi "Css"
// console.log(courses); // The Result is "(6) ['Html', 'Css', 'JavaScript', 'Python', 'Java', 'C++']"

// Jitni Value Remove Hoi thi un ko Return Karny Ky Baad. Is Method ( unshift() ) ko Phir Lagayen gy tu Ik New Value Add Ho Jye Gi.......................
// const courses = ["Html", "Css", "JavaScript", "Python", "Java", "C++"]
// console.log(courses); // The Result is "(6) ['Html', 'Css', 'JavaScript', 'Python', 'Java', 'C++']"
// courses.unshift("React") // New Value Add "React"
// console.log(courses); // The Result is "(7) ['React', 'Html', 'Css', 'JavaScript', 'Python', 'Java', 'C++']"

// concat() Define.....................................................................
// Is Main Hum Different Arrays Ko Ik hi Array Main Jamam Kar Sakty Hain.......................
// const fruitsItems = ["Apple", "Banana", "Peach", "Dates"]
// const vegetablesItems = ["Ginger", "Garlic", "Potato", "Tomato"]
// const mixArray = fruitsItems.concat(vegetablesItems)
// console.log(mixArray);

// indexOf() Define.....................................................................
// Is Main Hum yeh Pata Lagaty hain Ky Value Ka Index Kia Hai.......................
// const fruitsItems = ["Apple", "Banana", "Peach", "Dates", "Mango"]
// const indexOf = fruitsItems.indexOf("Dates")
// console.log(fruitsItems);
// console.log(indexOf); // This Fruit Item IndexOf "3"

// includes() Define.....................................................................
// Is Main Hum yeh Pata Laga Sakty hain Ky Yeh Value Array Main Include Hai yan Nai.......................
// const fruitsItems = ["Apple", "Banana", "Peach", "Dates", "Mango"]
// const includes = fruitsItems.includes("Peach")
// console.log(includes); // The Result is "True"
// const includes1 = fruitsItems.includes("Lemon")
// console.log(includes1);  // The Result is "False"

// reverse() Define.....................................................................
// Is Main Hum Array ki Values ko Reverse Kar Sakty Hain.......................
// const fruitsItems = ["Apple", "Banana", "Peach", "Dates", "Mango"]
// const reverse = fruitsItems.reverse()
// console.log(fruitsItems);
// console.log(reverse); // The Result is "(5) ['Mango', 'Dates', 'Peach', 'Banana', 'Apple']"

// sort() Define.....................................................................
// In This We Can Sort the Values Alphabetically....................................
// const alphabets = ["G", "K", "I", "C", "J", "A", "E", "B", "F", "H", "D"]
// console.log(alphabets);
// const sortWords = alphabets.sort()
// console.log(sortWords); // The Result is "(11) ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K']"

// slice() Define.....................................................................
// If we have to Select Some Values from an Array, We Can Separate the Values.............
// const animalsName = ["Dog", "Cat", "Cow", "Goat", "Camel", "Sheep", "Lion", "Tiger"]
// console.log(animalsName);
// const sliceValue = animalsName.slice(2, 6)
// console.log(sliceValue); // The Result is "(4) ['Cow', 'Goat', 'Camel', 'Sheep']"

// splice() Define.....................................................................
// If we have to Select Some Values from an Array, We Can Separate the Values.............
// But yeh original Array ko b Change Kar deta hai mean separate Values ko Exclude Kar Data Hai.
// const animalsName = ["Dog", "Cat", "Lion", "Tiger", "Cow", "Goat", "Camel", "Sheep"]
// console.log(animalsName); // The Result is "(8) ['Dog', 'Cat', 'Lion', 'Tiger', 'Cow', 'Goat', 'Camel', 'Sheep']"
// const spliceValue = animalsName.splice(4)
// console.log(spliceValue); // The Result is "(4) ['Cow', 'Goat', 'Camel', 'Sheep']"
// console.log(animalsName); // The Result is "(4) ['Dog', 'Cat', 'Lion', 'Tiger']"

// Remove Value for ( splice() Method help )....................................................
// const fruitItems = ["Apple", "Banana", "Kiwi", "Mango", "Grape"];
// console.log(fruitItems);
// const deleteItem = fruitItems.splice(2, 1)
// console.log(deleteItem); // The "Kiwi" Item Removed
// console.log(fruitItems); // The Result is "(4) ['Apple', 'Banana', 'Mango', 'Grape']"

// Replace Value for ( splice() Method help ).......................................................
// const fruitItems = ["Banana", "Kiwi", "Mango", "Grape"];
// console.log(fruitItems);
// const replaceItem = fruitItems.splice(1, 1, "Papaya")
// console.log(replaceItem); // Replaced Value Kiwi to Papaya
// console.log(fruitItems); // The Result is "(4) ['Banana', 'Papaya', 'Mango', 'Grape']"

// New Add Multiple Values for ( splice() Method help )..................................................
// const fruitItems = ["Apple", "Banana", "Grape"];
// console.log(fruitItems);
// const AddItems = fruitItems.splice(2, 0, "Papaya", "Water Melon")
// console.log(AddItems); // Added New Values "Papaya & Water Melon"
// console.log(fruitItems); // The Result is "(5) ['Apple', 'Banana', 'Papaya', 'Water Melon', 'Grape']"

// Multidimensional Arrays.......................................................................
// const salary = [
//   ["Ali", 500000],
//   ["Bilal", 200000],
//   ["Abdul Rehman", 100000]
// ];
// console.log(salary); // The Result is "(3) [Array(2), Array(2), Array(2)]"

// kisi Array yan us ki value ko is taran access karyn gy.........................................
// const salary = [
//     ["Ali", 500000],
//     ["Bilal", 200000],
//     ["Abdul Rehman", 100000]
//   ];
// const selectArray = [salary[1][0]] // Ager hum ik dafa asy "[1]" check karyn gy tu array ka index show ho ga or ager 2sri dafa type karyn gy tu array sy ander value ka index show ho ga. 
// console.log(selectArray);


// const ticTacToe = [
//   ["X", null, null],
//   [null, null, "O"],
//   ["O", null, "X"]
// ];

// const user1 = {firstName: "Abdul", lastName: "Rehman"};
//Shallow Copy................................................................................

// // const user2 = {};
// // Object.assign(user2, user1);
// const user2 = { ...user1 }
// console.log(user2);

// const user1 = ["Abdul Rehman"]
// const user2 = []
// Object.assign(user2, user1)
// // const user2 = [ ...user1 ]
// console.log(user2);


// Shallow Copy................................................................................

// const fruits = ["Apple", "Banana", "Peach", "Mango"];
// const myFruits = []
// Object.assign(myFruits, fruits) // is Tarah use "ES6" sy pehly kia jata tha
// const myFruits = [...fruits]; // The Spread Operator use in "ES6"
// console.log(myFruits);


// *****************************************************************************************************
// Headings Style.................................................
const h1 = document.querySelectorAll("h1");
console.log(h1);
h1[1].setAttribute("class", "title-style")
h1[2].setAttribute("class", "title-style")
h1[3].setAttribute("class", "title-style")
h1[4].setAttribute("class", "title-style") 
